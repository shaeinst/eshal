import React, { useCallback, useMemo, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Animated from 'react-native-reanimated'
// import FastImage from 'react-native-fast-image'
import { Image } from 'expo-image'
import HTMLView from 'react-native-htmlview'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'


import {
    BoostIcon,
    CommentIcon,
    ExpandIcon,
    MoreDotIcon,
    PlusMinuxCircleIcon,
    StarIcon,
    SwitchIcon,
} from '$exporter/asset'
import { parseDisplayName as parseName, postDate } from '$exporter/func'
import { MStatusType } from '$exporter/type'
import { ROUTERS } from '$exporter/constant'
import { BlurImage } from '$exporter/component'
import { useStyles } from './styleComment'

export default function Comment({ data }: { data: MStatusType }) {
    //
    const [recursiveComment, setRecursiveComment] = useState(false)
    const [isAlt, setIsAlt] = useState(false)
    const [showThread, setShowThread] = useState(recursiveComment)
    const [isLongContent, setIsLongContent] = useState({
        isLong: data.content.length > 1000 || false,
        toggle: data.content.length > 1000 || false,
    })
    const [activePreview, setActivePreview] = useState<{ url?: string; description?: string; preview?: string }>(
        data?.media_attachments?.length
            ? {
                url: data.media_attachments[0].preview_url,
                description: data.media_attachments[0].description,
                preview: data.media_attachments[0].preview_url,
            }
            : { url: undefined, description: undefined, preview: undefined },
    )

    const { styles, COLORS } = useStyles()

    const displayName = useMemo(
        () => parseName(data.account.display_name, data.account.emojis),
        [data.account.display_name, data.account.emojis],
    )

    /*--------- HANDLERS -------------*/
    const handleContent = useCallback(() => {
        setIsLongContent(prev => ({ ...prev, toggle: !prev.toggle }))
    }, [])
    const handleAlt = useCallback(() => {
        setIsAlt(prev => !prev)
    }, [])
    const handleThread = useCallback(() => {
        setShowThread(prev => !prev)
        setRecursiveComment(prev => !prev)
    }, [])

    return (
        <View style={styles.container}>
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
            <View style={styles.postContainer}>
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
                    <View style={styles.mediaContainer}>
                        <Animated.View sharedTransitionTag="sharedPostPreview" style={styles.postPreviewContainer}>
                            {data.sensitive ? (
                                <BlurImage imageUrl={activePreview.url} nsfw />
                            ) : (
                                <Image style={styles.postPreview} source={{ uri: activePreview.url }} />
                            )}
                            {isAlt ? <Text style={styles.altText}>{activePreview.description}</Text> : null}
                        </Animated.View>
                        {data.media_attachments ? (
                            <View style={styles.mediaListContainer}>
                                {/* -------------------------------- TODO: -----------------------------*/}
                            </View>
                        ) : null}
                    </View>
                ) : null}
                {/********** POST ACTIONS ***********/}
                <View style={styles.actionContainer}>
                    <TouchableOpacity style={styles.actionButton}>
                        <Text style={styles.actionText}>{data.replies_count} replies</Text>
                    </TouchableOpacity>
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
                    <Text style={styles.postDate}>{postDate(data.created_at)} ago</Text>
                    <TouchableOpacity>
                        <MoreDotIcon style={styles.more} />
                    </TouchableOpacity>

                    {true ? (
                        // {recursiveComment ? (
                        <TouchableOpacity style={styles.threadIconButton} onPress={handleThread}>
                            <PlusMinuxCircleIcon fill={COLORS.seperator} minus={showThread ? true : false} />
                        </TouchableOpacity>
                    ) : null}
                </View>
            </View>
            {/*---------- Recursion -------------*/}
            {recursiveComment && showThread ? (
                <View style={styles.recursiveComment}>
                    <Comment data={data} />
                </View>
            ) : null}
            {true ? (
                // {recursiveComment ? (
                <TouchableOpacity
                    disabled={!recursiveComment}
                    style={styles.threadContainer}
                    onLongPress={handleThread}
                />
            ) : null}
        </View>
    )
}
