import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Dimensions, Text, TouchableOpacity, TouchableWithoutFeedback, View, FlatList } from 'react-native'
import FastImage, { OnLoadEvent } from 'react-native-fast-image'
import { FlashList } from '@shopify/flash-list'
import Video, { OnLoadData } from 'react-native-video'
import WaveForm from 'react-native-audiowaveform'

import { SwitchIcon } from '$exporter/asset'
import { BlurImage } from '$exporter/component'
import { ColorType, MMediaAttachmentType, MStatusType } from '$exporter/type'
import { FONTS, WHITESPACE, useColors } from '$exporter'
import { mediaStyles, listRenderStyles } from './styleMedia'

const baseWidth = Dimensions.get('window').width - WHITESPACE.postCardIndent - 22

// Import the react-native-sound module
var Sound = require('react-native-sound')
// Enable playback in silence mode
// Sound.setCategory('Playback')
// var whoosh = new Sound(
//     'https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3',
//     Sound.MAIN_BUNDLE,
//     (error: any) => {
//         if (error) {
//             console.log('failed to load the sound', error)
//             return
//         }
//         // loaded successfully
//         console.log(
//             'duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels(),
//         )

//         // Play the sound with an onEnd callback
//         whoosh.play((success: any) => {
//             if (success) {
//                 console.log('successfully finished playing')
//             } else {
//                 console.log('playback failed due to audio decoding errors')
//             }
//         })
//     },
// )

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
}

const ListRender = ({ item, isAlt, mediaWidth, COLORS }: PropsListRenderType) => {
    const videoRef = useRef<Video>(null)
    const [mediaHeight, setMediaHeight] = useState(mediaWidth)
    const styles = listRenderStyles(COLORS, mediaWidth, mediaHeight)

    const onImageLoad = (event: OnLoadEvent) => {
        // height = imageWidth / aspectRatio  = imageWidth / (width / height) = imageWidth * height / width
        const { width, height } = event.nativeEvent
        setMediaHeight((mediaWidth * height) / width)
    }
    const onVideoLoad = (event: OnLoadData) => {
        // height = imageWidth / aspectRatio  = imageWidth / (width / height) = imageWidth * height / width
        const { width, height } = event.naturalSize
        setMediaHeight((mediaWidth * height) / width)
    }

    return (
        <TouchableWithoutFeedback>
            <View>
                {isAlt ? <Text style={styles.altDescription}>{item.description}</Text> : null}
                {item.type === 'video' ? (
                    <Video
                        source={{ uri: item.url }}
                        ref={videoRef}
                        onLoad={onVideoLoad}
                        resizeMode="contain"
                        style={styles.media}
                    />
                ) : item.type === 'image' || item.type === 'gifv' ? (
                    <FastImage
                        // source={{ uri: 'https://clipart-library.com/images/5iRrxkaRT.gif' }}
                        source={{ uri: item.url }}
                        onLoad={onImageLoad}
                        resizeMode="contain"
                        style={styles.media}
                    />
                ) : item.type === 'audio' ? (
                    <View>
                        <Text>Audio file</Text>
                    </View>
                ) : (
                    <Text>Unknow</Text>
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
    // const mediaWidth = data.length == 1 ? baseWidth : baseWidth - 32
    const mediaWidth = inReply
        ? data.length == 1
            ? baseWidth - 10
            : baseWidth - 42
        : data.length == 1
        ? baseWidth
        : baseWidth - 32

    const [isAlt, setIsAlt] = useState(false)

    // HANDLES
    const handleAlt = () => {
        console.log('clicked: handleAlt: ', isAlt)
        setIsAlt(prev => !prev)
    }

    return (
        <View style={styles.container}>
            {showAlt ? (
                <TouchableOpacity style={styles.mediaAltIconContainer} onPress={handleAlt}>
                    <SwitchIcon isOn={isAlt ? true : false} />
                    <Text style={styles.altText}>ALT</Text>
                </TouchableOpacity>
            ) : null}

            {/* <WaveForm */}
            {/*     source={{ uri: 'https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3' }} */}
            {/*     waveFormStyle={{ waveColor: 'red', scrubColor: 'white' }} */}
            {/*     play={false} */}
            {/* /> */}

            <FlatList
                data={data}
                keyExtractor={item => id + item.url}
                // estimatedItemSize={300}
                horizontal
                contentContainerStyle={styles.contentContainer}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <ListRender COLORS={COLORS} mediaWidth={mediaWidth} item={item} isAlt={isAlt} />
                )}
                ListHeaderComponent={() => <View style={styles.indent}></View>}
                ItemSeparatorComponent={() => <View style={styles.seperator}></View>}
            />
        </View>
    )
}
