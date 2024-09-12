import { TouchableOpacity, View, StyleSheet } from 'react-native'

import { useColors } from '$exporter'
import { EarthIcon, EmojiIcon, GalleryIcon, PollIcon, TelegramIcon, WarnIcon } from '$exporter/asset'
import { ActivesType } from './useHandler'

type PropsType = {
    actives: ActivesType
    options: (type: keyof ActivesType) => void
}

export function Options({ actives, options }: PropsType) {
    //
    const { styles, COLORS } = useStyles()

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => options('media')}
                disabled={actives.poll}
                style={[styles.button, actives.media ? styles.active : null]}>
                <GalleryIcon fill={COLORS.background} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => options('poll')}
                disabled={actives.media}
                style={[styles.button, actives.poll ? styles.active : null]}>
                <PollIcon fill={COLORS.background} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} disabled={actives.warn} style={[styles.button]}>
                <WarnIcon fill={COLORS.background} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} disabled={actives.emoji} style={[styles.button]}>
                <EmojiIcon fill={COLORS.background} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} disabled={actives.language} style={[styles.button]}>
                <EarthIcon fill={COLORS.background} />
            </TouchableOpacity>
            <TouchableOpacity disabled={actives.send} style={styles.sendButton}>
                <TelegramIcon fill={COLORS.text} />
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
        button: {
            backgroundColor: COLORS.placeholder,
            padding: 4,
            borderRadius: 50,
        },
        active: {
            backgroundColor: COLORS.primary,
        },
    })

    return { styles, COLORS }
}
