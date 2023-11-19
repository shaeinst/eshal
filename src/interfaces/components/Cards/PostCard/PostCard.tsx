import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Text, TouchableOpacity, View, FlatList } from 'react-native'
import Animated from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import HTMLView from 'react-native-htmlview'
import FastImage from 'react-native-fast-image'
import { FlashList } from '@shopify/flash-list'

import { BoostIcon, CommentIcon, ExpandIcon, MoreDotIcon, ReplyIcon, StarIcon, SwitchIcon } from '$exporter/asset'
import { MStatusType } from '$exporter/type'
import { parseDisplayName as parseName, postDate } from '$exporter/func'
import { BlurImage } from '$exporter/component'
import { ROUTERS } from '$exporter/constant'
import { useStyles } from './stylePostCard'
import { queryStatus } from '$exporter/backend'

function PostCard(props: { data: MStatusType; isViewMode?: boolean; inReply?: boolean }) {
    //
    const { data, isViewMode, inReply } = props

    const query = queryStatus(data?.in_reply_to_id ? data.in_reply_to_id : undefined)

    const [reachedLimit, setReachedLimit] = useState(false)
    const [isAlt, setIsAlt] = useState(false)
    const [isLongContent, setIsLongContent] = useState({
        isLong: data.content.length > 1000 || false,
        toggle: data.content.length > 1000 || false,
    })

    const [activePreview, setActivePreview] = useState(() => {
        if (data?.media_attachments?.length && (!data?.card || data.media_attachments.length > 1)) {
            const { preview_url, description } = data.media_attachments[0]
            return { url: preview_url, description, preview: preview_url }
        }
        return { url: undefined, description: undefined, preview: undefined }
    })

    const { navigate } = useNavigation<NativeStackNavigationProp<any>>()
    const { styles, COLORS } = useStyles()

    const displayName = useMemo(
        () => parseName(data.account.display_name, data.account.emojis),
        [data.account.display_name, data.account.emojis],
    )
    const displayBoosterName = useMemo(
        () => (data.reblog ? parseName(data.reblog.account.display_name, data.reblog.account.emojis) : []),
        [data.reblog?.account.display_name, data.reblog?.account.emojis],
    )

    /*--------- HANDLERS -------------*/
    const handleNavigate = useCallback(() => {
        // navigate(ROUTERS.HOME.TIMELINE.POSTVIEW.path)
        if (data.in_reply_to_id) {
            navigate(ROUTERS.HOME.TIMELINE.POSTVIEW.path, { data: query?.data, id: data.in_reply_to_id })
        }
        navigate(ROUTERS.HOME.TIMELINE.POSTVIEW.path, { data })
    }, [])
    const handleContent = useCallback(() => {
        setIsLongContent(prev => ({ ...prev, toggle: !prev.toggle }))
    }, [])
    const handleAlt = useCallback(() => {
        setIsAlt(prev => !prev)
    }, [])

    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={handleNavigate}
            disabled={isViewMode}
            style={inReply ? styles.inReplyContainer : styles.container}
            //
        >
            {/********** Replied | BOOST ***********/}
            {data.reblog && !isViewMode ? (
                <View style={styles.boostContainer}>
                    <FastImage source={{ uri: data.reblog?.account.avatar }} style={styles.boostUserPic} />
                    <View style={styles.authorNameContainer}>
                        {displayBoosterName.map(type => {
                            return type.name ? (
                                <Text key={`${type.name} + ${Math.random()}`} style={styles.authorName}>
                                    {type.name}
                                </Text>
                            ) : (
                                <FastImage
                                    key={`${type.url} + ${Math.random()}`}
                                    source={{ uri: type.url }}
                                    style={styles.emoji}
                                />
                            )
                        })}
                    </View>
                    <BoostIcon width={16} height={17} fill="#038B8B" />
                    <Text style={styles.boostText}>boosted</Text>
                </View>
            ) : null}
            {/********** AUTHOR INFO ***********/}
            <View style={styles.authorContainer}>
                <FastImage source={{ uri: data.account.avatar }} style={styles.authorProfilePic} />
                <View>
                    <View style={styles.authorNameContainer}>
                        {displayName.map(type => {
                            return type.name ? (
                                <Text key={`${type.name} + ${Math.random()}`} style={styles.authorName}>
                                    {type.name}
                                </Text>
                            ) : (
                                <FastImage
                                    key={`${type.url} + ${Math.random()}`}
                                    source={{ uri: type.url }}
                                    style={styles.emoji}
                                />
                            )
                        })}
                    </View>
                    <Text style={styles.authorId}>@{data.account.acct}</Text>
                </View>
            </View>
            <View style={isViewMode ? null : styles.secondContainer}>
                {/********** POST Description ***********/}
                <HTMLView
                    value={data.content}
                    stylesheet={styles}
                    style={[isLongContent.toggle ? styles.contentContainer : null]}
                />

                <View style={styles.accessibility}>
                    {isLongContent.isLong ? (
                        <TouchableOpacity onPress={handleContent} style={styles.expandButton}>
                            <ExpandIcon collapse={!isLongContent.toggle} />
                            <Text style={styles.accessibilityText}>
                                {isLongContent.toggle ? 'Expand Text' : 'Collapse Text'}
                            </Text>
                        </TouchableOpacity>
                    ) : null}

                    {activePreview.description ? (
                        <TouchableOpacity onPress={handleAlt} style={styles.accessibilityClick}>
                            <SwitchIcon isOn={isAlt} />
                            <Text style={styles.accessibilityText}>ALT</Text>
                        </TouchableOpacity>
                    ) : null}
                </View>

                {/********** POST Media ***********/}
                {activePreview.url ? (
                    <View style={isViewMode ? styles.isViewMediaContainer : styles.mediaContainer}>
                        <Animated.View sharedTransitionTag="sharedPostPreview" style={styles.postPreviewContainer}>
                            {data.sensitive ? (
                                <BlurImage imageUrl={activePreview.url} />
                            ) : (
                                // <Image
                                //     resizeMode="cover"
                                //     source={{ uri: activePreview.url }}
                                //     style={styles.postPreview}
                                // />
                                <FastImage style={styles.postPreview} source={{ uri: activePreview.url }} />
                            )}
                            {isAlt ? <Text style={styles.altText}>{activePreview.description}</Text> : null}
                        </Animated.View>
                        {data.media_attachments ? (
                            <View style={styles.mediaListContainer}>
                                <FlatList
                                    data={data.media_attachments}
                                    overScrollMode="never"
                                    horizontal
                                    // estimatedItemSize={20} //FlashList specific option
                                    nestedScrollEnabled
                                    showsVerticalScrollIndicator={true}
                                    ItemSeparatorComponent={() => <View style={styles.seperator}></View>}
                                    renderItem={({ item }) => (
                                        // <Image
                                        //     source={{ uri: item.preview_url }}
                                        //     style={styles.media}
                                        // />
                                        //
                                        <FastImage style={styles.media} source={{ uri: item.preview_url }} />
                                    )}
                                />
                            </View>
                        ) : null}
                    </View>
                ) : null}

                {/********** Link | Article ***********/}
                {data.card && !activePreview.preview ? (
                    <TouchableOpacity style={styles.cardContainer}>
                        {data.card.type === 'photo' ? (
                            <FastImage style={styles.postPreview} source={{ uri: data.card.image }} />
                        ) : data.card.type === 'video' ? (
                            <FastImage style={styles.postPreview} source={{ uri: data.card.image }} />
                        ) : data.card.type === 'link' ? (
                            <>
                                <Text style={styles.cardDescription}> {data.card.description}</Text>
                                <Text style={styles.cardLink}> {data.card.url}</Text>
                                <FastImage  style={styles.postPreview} source={{ uri: data.card.image }} />
                            </>
                        ) : (
                            // Rich Card
                            <FastImage style={styles.postPreview} source={{ uri: data.card.image }} />
                        )}
                    </TouchableOpacity>
                ) : null}

                {/*------------- in Reply ---------------*/}
                {data.in_reply_to_id && !inReply && !isViewMode ? (
                    query?.data ? (
                        <PostCard inReply={true} data={query.data} />
                    ) : (
                        // <Text style={{ color: 'green' }}>{query.data.account.display_name}</Text>
                        <View style={styles.inReplySkeleton}>
                            <Text style={{ color: 'green' }}>{query?.error?.message}</Text>
                            <Text style={{ color: 'green' }}>Loading {query?.isLoading}</Text>
                            <Text style={{ color: 'red' }}>Fetching {query?.isFetching}</Text>
                        </View>
                    )
                ) : null}
                {/********** POST ACTIONS ***********/}
                <View style={styles.actionContainer}>
                    {inReply ? (
                        <>
                            <Text style={styles.inReplyActionText}>
                                {`${data.replies_count} replies . ${data.favourites_count} favs . ${data.reblogs_count} boosts `}
                            </Text>
                            <Text style={styles.postDate}>{postDate(data.created_at)} ago</Text>
                        </>
                    ) : (
                        <>
                            <TouchableOpacity style={styles.actionButton}>
                                <Text style={data.favourited ? styles.activeActionText : styles.actionText}>
                                    {data.favourites_count}
                                </Text>
                                <StarIcon fill={data.favourited ? COLORS.success : COLORS.actionIcon} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.actionButton}>
                                <Text style={data.reblogged ? styles.activeActionText : styles.actionText}>
                                    {data.reblogs_count}
                                </Text>
                                <BoostIcon fill={data.reblogged ? COLORS.success : COLORS.actionIcon} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.actionButton}>
                                <Text style={styles.actionText}>{data.replies_count}</Text>
                                <CommentIcon stroke={COLORS.actionIcon} />
                            </TouchableOpacity>
                            <Text style={styles.postDate}>{postDate(data.created_at)} ago</Text>
                            <TouchableOpacity>
                                <MoreDotIcon style={styles.more} />
                            </TouchableOpacity>
                        </>
                    )}
                </View>
            </View>
            {isViewMode ? (
                <Text style={styles.isViewModeText}>
                    {`${data.replies_count} replies  ${data.favourites_count} favourites  ${data.reblogs_count} boosts `}
                </Text>
            ) : null}
        </TouchableOpacity>
    )
}

export default PostCard
