import React, { useCallback, useMemo, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Animated from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import HTMLView from 'react-native-htmlview'
import FastImage from 'react-native-fast-image'

import { BoostIcon, CommentIcon, ExpandIcon, MoreDotIcon, StarIcon, SwitchIcon } from '$exporter/asset'
import { MStatusType } from '$exporter/type'
import { parseDisplayName as parseName, postDate } from '$exporter/func'
import { PostSkeleton } from '$exporter/component'
import { ROUTERS } from '$exporter/constant'
import { queryStatus } from '$exporter/backend'
import { useStyles } from './stylePostCard'
import LinkPreview from './LinkPreview'
import { Media } from './Media'

type PropsType = {
    data: MStatusType
    isViewMode?: boolean
    inReply?: boolean
}

export default React.memo(function PostCard(props: PropsType) {
    //
    const { data, isViewMode, inReply } = props

    const query = queryStatus(data?.in_reply_to_id ? data.in_reply_to_id : undefined)

    const [isLongContent, setIsLongContent] = useState({
        isLong: data.content.length > 500 || false,
        toggle: data.content.length > 500 || false,
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
        navigate(ROUTERS.HOME.path, {
            screen: ROUTERS.HOME.STACK_TIMELINE.POSTVIEW.path,
            params: { data },
        })
    }, [data, query?.data, navigate])

    const handleContent = useCallback(() => {
        setIsLongContent(prev => ({ ...prev, toggle: !prev.toggle }))
    }, [])


    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={handleNavigate}
            disabled={isViewMode}
            style={inReply ? styles.inReplyContainer : styles.container}
            //
        >
            {/********** Replied | BOOST ***********/}
            {data.reblog?.account && !isViewMode ? (
                <View style={styles.boostContainer}>
                    <FastImage style={styles.boostUserPic} source={{ uri: data.reblog?.account.avatar }} />
                    <View style={styles.authorNameContainer}>
                        {displayBoosterName.map((type, index) =>
                            type.name ? (
                                <Text key={index} style={styles.authorName}>
                                    {type.name}
                                </Text>
                            ) : (
                                <FastImage key={index} source={{ uri: type.url }} style={styles.emoji} />
                            ),
                        )}
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

            <View style={isViewMode || inReply ? styles.altSecondContainer : styles.secondContainer}>
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
                </View>

                {/********** POST Media ***********/}
                {data.media_attachments.length > 0 ? (
                    <Media data={data.media_attachments} isSensitive={data.sensitive} isViewMode={isViewMode} />
                ) : null}

                {/********** Link | Article ***********/}
                {data.card ? <LinkPreview card={data.card} /> : null}

                {/*------------- in Reply ---------------*/}
                {data.in_reply_to_id && !inReply && !isViewMode ? (
                    query?.data ? (
                        <PostCard inReply={true} data={query.data} />
                    ) : (
                        <PostSkeleton />
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
                    {`${data.favourites_count} favourites  ${data.reblogs_count} boosts  ${data.replies_count} replies`}
                </Text>
            ) : null}
        </TouchableOpacity>
    )
})
