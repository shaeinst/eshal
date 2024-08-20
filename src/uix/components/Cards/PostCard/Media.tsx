import React, { useCallback, useEffect, useRef, useState } from 'react'
import {
    Dimensions,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
    FlatList,
    ListRenderItemInfo,
} from 'react-native'
import FastImage, { OnLoadEvent } from 'react-native-fast-image'
import { FlashList } from '@shopify/flash-list'
import Video, { OnLoadData } from 'react-native-video'
import { Blurhash } from 'react-native-blurhash'

import { EyeIcon, SwitchIcon } from '$exporter/asset'
import { BlurImage, PrimaryButton } from '$exporter/component'
import { ColorType, MMediaAttachmentType, MStatusType } from '$exporter/type'
import { FONTS, WHITESPACE, useColors } from '$exporter'
import { mediaStyles, listRenderStyles } from './styleMedia'

const baseWidth = Dimensions.get('window').width - WHITESPACE.postCardIndent - 22

type PropsType = {
    id: string
    data: MMediaAttachmentType[]
    isSensitive: boolean
    inReply?: boolean
}
type PropsListRenderType = {
    item: MMediaAttachmentType
    isAlt: boolean
    mediaWidth: number
    COLORS: ColorType
    isSensitive: boolean
}

const ListRender = ({ item, isAlt, mediaWidth, COLORS, isSensitive }: PropsListRenderType) => {
    //
    const videoRef = useRef<Video>(null)
    const [mediaHeight, setMediaHeight] = useState(mediaWidth)
    const [isImageLoading, setIsImageLoading] = useState(true)
    const [hideNSFW, setHideSNFW] = useState(isSensitive)

    const styles = listRenderStyles(COLORS, mediaWidth, mediaHeight)

    const handleNSFW = () => {
        setHideSNFW(prev => !prev)
    }
    const onImageLoad = (event: OnLoadEvent) => {
        // height = imageWidth / aspectRatio  = imageWidth / (width / height) = imageWidth * height / width
        const { width, height } = event.nativeEvent
        setMediaHeight((mediaWidth * height) / width)
        setIsImageLoading(false)
    }
    const onVideoLoad = (event: OnLoadData) => {
        // height = imageWidth / aspectRatio  = imageWidth / (width / height) = imageWidth * height / width
        const { width, height } = event.naturalSize
        setMediaHeight((mediaWidth * height) / width)
    }
    const handleAltDescription = () => {
        // setMediaHeight(prev=> prev + 30)
    }

    return (
        <TouchableWithoutFeedback>
            <View>
                {isAlt ? <Text onPress={handleAltDescription} style={styles.altDescription}>{item.description}</Text> : null}
                {item.type === 'video' ? (
                    // TODO: for now just display not supported
                    // <Video
                    //     source={{ uri: item.url }}
                    //     ref={videoRef}
                    //     onLoad={onVideoLoad}
                    //     resizeMode="contain"
                    //     style={styles.media}
                    // />
                    <Text style={styles.unknown}>Media format not supported</Text>
                ) : item.type === 'image' || item.type === 'gifv' ? (
                    <>
                        {isImageLoading ? (
                            <View style={styles.containerBlurhash}>
                                <Blurhash blurhash={item.blurhash} style={styles.blurhash} />
                            </View>
                        ) : null}
                        <FastImage
                            // source={{ uri: 'https://clipart-library.com/images/5iRrxkaRT.gif' }}
                            source={{ uri: item.url }}
                            onLoad={onImageLoad}
                            resizeMode={FastImage.resizeMode.contain}
                            style={isImageLoading || hideNSFW ? null : styles.media}
                        />
                        {isSensitive && !isImageLoading ? (
                            <>
                                {hideNSFW ? (
                                    <View style={styles.containerNSFW}>
                                        <Blurhash blurhash={item.blurhash} style={styles.NSFWBlurhash} />
                                    </View>
                                ) : null}
                                <TouchableOpacity onPress={handleNSFW} style={styles.nsfwButton}>
                                    <EyeIcon hidden={!hideNSFW} />
                                    <Text style={styles.nsfwButtonText}>NSFW</Text>
                                </TouchableOpacity>
                            </>
                        ) : null}
                    </>
                ) : item.type === 'audio' ? (
                    // TODO: for now just display not supported
                    <Text style={styles.unknown}>Media format not supported</Text>
                ) : (
                    <Text style={styles.unknown}>Media format not supported</Text>
                )}
            </View>
        </TouchableWithoutFeedback>
    )
}

export default function Media(props: PropsType) {
    //
    const { data, id, inReply, isSensitive } = props
    const { styles, COLORS } = mediaStyles(inReply)

    const showAlt = data.some(item => item.description)
    const mediaWidth = inReply
        ? data.length == 1
            ? baseWidth - 16
            : baseWidth - 48
        : data.length == 1
        ? baseWidth
        : baseWidth - 32

    const [isAlt, setIsAlt] = useState(false)

    const handleAlt = () => {
        setIsAlt(prev => !prev)
    }

    // const RenderItem = ({ item }: ListRenderItemInfo<MMediaAttachmentType>) => (
    //     <ListRender COLORS={COLORS} mediaWidth={mediaWidth} item={item} isAlt={isAlt} />
    // )
    // const ItemSeparatorComponent = () => <View style={styles.indent}></View>
    // const ListHeaderComponent = () => <View style={styles.seperator}></View>

    return (
        <View style={styles.container}>
            {showAlt ? (
                <TouchableOpacity style={styles.mediaAltIconContainer} onPress={handleAlt}>
                    <SwitchIcon isOn={isAlt ? true : false} />
                    <Text style={styles.altText}>ALT</Text>
                </TouchableOpacity>
            ) : null}

            <FlatList
                data={data}
                keyExtractor={item => id + item.url}
                // estimatedItemSize={300}
                horizontal
                contentContainerStyle={styles.contentContainer}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <ListRender
                        COLORS={COLORS}
                        mediaWidth={mediaWidth}
                        item={item}
                        isAlt={isAlt}
                        isSensitive={isSensitive}
                    />
                )}
                ListHeaderComponent={() => <View style={styles.indent}></View>}
                ItemSeparatorComponent={() => <View style={styles.seperator}></View>}
            />
        </View>
    )
}
