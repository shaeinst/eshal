import React, { useCallback, useRef, useState } from 'react'
import { Dimensions, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import FastImage from 'react-native-fast-image'

import { SwitchIcon } from '$exporter/asset'
import { BlurImage } from '$exporter/component'
import { MMediaAttachmentType, MStatusType } from '$exporter/type'
import { FlashList } from '@shopify/flash-list'
import Video, { VideoRef } from 'react-native-video'
import { useStyles } from './stylePostCard'

const { width } = Dimensions.get('window')

type PropsType = {
    data: MMediaAttachmentType[]
    isSensitive: boolean
    inReply?: boolean
}

export default React.memo(function Media(props: PropsType) {
    //
    const { data, inReply, isSensitive } = props

    const [lazyLoad, setLazyLoad] = useState(true)
    const [isAlt, setIsAlt] = useState(false)

    const videoRef = useRef<VideoRef>(null)

    const { styles } = useStyles()

    // HANDLES
    const handleLazyLoad = useCallback(() => {
        setLazyLoad(true)
    }, [])

    const handleAlt = useCallback(() => {
        console.log('clicked: handleAlt')
        setIsAlt(prev => !prev)
    }, [isAlt])

    const listRender = useCallback(
        ({ item }: { item: MMediaAttachmentType }) => (
            <TouchableWithoutFeedback>
                <View
                    style={
                        data.length === 1
                            ? inReply
                                ? styles.inReplyIfSingleContainer
                                : styles.ifSingleContainer
                            : inReply
                            ? styles.mediaInReplyContainer
                            : styles.mediaContainer
                    }>
                    {isSensitive ? (
                        <BlurImage nsfw={isSensitive} imageUrl={item.url} />
                    ) : (
                        <FastImage source={{ uri: item.url }} style={styles.media} />
                    )}

                    {item.description ? (
                        <>
                            {isAlt ? (
                                <Text numberOfLines={12} style={styles.altDescription}>
                                    {item.description}
                                </Text>
                            ) : null}
                            <TouchableOpacity style={styles.mediaAltIconContainer} onPress={handleAlt}>
                                <SwitchIcon isOn={isAlt ? true : false} />
                                <Text style={styles.altText}>ALT</Text>
                            </TouchableOpacity>
                        </>
                    ) : null}
                </View>
            </TouchableWithoutFeedback>
        ),
        [data],
    )

    return (
        <FlashList
            data={data}
            keyExtractor={item => item.id + inReply}
            estimatedItemSize={100}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={listRender}
        />
    )
})
