import { StyleSheet } from 'react-native'

import { FONTS, useColors, WHITESPACE } from '$exporter'

export function useStyles() {
    //
    const { COLORS } = useColors()

    const styles = StyleSheet.create({
        container: {
            width: '100%',
            gap: 16,
            backgroundColor: COLORS.background,
        },
        /** *************************** **/
        boostContainer: {
            flexDirection: 'row',
            gap: 6,
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
        },
        authorProfilePic: {
            borderRadius: 50,
            borderWidth: 0.5,
            width: 50,
            height: 50,
        },
        authorInfo: {},
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
            //
        },
        description: {
            ...FONTS.Inter['Md-16'],
            color: COLORS.text,
            textAlign: 'justify',
        },
        /** *************************** **/
        mediaContainer: {
            //
        },
        accessibility: {
            flexDirection: 'row',
            // justifyContent: 'space-between',
            // backgroundColor: 'red',
            width: '90%',
        },
        accessibilityClick: {
            flexDirection: 'row',
            alignItems: 'center',
            gap: 6,
        },
        accessibilityText: {
            color: COLORS.weakText,
        },
        postPreview: {
            width: '100%',
            height: 200,
            borderRadius: 12,
        },
        /** *************************** **/
        actionContainer: {
            //
        },
        /** *************************** **/
    })

    return { styles, COLORS }
}
