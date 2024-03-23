import { StyleSheet } from 'react-native'

import { ColorType } from '$exporter/type'
import { FONTS, WHITESPACE, useColors } from '$exporter'

export function mediaStyles(inReply?: boolean) {
    //
    const { COLORS } = useColors()

    const styles = StyleSheet.create({
        container: {},
        mediaAltIconContainer: {
            gap: 4,
            marginBottom: 4,
            flexDirection: 'row',
            borderRadius: 12,
            alignItems: 'center',
            justifyContent: 'flex-end',
            alignSelf: 'flex-end',
            width: 60,
        },
        altText: {
            ...FONTS.Inter['Lt-12'],
            color: COLORS.weakText,
        },
        indent: {
            width: inReply ? 0 : WHITESPACE.postCardIndent,
        },
        seperator: {
            width: 10,
        },
        contentContainer: {
            alignItems: 'center',
        },
    })

    return { styles, COLORS }
}

export function listRenderStyles(COLORS: ColorType, mediaWidth: number, mediaHeight: number) {
    //
    return StyleSheet.create({
        container: {},
        media: {
            backgroundColor: 'red',
            borderRadius: 12,
            width: mediaWidth,
            height: mediaHeight,
        },
        altDescription: {
            position: 'absolute',
            zIndex: 1000,
            top: 1,
            left: 0,
            right: 0,
            ...FONTS.Inter['Lt-12'],
            backgroundColor: COLORS.background,
            color: COLORS.text,
            padding: 6,
            margin: 4,
            borderRadius: 12,
            borderWidth: 0.5,
            borderColor: COLORS.seperator,
        },
    })
}
