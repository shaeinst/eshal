import React, { useCallback, useEffect, useRef, useState } from 'react'
import { StyleSheet, Dimensions, Text, TouchableOpacity, TouchableWithoutFeedback, View, FlatList } from 'react-native'
import FastImage from 'react-native-fast-image'

import { SwitchIcon } from '$exporter/asset'
import { BlurImage } from '$exporter/component'
import { MMediaAttachmentType, MStatusType } from '$exporter/type'
import { FlashList } from '@shopify/flash-list'
import Video, { VideoRef } from 'react-native-video'
import { FONTS, WHITESPACE, useColors } from '$exporter'

const width = Dimensions.get('window').width - WHITESPACE.postCardIndent - 22

type PropsType = {
    data: MMediaAttachmentType[]
    isSensitive: boolean
    inReply?: boolean
}

export default function Media(props: PropsType) {
    //
    const { data, inReply, isSensitive } = props

    const [lazyLoad, setLazyLoad] = useState(true)
    const [isAlt, setIsAlt] = useState(false)

    const videoRef = useRef<VideoRef>(null)

    const { styles, setImageHeight, imageWidth } = useStyles(data.length)

    // HANDLES
    const handleAlt = () => {
        console.log('clicked: handleAlt')
        setIsAlt(prev => !prev)
    }

    const listRender = ({ item }: { item: MMediaAttachmentType }) => {
        return (
            <TouchableWithoutFeedback>
                <View style={styles.container}>
                    {isAlt ? (
                        <Text numberOfLines={12} style={styles.altDescription}>
                            {item.description}
                        </Text>
                    ) : null}
                    <FastImage
                        source={{ uri: item.url }}
                        style={styles.media}
                        onLoad={({ nativeEvent }) => {
                            const aspectRatio = nativeEvent.width / nativeEvent.height
                            setImageHeight(imageWidth / aspectRatio)
                        }}
                        resizeMode="contain"
                    />
                    {item.description ? (
                        <TouchableOpacity style={styles.mediaAltIconContainerParent} onPress={handleAlt}>
                            {isAlt ? <Text style={styles.altText}>X</Text> : <Text style={styles.altText}>ALT</Text>}
                        </TouchableOpacity>
                    ) : null}
                </View>
            </TouchableWithoutFeedback>
        )
    }

    return (
        <FlatList
            data={data}
            keyExtractor={item => item.id + inReply}
            // estimatedItemSize={100}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={listRender}
            ListHeaderComponent={() => <View style={styles.indent}></View>}
            ItemSeparatorComponent={() => <View style={styles.seperator}></View>}
        />
    )
}

export function useStyles(totalImage: number) {
    //
    const { COLORS } = useColors()

    const [imageWidth, _] = useState(totalImage == 1 ? width : width - 32)
    const [imageHeight, setImageHeight] = useState(imageWidth)

    const styles = StyleSheet.create({
        container: {
            borderColor: COLORS.seperator,
            marginTop: 12,
        },
        media: {
            borderRadius: 12,
            backgroundColor: 'red',
            width: imageWidth,
            height: imageHeight,
        },
        altDescription: {
            ...FONTS.Inter['Lt-12'],
            backgroundColor: COLORS.background,
            color: COLORS.text,
            padding: 6,
            margin: 4,
            borderRadius: 12,
            position: 'absolute',
            zIndex: 1000,

            top: 1,
            left: 0,
            right: 0,
        },
        mediaAltIconContainerParent: {
            alignItems: 'flex-end',
        },
        altText: {
            ...FONTS.Inter['Lt-12'],
            color: COLORS.weakText,
            flexDirection: 'row',
            borderRadius: 12,
            backgroundColor: COLORS.text,
            paddingHorizontal: 6,
            marginTop: -20,
            marginRight: 6,
        },

        indent: {
            width: WHITESPACE.postCardIndent,
        },
        seperator: {
            width: 10,
        },
    })

    return { styles, COLORS, setImageHeight, imageWidth }
}
