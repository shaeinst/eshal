import { StyleSheet } from 'react-native'

import { FONTS, useColors, WHITESPACE } from '$exporter'

export function useStyles() {
    //
    const { COLORS } = useColors()

    const styles = StyleSheet.create({
        container: {
            width: '100%',
            backgroundColor: COLORS.background,
        },
        /** *************************** **/
        boostContainer: {
            flexDirection: 'row',
            gap: 6,
            marginBottom: 16,
        },
        boostUserPic: {
            width: 20,
            height: 20,
            borderRadius: 20,
            borderWidth: 0.5,
        },
        boostUserName: {
            ...FONTS.Inter['Md-14'],
            color: COLORS.strongText,
        },
        boostLogo: {},
        boostText: {
            ...FONTS.Inter['Md-14'],
            color: COLORS.success,
        },
        /** *************************** **/

        authorContainer: {
            flexDirection: 'row',
            gap: 16,
            marginBottom: 5,
        },
        authorProfilePic: {
            borderRadius: 50,
            borderWidth: 0.5,
            width: 50,
            height: 50,
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
            ...FONTS.Inter['Md-18'],
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
            flexDirection: 'row',
            gap: 10,
            height: 240,
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
            width: 100,
            height: '80%',
            gap: 4,
            justifyContent: 'center',
            paddingRight: 10,
            marginTop: 30,
        },
        mediaList: {
            flex: 1,
            borderRadius: 8,
        },
        media: {
            //
            height: 75,
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
        /** *************************** **/
        whiteSpace: {
            paddingVertical: 5,
            backgroundColor: COLORS.background,
        },
    })

    return { styles, COLORS }
}
