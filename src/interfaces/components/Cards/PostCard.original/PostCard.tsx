import React, { useCallback, useMemo, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Animated from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import HTMLView from 'react-native-htmlview'
import FastImage from 'react-native-fast-image'

import { BoostIcon, CommentIcon, ExpandIcon, MoreDotIcon, StarIcon, SwitchIcon } from '$exporter/asset'
import { MStatusType } from '$exporter/type'
import { postDate } from '$exporter/func'
import { PostSkeleton } from '$exporter/component'
import { ROUTERS } from '$exporter/constant'
import { queryStatus } from '$exporter/backend'

import { useStyles } from './stylePostCard'
import LinkPreview from './LinkPreview'
import Media from './Media'
import AuthorName from './AuthorName'

type PropsType = {
    data: MStatusType
    inReply?: boolean
}

export default function PostCard(props: PropsType) {
    //
    const { data: _data, inReply } = props

    const data = _data.reblog || _data

    const query = queryStatus(data?.in_reply_to_id ? data.in_reply_to_id : undefined)

    const [isLongContent, setIsLongContent] = useState({
        isLong: data.content.length > 500 ? true : false,
        toggle: data.content.length > 500 ? true : false,
    })

    const { navigate } = useNavigation<NativeStackNavigationProp<any>>()
    const { styles, COLORS } = useStyles()

    /*--------- HANDLERS -------------*/
    const handleNavigate = () => {
        navigate(ROUTERS.HOME.path, {
            screen: ROUTERS.HOME.STACK_TIMELINE.POSTVIEW.path,
            params: { data },
        })
    }

    const handleContent = () => {
        setIsLongContent(prev => ({ ...prev, toggle: !prev.toggle }))
    }

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={handleNavigate}
            style={inReply ? styles.inReplyContainer : styles.container}
            //
        >
            {/********** Replied | BOOST ***********/}
            {_data.reblog?.account ? (
                <View style={styles.boostContainer}>
                    <FastImage style={styles.boostUserPic} source={{ uri: _data.account.avatar }} />
                    <AuthorName displayName={_data.account.display_name} emojis={_data.account.emojis} />
                    <BoostIcon width={16} height={17} fill="#038B8B" />
                    <Text style={styles.boostText}>boosted</Text>
                </View>
            ) : null}
            {/********** AUTHOR INFO ***********/}
            <View style={styles.authorContainer}>
                <FastImage source={{ uri: data.account.avatar }} style={styles.authorProfilePic} />
                <View>
                    <AuthorName displayName={data.account.display_name} emojis={data.account.emojis} />
                    <Text style={styles.authorId}>@{data.account.acct}</Text>
                </View>
            </View>

            <View style={inReply ? styles.altSecondContainer : styles.secondContainer}>
                {/********** POST Description ***********/}
                <HTMLView
                    value={data.content}
                    stylesheet={styles}
                    style={[isLongContent.toggle ? styles.contentContainer : null]}
                />

                {isLongContent.isLong ? (
                    <TouchableOpacity onPress={handleContent} style={styles.expandButton}>
                        <ExpandIcon collapse={!isLongContent.toggle} />
                        <Text style={styles.accessibilityText}>
                            {isLongContent.toggle ? 'Expand Text' : 'Collapse Text'}
                        </Text>
                    </TouchableOpacity>
                ) : null}

                {/********** POST Media ***********/}
                {data.media_attachments.length > 0 ? (
                    <Media data={data.media_attachments} inReply={inReply} isSensitive={data.sensitive} />
                ) : null}

                {/********** Link | Article ***********/}
                {data.card && data.media_attachments.length < 1 ? <LinkPreview card={data.card} /> : null}

                {/*------------- in Reply ---------------*/}
                {data.in_reply_to_id && !inReply ? (
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
                                {`${data.replies_count} replies · ${data.favourites_count} favs · ${data.reblogs_count} boosts `}
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
        </TouchableOpacity>
    )
}
