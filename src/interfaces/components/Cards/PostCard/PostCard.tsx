import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
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
    const { styles, COLORS } = useStyles(inReply)
    const data = _data.reblog || _data

    const query = queryStatus(data?.in_reply_to_id ? data.in_reply_to_id : undefined)

    // useEffect(() => {
    //     console.log('\n\n\n\n\n\n\n\n')
    //     console.log('=====================')
    //     console.log(data)
    //     console.log('=====================')
    // }, [])

    return (
        <View style={styles.container}>
            {/********** Replied | BOOST ***********/}
            {_data.reblog?.account ? (
                <View style={styles.boostContainer}>
                    <FastImage style={styles.boostUserPic} source={{ uri: _data.reblog.account.avatar }} />
                    <AuthorName
                        reblog
                        displayName={_data.reblog.account.display_name}
                        emojis={_data.reblog.account.emojis}
                    />
                    <BoostIcon width={16} height={17} fill="#038B8B" />
                    <Text style={styles.boostText}>boosted</Text>
                </View>
            ) : null}

            {/********** Author Info ***********/}
            <Image style={styles.authorAvatar} source={{ uri: data.account.avatar }} />
            <AuthorName displayName={data.account.display_name} emojis={data.account.emojis} />
            <Text style={styles.authorId}>@{data.account.acct}</Text>

            {/********** Post Content ***********/}
            <HTMLView value={data.content} stylesheet={styles} style={styles.contentContainer} />

            {/********** POST Media ***********/}
            {data.media_attachments.length > 0 ? (
                <Media id={data.id} data={data.media_attachments} inReply={inReply} isSensitive={data.sensitive} />
            ) : null}

            {/* ********* Link | Article ********** */}
            {data.card && data.media_attachments.length < 1 ? <LinkPreview inReply={inReply} card={data.card} /> : null}

            {/********** in Reply ***********/}
            {data.in_reply_to_id && !inReply ? (
                query?.data ? (
                    <PostCard inReply={true} data={query.data} />
                ) : (
                    <PostSkeleton />
                )
            ) : null}

            {/********** POST ACTIONS ***********/}
            <View style={styles.actionContainer}>
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
            </View>
        </View>
    )
}
