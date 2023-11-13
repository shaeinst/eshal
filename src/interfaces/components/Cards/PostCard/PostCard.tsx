import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { FlashList } from '@shopify/flash-list'
import {
    BoostIcon,
    CommentIcon,
    ExpandIcon,
    MoreArrowDownIcon,
    MoreDotIcon,
    ReplyIcon,
    SingleDotIcon,
    StarIcon,
    SwitchIcon,
} from '$exporter/asset'
import { MStatusType } from '$exporter/type'
import RenderHtml from 'react-native-render-html'

import { useStyles } from './stylePostCard'
import { FlatList } from 'react-native-gesture-handler'
import { parseDisplayName, postDate } from '$exporter/func'
import { BlurImage } from '$exporter/component'

export default function PostCard(props: { data: MStatusType }) {
    //
    const { data } = props

    const [isAlt, setIsAlt] = useState(false)
    const [isNSFW, setIsNSFW] = useState(data.sensitive)

    const initialMedia = data.media_attachments
        ? data.media_attachments[0]
        : {
              url: undefined,
              description: undefined,
          }
    const [activePreview, setActivePreview] = useState<{
        url: string | undefined
        description: string | undefined
    }>(initialMedia)

    const { styles, COLORS } = useStyles()
    const parsedDisplayName = parseDisplayName(data.account.display_name, data.account.emojis)

    // console.log('=========================')
    // console.log(activePreview?.desc)
    // console.log('=========================')

    return (
        <View style={styles.container}>
            {/********** Replied | BOOST ***********/}
            {data.reblog ? (
                <View style={styles.boostContainer}>
                    <Image
                        source={{ uri: data.reblog?.account.avatar }}
                        style={styles.boostUserPic}
                    />
                    <Text style={styles.boostUserName}>{data.reblog?.account.display_name}</Text>
                    <BoostIcon width={16} height={17} fill="#038B8B" />
                    <Text style={styles.boostText}>boosted</Text>
                </View>
            ) : null}
            {data.in_reply_to_id ? (
                <View style={styles.boostContainer}>
                    <ReplyIcon width={16} height={17} fill="#038B8B" />
                    <Text style={styles.boostText}>in reply</Text>
                </View>
            ) : null}
            <View style={styles.secondryContainer}>
                <Image source={{ uri: data.account.avatar }} style={styles.authorProfilePic} />
                <View style={styles.thirdContainer}>
                    {/********** AUTHOR INFO ***********/}
                    <View>
                        <View style={styles.NameNPost}>
                            {parsedDisplayName.map(type => {
                                return type.name ? (
                                    <Text
                                        key={`${type.name} + ${Math.random()}`}
                                        style={styles.authorName}>
                                        {type.name}
                                    </Text>
                                ) : (
                                    <Image
                                        key={`${type.url} + ${Math.random()}`}
                                        source={{ uri: type.url }}
                                        style={styles.emoji}
                                    />
                                )
                            })}
                        </View>
                        <Text style={styles.authorId}>@{data.account.acct}</Text>
                    </View>
                    {/********** POST Description ***********/}
                    <RenderHtml
                        contentWidth={100}
                        enableExperimentalMarginCollapsing={true}
                        source={{ html: data.content }}
                    />

                    {activePreview?.description ? (
                        <View style={styles.accessibility}>
                            <TouchableOpacity
                                onPress={() => setIsAlt(prev => !prev)}
                                style={styles.accessibilityClick}>
                                <SwitchIcon isOn={isAlt} />
                                <Text style={styles.accessibilityText}>ALT</Text>
                            </TouchableOpacity>
                        </View>
                    ) : null}

                    {/********** POST Media ***********/}
                    {activePreview?.url ? (
                        <View style={styles.mediaContainer}>
                            <View style={styles.accNprev}>
                                <View style={styles.postPreviewContainer}>
                                    {isNSFW ? (
                                        <BlurImage imageUrl={activePreview.url} />
                                    ) : (
                                        <Image
                                            resizeMode="cover"
                                            source={{ uri: activePreview.url }}
                                            style={styles.postPreview}
                                            blurRadius={isAlt ? 20 : undefined}
                                        />
                                    )}
                                    {isAlt ? (
                                        <Text style={styles.altText}>
                                            {activePreview.description}
                                        </Text>
                                    ) : null}
                                </View>
                            </View>
                            {data.media_attachments ? (
                                <View style={styles.mediaListContainer}>
                                    <FlatList
                                        data={data.media_attachments}
                                        overScrollMode="never"
                                        horizontal
                                        // estimatedItemSize={20} //FlashList specific option
                                        nestedScrollEnabled
                                        showsVerticalScrollIndicator={true}
                                        ItemSeparatorComponent={() => (
                                            <View style={styles.seperator}></View>
                                        )}
                                        renderItem={({ item }) => (
                                            <Image
                                                source={{ uri: item.preview_url }}
                                                style={styles.media}
                                            />
                                        )}
                                    />
                                </View>
                            ) : null}
                        </View>
                    ) : null}
                    {/********** POST ACTIONS ***********/}
                    <View style={styles.actionContainer}>
                        <View style={styles.action}>
                            <Text
                                style={
                                    data.favourited ? styles.activeActionText : styles.actionText
                                }>
                                {data.favourites_count}
                            </Text>
                            <StarIcon fill={data.favourited ? COLORS.success : COLORS.actionIcon} />
                        </View>
                        <View style={styles.action}>
                            <Text
                                style={
                                    data.reblogged ? styles.activeActionText : styles.actionText
                                }>
                                {data.reblogs_count}
                            </Text>
                            <BoostIcon fill={data.reblogged ? COLORS.success : COLORS.actionIcon} />
                        </View>
                        <View style={styles.action}>
                            <Text style={styles.actionText}>{data.replies_count}</Text>
                            <CommentIcon stroke={COLORS.actionIcon} />
                        </View>
                        <View style={styles.options}>
                            <Text style={styles.postDate}>{postDate(data.created_at)} ago</Text>
                            <MoreDotIcon />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}
