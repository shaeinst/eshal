import React, { useCallback, useRef, useState } from 'react'
import { Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import FastImage from 'react-native-fast-image'

import { FONTS, useColors, WHITESPACE } from '$exporter'
import { SwitchIcon } from '$exporter/asset'
import { BlurImage } from '$exporter/component'
import { MMediaAttachmentType, MStatusType } from '$exporter/type'
import { FlashList } from '@shopify/flash-list'
import Video, { VideoRef } from 'react-native-video'

type PropsType = {
    isViewMode?: boolean
    isSensitive: boolean
    data: MMediaAttachmentType[]
}

export function Media(props: PropsType) {
    //
    const { isViewMode, isSensitive, data } = props

    const [lazyLoad, setLazyLoad] = useState(false)
    const [isAlt, setIsAlt] = useState(false)

    const videoRef = useRef<VideoRef>(null)

    const { styles } = useStyles()

    // HANDLES
    const handleLazyLoad = useCallback(() => {
        setLazyLoad(true)
    }, [])

    const handleAlt = useCallback(() => {
        setIsAlt(prev => !prev)
    }, [])

    return (
        <View style={styles.container}>
            <FlashList
                data={data}
                estimatedItemSize={100}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    if (item.type === 'video' || item.type === 'audio') {
                        return (
                            <Video
                                // Can be a URL or a local file.
                                source={{ uri: item.url }}
                                // Store reference
                                ref={videoRef}
                                // Callback when remote video is buffering
                                // onBuffer={onBuffer}
                                // Callback when video cannot be loaded
                                // onError={onError}
                                style={{backgroundColor: 'pink', height: 200, width: 300}}
                            />
                        )
                    }
                    return <FastImage source={{ uri: item.url }} style={styles.media} />
                }}
            />
        </View>
    )
}

const { width, height } = Dimensions.get('window')

const useStyles = () => {
    //
    const { COLORS } = useColors()

    const styles = StyleSheet.create({
        //
        container: {
            height: 200,
            width: 300,
        },
        media: {
            resizeMode: 'cover',
            height: 100,
            width: 'auto',
        },
    })

    return { styles }
}
