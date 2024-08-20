import { StyleSheet } from 'react-native'

import { FONTS, useColors, WHITESPACE } from '$exporter'

export function useStyles() {
    //
    const { COLORS } = useColors()

    const tagSyles = {
        fontFamily: FONTS.Inter.fontFamily,
        color: COLORS.text,
    }

    const styles = StyleSheet.create({
        /* ------------------------------------ */
        // HTMLView
        /* ------------------------------------ */
        strong: tagSyles,
        span: tagSyles,
        p: tagSyles,
        b: tagSyles,
        em: tagSyles,
        i: tagSyles,
        h1: tagSyles,
        h2: tagSyles,
        h3: tagSyles,
        h4: tagSyles,
        h5: tagSyles,
        a: {
            fontFamily: FONTS.Inter.fontFamily,
            color: COLORS.primary,
            fontStyle: 'italic',
            textDecorationLine: 'underline',
        },
        /* ------------------------------------ */

        container: {
            // backgroundColor: 'red',
            marginVertical: 20,
        },
        authorContainer: {
            flexDirection: 'row',
            gap: 8,
        },
        authorProfilePic: {
            borderRadius: 50,
            borderWidth: 0.5,
            width: 32,
            height: 32,
            backgroundColor: COLORS.background
        },
        authorNameContainer: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        authorName: {
            ...FONTS.Inter['SB-14'],
            color: COLORS.text,
        },
        authorId: {
            ...FONTS.Inter['Lt-12'],
            color: COLORS.weakText,
            marginBottom: 6,
        },
        emoji: {
            width: 12,
            height: 12,
        },
        //------------------------
        postContainer: {
            marginLeft: 36,
        },

        contentContainer: {
            maxHeight: 220,
            overflow: 'hidden',
        },
        accessibility: {
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 4,
        },
        expandButton: {
            flexDirection: 'row',
            padding: 2,
            gap: 4,
        },
        accessibilityClick: {
            flexDirection: 'row',
            alignItems: 'center',
            gap: 6,
            marginLeft: 'auto',
        },
        accessibilityText: {
            ...FONTS.Inter['Lt-12'],
            color: COLORS.weakText,
        },
        /** *************************** **/

        mediaContainer: {
            // flexDirection: 'row',
            gap: 8,
            height: 200,
            marginTop: 6,
        },
        isViewMediaContainer: {
            gap: 8,
            width: '100%',
            aspectRatio: 1.4,
            marginTop: 6,
        },
        postPreviewContainer: {
            flex: 1,
            overflow: 'hidden',
        },
        postPreview: {
            borderRadius: 12,
            flex: 1,
        },
        postDate: {
            ...FONTS.Inter['Lt-12'],
            color: COLORS.weakText,
            marginLeft: 'auto',
        },
        altText: {
            position: 'absolute',
            ...FONTS.Inter['Lt-12'],
            maxWidth: '96%',
            maxHeight: 185,
            top: 4,
            left: 6,
            padding: 4,
            borderRadius: 12,

            color: COLORS.text,
            backgroundColor: COLORS.background,
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
            alignItems: 'center',
            gap: 10,
        },
        actionButton: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 4,
        },
        actionText: {
            ...FONTS.Inter['Md-14'],
            color: COLORS.actionIcon,
        },
        activeActionText: {
            ...FONTS.Inter['Md-14'],
            color: COLORS.success,
        },
        more: {
            //
        },
        threadIconButton: {
            position: 'absolute',
            backgroundColor: COLORS.background,
            left: -30,
        },
        recursiveComment: {
            marginLeft: 20,
        },
        threadContainer: {
            position: 'absolute',
            // backgroundColor: 'red',
            top: 0,
            left: 16,
            zIndex: -1,
            height: '99%',
            width: 24,
            alignItems: 'center',
            width: 2,
            backgroundColor: COLORS.seperator,
        },
    })

    return { styles, COLORS }
}
