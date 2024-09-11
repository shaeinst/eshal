import React, { useCallback, useMemo, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Animated from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import HTMLView from 'react-native-htmlview'
// import FastImage from 'react-native-fast-image'
import { Image } from 'expo-image';

import { BoostIcon, CommentIcon, ExpandIcon, MoreDotIcon, StarIcon, SwitchIcon } from '$exporter/asset'
import { MStatusType } from '$exporter/type'
import { parseDisplayName as parseName, postDate } from '$exporter/func'
import { ROUTERS } from '$exporter/constant'
import { queryStatus } from '$exporter/backend'
import { useStyles } from './stylePostCard'
import LinkPreview from './LinkPreview'
import { Media } from './Media'

type PropsType = {
    data: MStatusType
    inReply?: boolean
}

export default React.memo(function PostCard(props: PropsType) {
    //
    const { data: _data, inReply } = props

    const data = useMemo(() => _data.reblog || _data, [_data])

    const query = queryStatus(data?.in_reply_to_id ? data.in_reply_to_id : undefined)

    const [isLongContent, setIsLongContent] = useState({
        isLong: data.content.length > 800 ? true : false,
        toggle: data.content.length > 800 ? true : false,
    })

    const { navigate } = useNavigation<NativeStackNavigationProp<any>>()
    const { styles, COLORS } = useStyles()

    const displayName = useMemo(
        () => parseName(data.account.display_name, data.account.emojis),
        [data.account.display_name, data.account.emojis],
    )
    const displayBoosterName = useMemo(
        () => (_data.reblog ? parseName(_data.account.display_name, _data.account.emojis) : []),
        [_data.account.display_name, data.account.emojis],
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
    }, [isLongContent])

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={handleNavigate}
            disabled
            style={inReply ? styles.inReplyContainer : styles.container}
        //
        >
            {/********** AUTHOR INFO ***********/}
            <View style={styles.authorContainer}>
                <Image source={{ uri: data.account.avatar }} style={styles.authorProfilePic} />
                <View>
                    <View style={styles.authorNameContainer}>
                        {displayName.map(type => {
                            return type.name ? (
                                <Text key={`${type.name} + ${Math.random()}`} style={styles.authorName}>
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
            </View>

            <View style={styles.altSecondContainer}>
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
            <Text style={styles.isViewModeText}>
                {`${data.favourites_count} favourites · ${data.reblogs_count} boosts · ${data.replies_count} replies`}
            </Text>
        </TouchableOpacity>
    )
})
