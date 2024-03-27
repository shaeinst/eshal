import { useState } from 'react'
import { TouchableOpacity, View, Dimensions, StyleSheet } from 'react-native'

import { FONTS, useColors, WHITESPACE } from '$exporter'
import { EarthIcon, EmojiIcon, GalleryIcon, PollIcon, TelegramIcon, WarnIcon } from '$exporter/asset'

type PropsType = {
    actives: {
        warn: boolean
        content: boolean
        media: boolean
        poll: boolean
        emoji: boolean
        language: boolean
        send: boolean
    }
}

export function Options({ actives }: PropsType) {
    //
    const { styles, COLORS } = useStyles()
    const [disabled, setDisabled] = useState({
        warn: false,
        content: false,
        media: false,
        poll: false,
        emoji: false,
        language: false,
        send: true,
    })

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {}} disabled={disabled.media} style={actives.media ? styles.active : null}>
                <GalleryIcon fill={actives.media ? COLORS.background : COLORS.text} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} disabled={disabled.poll} style={actives.poll ? styles.active : null}>
                <PollIcon fill={actives.poll ? COLORS.background : COLORS.text} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} disabled={disabled.warn} style={actives.warn ? styles.active : null}>
                <WarnIcon fill={actives.warn ? COLORS.background : undefined} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} disabled={disabled.emoji} style={actives.emoji ? styles.active : null}>
                <EmojiIcon fill={actives.emoji ? COLORS.background : undefined} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {}}
                disabled={disabled.language}
                style={actives.language ? styles.active : null}>
                <EarthIcon fill={actives.language ? COLORS.background : undefined} />
            </TouchableOpacity>
            <TouchableOpacity disabled={disabled.send} style={styles.sendButton}>
                <TelegramIcon fill={actives.send ? COLORS.text : undefined} />
            </TouchableOpacity>
        </View>
    )
}

export function useStyles() {
    //
    const { COLORS } = useColors()

    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            gap: 8,
            padding: 6,
        },
        sendButton: {
            marginLeft: 'auto',
            marginRight: 8,
        },
        active: {
            backgroundColor: COLORS.text,
            padding: 4,
            borderRadius: 50,
        },
    })

    return { styles, COLORS }
}
