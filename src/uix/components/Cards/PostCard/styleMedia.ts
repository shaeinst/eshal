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
            borderRadius: WHITESPACE.borderRadiusMedia,
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
        containerBlurhash: {
            borderRadius: WHITESPACE.borderRadiusMedia,
            width: mediaWidth,
            height: mediaHeight,
            overflow: 'hidden',
        },
        blurhash: {
            flex: 1,
        },
        media: {
            borderRadius: WHITESPACE.borderRadiusMedia,
            width: mediaWidth,
            height: mediaHeight,
        },
        altDescription: {
            position: 'absolute',
            top: 1,
            zIndex: 1000,
            right: 0,
            left: 0,
            ...FONTS.Inter['Lt-12'],
            backgroundColor: COLORS.background,
            maxHeight: mediaHeight - 10,
            borderRadius: WHITESPACE.borderRadiusTextInput,
            borderColor: COLORS.text,
            borderWidth: 1,
            color: COLORS.text,
            margin: 4,
            padding: 6,
        },
        unknown: {
            backgroundColor: COLORS.error,
            ...FONTS.Inter['Rg-16'],
            color: COLORS.strongText,
            width: mediaWidth,
            height: 150,
            borderRadius: WHITESPACE.borderRadiusMedia,
            textAlign: 'center',
            textAlignVertical: 'center',
        },
        containerNSFW: {
            borderRadius: WHITESPACE.borderRadiusMedia,
            width: mediaWidth,
            height: mediaHeight,
            overflow: 'hidden',
        },
        NSFWBlurhash: {
            flex: 1,
        },
        nsfwButton: {
            gap: 4,
            borderRadius: WHITESPACE.borderRadius,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.error,
            alignSelf: 'center',
            paddingHorizontal: 6,
            paddingVertical: 2,
            marginTop: 2,
        },
        nsfwButtonText: {
            // color: COLORS.error
        },
    })
}
