import { StyleSheet } from 'react-native'

import { FONTS, useColors, WHITESPACE } from '$exporter'

export function useStyles() {
    //
    const { COLORS } = useColors()

    const styles = StyleSheet.create({
        container: {
            backgroundColor: COLORS.background,
        },
        secondryContainer: {
            flexDirection: 'row',
            gap: 6,
        },
        thirdContainer: {
            width: '85%',
        },
        /** *************************** **/
        boostContainer: {
            flexDirection: 'row',
            gap: 6,
            marginBottom: 16,
            alignItems: 'center',
        },
        boostUserPic: {
            width: 26,
            height: 26,
            borderRadius: 20,
            borderWidth: 0.5,
        },
        boostUserName: {
            ...FONTS.Inter['Md-14'],
            color: COLORS.strongText,
        },
        boostText: {
            ...FONTS.Inter['Md-14'],
            color: COLORS.success,
        },
        /** *************************** **/

        authorProfilePic: {
            borderRadius: 50,
            borderWidth: 0.5,
            width: 40,
            height: 40,
        },
        emoji: {
            width: 12,
            height: 12,
        },
        NameNPost: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        authorName: {
            ...FONTS.Inter['SB-14'],
            color: COLORS.text,
        },
        postDate: {
            ...FONTS.Inter['Lt-12'],
            color: COLORS.weakText,
        },
        authorId: {
            ...FONTS.Inter['Lt-12'],
            color: COLORS.weakText,
        },
        options: {
            marginLeft: 'auto',
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center',
        },
        /** *************************** **/
        postConatiner: {},
        /** *************************** **/
        description: {
            ...FONTS.Inter['Md-16'],
            color: COLORS.text,
            textAlign: 'justify',
        },
        /** *************************** **/

        accessibility: {
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        accessibilityClick: {
            flexDirection: 'row',
            alignItems: 'center',
            gap: 6,
        },
        accessibilityText: {
            ...FONTS.Inter['Lt-12'],
            color: COLORS.weakText,
        },
        /** *************************** **/

        mediaContainer: {
            // flexDirection: 'row',
            gap: 8,
            height: 210,
            marginTop:6,
        },
        accNprev: {
            flex: 1,
            gap: 10,
        },
        postPreviewContainer: {
            flex: 1,
        },
        postPreview: {
            borderRadius: 12,
            flex: 1,
        },
        altText: {
            position: 'absolute',
            ...FONTS.Inter['Lt-12'],
            color: COLORS.background,
            top: 0,
            padding: 4,
        },
        mediaListContainer: {
            justifyContent: 'center',
            borderRadius: 8,
        },
        seperator: {
            backgroundColor: COLORS.background,
            width: 6,
        },
        media: {
            //
            height: '100%',
            width: 75,
            borderRadius: 8,
        },
        textIndicator: {
            ...FONTS.Inter['Bd-12'],
            color: COLORS.placeholder,
            textAlign: 'center',
        },
        /** *************************** **/
        actionContainer: {
            flexDirection: 'row',
            gap: 16,
            marginTop: 6,
            alignItems: 'center',
        },
        action: {
            flexDirection: 'row',
            gap: 4,
            alignItems: 'center',
        },
        actionText: {
            ...FONTS.Inter['Md-14'],
            color: COLORS.actionIcon,
        },
        activeActionText: {
            ...FONTS.Inter['Md-14'],
            color: COLORS.success,
        },
    })

    return { styles, COLORS }
}
