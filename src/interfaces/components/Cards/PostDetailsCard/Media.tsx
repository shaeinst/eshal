import React, { useCallback, useRef, useState } from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import FastImage from 'react-native-fast-image'

import { FONTS, useColors, WHITESPACE } from '$exporter'
import { SwitchIcon } from '$exporter/asset'
import { BlurImage } from '$exporter/component'
import { MMediaAttachmentType, MStatusType } from '$exporter/type'
import { FlashList } from '@shopify/flash-list'
import Video, { VideoRef } from 'react-native-video'

const { width } = Dimensions.get('window')

type PropsType = {
    data: MMediaAttachmentType[]
    isSensitive: boolean
    inReply?: boolean
}

export function Media(props: PropsType) {
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
        setIsAlt(prev => !prev)
    }, [])

    return (
        <FlashList
            // data={data}
            data={data}
            estimatedItemSize={100}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
                // <FastImage source={{ uri: item }} style={styles.media} resizeMode="cover" />
                return (
                    <TouchableWithoutFeedback>
                        <View style={data.length === 1 ? styles.ifSingleContainer : styles.container}>
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
                                    <TouchableOpacity onPress={handleAlt}>
                                        <Text style={styles.altText}>ALT</Text>
                                    </TouchableOpacity>
                                </>
                            ) : null}
                        </View>
                    </TouchableWithoutFeedback>
                )
            }}
        />
    )
}

const useStyles = () => {
    //
    const { COLORS } = useColors()

    const styles = StyleSheet.create({
        //
        container: {
            width: width * 0.8,
            height: width * 0.5,
            marginHorizontal: 4,
            borderWidth: 0.4,
            borderRadius: 12,
            borderColor: COLORS.seperator,
        },
        ifSingleContainer: {
            width: width * 0.9,
            height: width * 0.6,
        },
        media: {
            flex: 1,
            borderRadius: 12,
            overflow: 'hidden',
        },
        altText: {
            ...FONTS.Inter['Md-10'],
            position: 'absolute',
            bottom: 6,
            right: 6,
            color: COLORS.text,
            backgroundColor: COLORS.background,
            borderRadius: 12,
            paddingHorizontal: 4,
        },
        altDescription: {
            ...FONTS.Inter['Lt-12'],
            backgroundColor: COLORS.background,
            color: COLORS.text,
            position: 'absolute',
            top: 0,
            left: 0,
            padding: 2,
            borderRadius: 12,
            margin: 2,
        },
    })

    return { styles }
}
