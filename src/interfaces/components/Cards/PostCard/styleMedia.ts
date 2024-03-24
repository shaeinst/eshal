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
            backgroundColor: COLORS.background,
            position: 'absolute',
            zIndex: 1000,
            top: 1,
            left: 0,
            right: 0,
            ...FONTS.Inter['Lt-12'],
            color: COLORS.text,
            padding: 6,
            margin: 4,
            borderRadius: WHITESPACE.borderRadius,
            borderWidth: 1,
            borderColor: COLORS.text,
            maxHeight: mediaHeight - 10,
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
