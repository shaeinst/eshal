import React, { useState } from 'react'
import { Image, Text, View } from 'react-native'
import { FlashList } from '@shopify/flash-list'
import {
    BoostIcon,
    CommentIcon,
    ExpandIcon,
    MoreArrowDownIcon,
    ReplyIcon,
    SingleDotIcon,
    StarIcon,
    SwitchIcon,
} from '$exporter/asset'
import { MStatusType } from '$exporter/type'
import RenderHtml from 'react-native-render-html'

import { useStyles } from './stylePostCard'
import { FlatList } from 'react-native-gesture-handler'
import { postDate } from '$exporter/func'

const PostContent = ({ content }: { content: string }) => {
    return (
        <RenderHtml
            contentWidth={100}
            enableExperimentalMarginCollapsing={true}
            source={{ html: content }}
        />
    )
}

export default function PostCard(props: { data: MStatusType }) {
    //
    const { data } = props

    const [isAlt, setIsAlt] = useState(false)
    const [activePreview, setActivePreview] = useState<string | undefined>(
        data.media_attachments[0]?.url,
    )
    // console.log('\n\n')
    // console.log('====================================')
    // console.log('content ', data.content)
    // console.log('CONTENT:\n', data.content)
    // console.log('TAGS:\n', data.tags)
    // console.log('remote url ', data.media_attachments[0].remote_url)
    // console.log('preview url ', data.media_attachments[0].preview_url)
    // console.log('url ', data.media_attachments[0].url)
    // console.log('====================================')

    const { styles, COLORS } = useStyles()

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
            {/********** AUTHOR INFO ***********/}
            <View style={styles.authorContainer}>
                <Image source={{ uri: data.account.avatar }} style={styles.authorProfilePic} />
                <View style={styles.authorInfo}>
                    <View style={styles.NameNPost}>
                        <Text style={styles.authorName}>{data.account.display_name}</Text>
                        <Text style={styles.postDate}>{postDate(data.created_at)}</Text>
                    </View>
                    <Text style={styles.authorId}>@{data.account.acct}</Text>
                </View>
                <View style={styles.options}>
                    <MoreArrowDownIcon />
                </View>
            </View>
            {/********** POST TEXT ***********/}
            <PostContent content={data.content} />
            {/********** POST TEXT ***********/}

            {/********** TAGS ***********/}
            <Text>{data.tags.map(tag => '#' + tag.name + ' ')}</Text>

            {activePreview ? (
                <View style={styles.mediaContainer}>
                    <View style={styles.accNprev}>
                        <View style={styles.accessibility}>
                            <View style={styles.accessibilityClick}>
                                <ExpandIcon />
                                <Text style={styles.accessibilityText}>Expand Text</Text>
                            </View>
                            <View style={styles.accessibilityClick}>
                                <SwitchIcon isOn={isAlt} />
                                <Text style={styles.accessibilityText}>ALT</Text>
                            </View>
                        </View>
                        <Image source={{ uri: activePreview }} style={styles.postPreview} />
                    </View>
                    {data.media_attachments.length > 1 ? (
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
                    <Text style={data.favourited ? styles.activeActionText : styles.actionText}>
                        {data.favourites_count}
                    </Text>
                    <StarIcon fill={data.favourited ? COLORS.success : undefined} />
                </View>
                <View style={styles.action}>
                    <Text style={data.reblogged ? styles.activeActionText : styles.actionText}>
                        {data.reblogs_count}
                    </Text>
                    <BoostIcon fill={data.reblogged ? COLORS.success : undefined} />
                </View>
                <View style={styles.action}>
                    <Text style={styles.actionText}>{data.replies_count}</Text>
                    <CommentIcon />
                </View>
            </View>
        </View>
    )
}
