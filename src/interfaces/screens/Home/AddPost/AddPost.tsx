import { useEffect, useState } from 'react'
import { View, Text, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import FastImage, { OnLoadEvent } from 'react-native-fast-image'
import { ListRenderItemInfo } from '@shopify/flash-list'

import { InputText } from '$exporter/component'
import { PencilIcon, TrashIcon } from '$exporter/asset'
import { useStyles, useMediaStyles } from './styleAddPost'

const ToUploadMedia = ({ url, mediaHeight }: { url: string; mediaHeight: number }) => {
    //
    const [mediaWidth, setMediaWidth] = useState(mediaHeight)
    const { styles } = useMediaStyles(mediaHeight, mediaWidth)

    const onMediaLoad = (event: OnLoadEvent) => {
        const { width, height } = event.nativeEvent
        setMediaWidth((width * mediaHeight) / height)
    }
    const handleEdit = () => {
        //
    }
    const handleRemove = () => {
        //
    }

    return (
        <View style={styles.container}>
            <FastImage
                style={styles.media}
                source={{ uri: url }}
                resizeMode={FastImage.resizeMode.contain}
                onLoad={onMediaLoad}
            />
            <View style={styles.action}>
                <TouchableOpacity onPress={handleEdit}>
                    <PencilIcon width={24} height={24} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleRemove}>
                    <TrashIcon width={24} height={24} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default function AddPost() {
    //
    const { styles } = useStyles()
    const mediaHeight = Dimensions.get('window').width / 2.4
    const images = [
        'https://picsum.photos/4624/3468',
        'https://picsum.photos/3468/4624',
        'https://picsum.photos/200/300',
        'https://picsum.photos/220/320',
        'https://picsum.photos/300/200',
        'https://picsum.photos/420/520',
        'https://picsum.photos/620/220',
    ]

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <View style={styles.warnText}>
                    <InputText header="Content Warning" limit={500} />
                </View>
                <View style={styles.content}>
                    <InputText header="Type or paste what’s on your mind" limit={500} showCount />
                </View>
                <FlatList
                    data={images}
                    horizontal
                    renderItem={({ item }) => <ToUploadMedia url={item} mediaHeight={mediaHeight} />}
                    ItemSeparatorComponent={() => <View style={styles.mediaSeparator}></View>}
                />
            </View>
        </ScrollView>
    )
}
