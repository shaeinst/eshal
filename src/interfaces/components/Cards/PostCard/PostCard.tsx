import React, { useCallback, useMemo, useState } from 'react'
import { Image, Text, TouchableOpacity, View, FlatList, StyleSheet } from 'react-native'
import { FlashList } from '@shopify/flash-list'
import FastImage from 'react-native-fast-image'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import HTMLView from 'react-native-htmlview'

import {
    BoostIcon,
    CommentIcon,
    ExpandIcon,
    MoreDotIcon,
    ReplyIcon,
    StarIcon,
    SwitchIcon,
} from '$exporter/asset'
import { MStatusType } from '$exporter/type'
import { parseDisplayName, postDate } from '$exporter/func'
import { BlurImage } from '$exporter/component'
import { useStyles } from './stylePostCard'
import { useNavigation } from '@react-navigation/native'
import { ROUTERS } from '$exporter/constant'

type ActivePreviewType = {
    url: string | undefined
    description: string | undefined
}

function PostCard(props: { data: MStatusType }) {
    //
    const { data } = props

    const [isAlt, setIsAlt] = useState(false)
    const [isLongContent, setIsLongContent] = useState({
        isLong: data.content.length > 1000 || false,
        toggle: data.content.length > 1000 || false,
    })
    const [activePreview, setActivePreview] = useState<ActivePreviewType>(
        data.media_attachments
            ? data.media_attachments[0]
            : {
                  url: undefined,
                  description: undefined,
              },
    )

    const { navigate } = useNavigation<NativeStackNavigationProp<any>>()

    const { styles, COLORS } = useStyles()
    const parsedDisplayName = useMemo(
        () => parseDisplayName(data.account.display_name, data.account.emojis),
        [],
    )

    // console.log('=========================')
    // console.log(data.account.avatar)
    // if (data.content.length > 200) {
    //     console.log(data.content)
    // }
    // console.log(data.account.url)
    // console.log('=========================')

    const handle = useCallback((type: 'navigate' | 'content' | 'alt') => {
        switch (type) {
            // go to detail post view page
            case 'navigate':
                // navigate(ROUTERS.HOME.TIMELINE.POSTVIEW.path)
                navigate(ROUTERS.HOME.TIMELINE.POSTVIEW.path, { data })
                break

            case 'content':
                setIsLongContent(prev => ({ ...prev, toggle: !prev.toggle }))
                break

            case 'alt':
                setIsAlt(prev => !prev)
                break

            default:
                break
        }
    }, [])

    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => handle('navigate')}
            style={styles.container}
            //
        >
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
                    <View style={[isLongContent.toggle ? styles.contentContainer : null]}>
                        <HTMLView value={data.content} stylesheet={styles} />
                    </View>

                    <View style={styles.accessibility}>
                        {isLongContent.isLong ? (
                            <TouchableOpacity
                                onPress={() => handle('content')}
                                style={styles.expandButton}>
                                <ExpandIcon collapse={!isLongContent.toggle} />
                                <Text style={styles.accessibilityText}>
                                    {isLongContent.toggle ? 'Expand Text' : 'Collapse Text'}
                                </Text>
                            </TouchableOpacity>
                        ) : null}

                        {activePreview?.description ? (
                            <TouchableOpacity
                                onPress={() => handle('alt')}
                                style={styles.accessibilityClick}>
                                <SwitchIcon isOn={isAlt} />
                                <Text style={styles.accessibilityText}>ALT</Text>
                            </TouchableOpacity>
                        ) : null}
                    </View>

                    {/********** POST Media ***********/}
                    {activePreview?.url ? (
                        <View style={styles.mediaContainer}>
                            <View style={styles.accNprev}>
                                <View style={styles.postPreviewContainer}>
                                    {data.sensitive ? (
                                        <BlurImage imageUrl={activePreview.url} />
                                    ) : (
                                        // <Image
                                        //     resizeMode="cover"
                                        //     source={{ uri: activePreview.url }}
                                        //     style={styles.postPreview}
                                        // />
                                        <FastImage
                                            style={styles.postPreview}
                                            source={{
                                                uri: activePreview.url,
                                                priority: FastImage.priority.normal,
                                            }}
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
                                            // <Image
                                            //     source={{ uri: item.preview_url }}
                                            //     style={styles.media}
                                            // />
                                            //
                                            <FastImage
                                                style={styles.media}
                                                source={{
                                                    uri: item.preview_url,
                                                    priority: FastImage.priority.normal,
                                                }}
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
        </TouchableOpacity>
    )
}

export default React.memo(PostCard)
