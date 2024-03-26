import { useCallback, useEffect, useState } from 'react'
import { View, Text, ScrollView, Image, Dimensions, TouchableOpacity, FlatList } from 'react-native'
import { NavigationProp, useFocusEffect, useNavigation } from '@react-navigation/native'
import FastImage, { OnLoadEvent } from 'react-native-fast-image'
import ImagePicker from 'react-native-image-crop-picker'
import { ListRenderItemInfo } from '@shopify/flash-list'

import { InputInline, InputText, PrimaryButton } from '$exporter/component'
import {
    BackIcon,
    EarthIcon,
    EmojiIcon,
    GalleryIcon,
    PencilIcon,
    PlusIcon,
    PollIcon,
    SettingIcon,
    TelegramIcon,
    TrashIcon,
    WarnIcon,
} from '$exporter/asset'
import { useZustandStore } from '$exporter'
import { useStyles, useMediaStyles } from './styleAddPost'

const { height, width } = Dimensions.get('window')
const mediaHeight = width / 2.4

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
    const [warnText, setWarnText] = useState('')
    const [contentText, setContentText] = useState('')
    const [poll, setPoll] = useState(['', ''])
    const [actives, setActives] = useState({
        warn: {
            selected: true,
            disabled: false,
        },
        content: {
            selected: true,
            disabled: false,
        },
        media: {
            selected: true,
            disabled: false,
        },
        poll: {
            selected: true,
            disabled: false,
        },
        emoji: {
            selected: true,
            disabled: false,
        },
        language: {
            selected: true,
            disabled: false,
        },
        send: {
            selected: true,
            disabled: false,
        },
    })

    const { navigate, getState } = useNavigation<NavigationProp<any>>()
    const { styles, COLORS } = useStyles()
    const { setHideBottomTab } = useZustandStore()

    const images = [
        'https://picsum.photos/4624/3468',
        'https://picsum.photos/3468/4624',
        'https://picsum.photos/200/300',
        'https://picsum.photos/220/320',
        'https://picsum.photos/300/200',
        'https://picsum.photos/420/520',
        'https://picsum.photos/620/220',
    ]

    const handleBack = () => {
        navigate('timeline')
    }

    const handleAddMedia = () => {
        ImagePicker.openPicker({
            mediaType: 'any',
        })
            .then(media => {
                console.log(media)
            })
            .catch(error => {
                console.log(error)
            })
    }

    useFocusEffect(
        useCallback(() => {
            setHideBottomTab(true)
            return () => setHideBottomTab(false)
        }, []),
    )

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleBack} style={styles.back}>
                <BackIcon stroke={COLORS.text} />
            </TouchableOpacity>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.scrollView}>
                    {actives.warn.selected ? (
                        <InputText
                            text={warnText}
                            setText={setWarnText}
                            minHeight={50}
                            maxHeight={120}
                            placeholder="Content Warning"
                            limit={500}
                            warn
                        />
                    ) : null}
                    {actives.content.selected ? (
                        <InputText
                            text={contentText}
                            setText={setContentText}
                            minHeight={height / 3}
                            maxHeight={height / 2}
                            placeholder="Type or paste what’s on your mind"
                            limit={500}
                            showCount
                        />
                    ) : null}
                    {actives.media.selected ? (
                        <FlatList
                            data={images}
                            horizontal
                            renderItem={({ item }) => <ToUploadMedia url={item} mediaHeight={mediaHeight} />}
                            ItemSeparatorComponent={() => <View style={styles.mediaSeparator}></View>}
                        />
                    ) : null}
                    {actives.poll.selected ? (
                        <View style={styles.pollContainer}>
                            {poll.map((opt, index) => (
                                <View key={`KEY-ADDPOST-POLL${opt + index}`} style={styles.pollInput}>
                                    <InputInline placeholder={`Option ${index + 1}`} />
                                </View>
                            ))}
                            <View style={styles.pollActionContainer}>
                                <TouchableOpacity>
                                    <PlusIcon />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <SettingIcon />
                                </TouchableOpacity>
                            </View>
                        </View>
                    ) : null}
                    <View style={styles.indent}></View>
                </View>
            </ScrollView>

            <View style={styles.actionsContainer}>
                <TouchableOpacity
                    onPress={handleAddMedia}
                    disabled={actives.media.disabled}
                    style={actives.media.selected ? styles.active : null}>
                    <GalleryIcon fill={actives.media ? COLORS.background : undefined} />
                </TouchableOpacity>
                <TouchableOpacity disabled={actives.poll.disabled} style={actives.poll.selected ? styles.active : null}>
                    <PollIcon fill={actives.poll ? COLORS.background : undefined} />
                </TouchableOpacity>
                <TouchableOpacity disabled={actives.warn.disabled} style={actives.warn.selected ? styles.active : null}>
                    <WarnIcon fill={actives.warn ? COLORS.background : undefined} />
                </TouchableOpacity>
                <TouchableOpacity
                    disabled={actives.emoji.disabled}
                    style={actives.emoji.selected ? styles.active : null}>
                    <EmojiIcon fill={actives.emoji ? COLORS.background : undefined} />
                </TouchableOpacity>
                <TouchableOpacity
                    disabled={actives.language.disabled}
                    style={actives.language.selected ? styles.active : null}>
                    <EarthIcon fill={actives.language ? COLORS.background : undefined} />
                </TouchableOpacity>
                <TouchableOpacity disabled={actives.send.disabled} style={styles.sendButton}>
                    <TelegramIcon fill={actives.send ? COLORS.text : undefined} />
                </TouchableOpacity>
            </View>
        </View>
    )
}
