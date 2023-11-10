import { StyleSheet } from 'react-native'

import { FONTS, useColors, WHITESPACE } from '$exporter'

export function useStyles() {
    //
    const { COLORS } = useColors()

    const styles = StyleSheet.create({
        container: {
            width: '100%',
            height: 'auto',
            backgroundColor: COLORS.background,
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

        authorContainer: {
            flexDirection: 'row',
            gap: 8,
            marginBottom: 5,
        },
        authorProfilePic: {
            borderRadius: 50,
            borderWidth: 0.5,
            width: 40,
            height: 40,
        },
        authorInfo: {
            gap: 1,
        },
        NameNPost: {
            flexDirection: 'row',
            alignItems: 'center',
            gap: 8,
        },
        authorName: {
            ...FONTS.Inter['Md-16'],
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
        },
        /** *************************** **/
        postConatiner: {},
        /** *************************** **/
        textContainer: {
            marginBottom: 6,
        },
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
            color: COLORS.weakText,
        },
        /** *************************** **/

        mediaContainer: {
            // flexDirection: 'row',
            gap: 8,
            height: 280,
        },
        accNprev: {
            flex: 1,
            gap: 10,
        },
        postPreview: {
            borderRadius: 12,
            flex: 1,
        },
        mediaListContainer: {
            width: '100%',
            height: 65,
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
        dotIndicatorContainer: {
            position: 'absolute',
            right: 0,
            gap: 4,
        },
        dotIndicator: {
            //
        },
        /** *************************** **/
        actionContainer: {
            flexDirection: 'row',
            gap: 22,
            marginTop: 18,
        },
        action: {
            flexDirection: 'row',
            gap: 8,
            // alignItems: 'center',
        },
        actionText: {
            ...FONTS.Inter['Md-14'],
            color: COLORS.text,
        },
        activeActionText: {
            ...FONTS.Inter['Md-14'],
            color: COLORS.success,
        },
    })

    return { styles, COLORS }
}
