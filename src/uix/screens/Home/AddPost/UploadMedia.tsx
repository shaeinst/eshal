import { useState } from 'react'
import { Dimensions, FlatList, StyleSheet, TouchableOpacity, View } from 'react-native'
import FastImage, { OnLoadEvent } from 'react-native-fast-image'

import { WHITESPACE, useColors } from '$exporter'
import { PencilIcon, TrashIcon } from '$exporter/asset'
import { MStatusCreateType } from '$exporter/type'

const { width } = Dimensions.get('window')
const mediaHeight = width / 2.4

type PropsRenderItemType = {
    url: string
    mediaHeight: number
    handleRemove: () => void
}
const RenderItem = ({ url, mediaHeight, handleRemove }: PropsRenderItemType) => {
    //
    const [mediaWidth, setMediaWidth] = useState(mediaHeight)
    const { styles } = useStyles(mediaHeight, mediaWidth)

    const onMediaLoad = (event: OnLoadEvent) => {
        const { width, height } = event.nativeEvent
        setMediaWidth((width * mediaHeight) / height)
    }
    const handleEdit = () => {
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

type PropsType = {
    removeMedia: (path: string) => void
    createPost: MStatusCreateType
}
export function UploadMedia({ removeMedia, createPost }: PropsType) {
    //
    return (
        <FlatList
            data={createPost.media_ids}
            style={{ flex: 1 }}
            horizontal
            renderItem={({ item }) => (
                <RenderItem handleRemove={() => removeMedia(item)} url={item} mediaHeight={mediaHeight} />
            )}
            ItemSeparatorComponent={() => <View style={{ width: 10 }}></View>}
        />
    )
}

const useStyles = (mediaHeight: number, mediaWidth: number) => {
    //
    const { COLORS } = useColors()

    const styles = StyleSheet.create({
        container: {
            width: mediaWidth,
            height: mediaHeight,
            backgroundColor: 'pink',
            borderRadius: 10,
            overflow: 'hidden',
        },
        media: {
            flex: 1,
        },
        action: {
            flexDirection: 'row',
            backgroundColor: COLORS.text,
            justifyContent: 'center',
            position: 'absolute',
            bottom: 10,
            alignSelf: 'center',
            gap: 10,
            borderRadius: WHITESPACE.borderRadius,
            paddingVertical: 2,
            paddingHorizontal: 6,
        },
    })

    return { styles, COLORS }
}
