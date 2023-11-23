import { StyleSheet } from 'react-native'

import { FONTS, useColors, WHITESPACE } from '$exporter'
import { useMemo } from 'react'

export function useStyles() {
    //
    const { COLORS } = useColors()

    const tagSyles = {
        ...FONTS.Inter['Rg-15'],
        // fontFamily: FONTS.Inter.fontFamily,
        color: COLORS.text,
    }

    const styles = StyleSheet.create({
        /* ------------------------------------ */
        // HTMLView
        /* ------------------------------------ */
        strong: tagSyles,
        // span: tagSyles,
        // a: tagSyles,
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
            color: COLORS.link,
            fontStyle: 'italic',
        },
        /* ------------------------------------ */

        container: {
            backgroundColor: COLORS.background,
            // flexDirection: 'row',
            gap: 6,

            borderBottomColor: COLORS.seperator,
            paddingVertical: 32,
            borderBottomWidth: 1,
        },
        inReplyContainer: {
            borderRadius: 12,
            borderColor: COLORS.cardBorder,
            borderWidth: 1,
            padding: 4,
            marginTop: 4,
            marginBottom: 6,
        },

        secondContainer: {
            marginLeft: 48,
        },
        altSecondContainer: {
            padding: 8,
        },
        skeleton: {
            gap: 6,
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
        },
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
        authorNameContainer: {
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
            marginLeft: 'auto',
        },
        more: {
            paddingHorizontal: 18,
        },

        authorId: {
            ...FONTS.Inter['Lt-12'],
            color: COLORS.weakText,
            marginBottom: 6,
        },
        /** *************************** **/
        contentContainer: {
            maxHeight: 220,
            overflow: 'hidden',
        },
        /** *************************** **/

        accessibility: {
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 4,
        },
        expandButton: {
            flexDirection: 'row',
            padding: 2,
            gap: 4,
            // backgroundColor: 'red',
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
            // height: 200,
            marginTop: 6,
            borderRadius: 12,
            overflow: 'hidden',
        },
        isViewMediaContainer: {
            gap: 8,
            width: '100%',
            aspectRatio: 1.4,
            marginTop: 6,
        },
        postPreviewContainer: {
            // aspectRatio: 1.4,
            height: 200,
        },
        postPreview: {
            flex: 1,
        },
        cardDescription: {
            ...FONTS.Inter['Lt-12'],
            color: COLORS.weakText,
        },
        cardLink: {
            ...FONTS.Inter['Lt-12'],
            color: COLORS.primary,
            fontStyle: 'italic',
            textDecorationLine: 'underline',
        },
        altText: {
            ...FONTS.Inter['Lt-12'],
            position: 'absolute',
            top: 4,
            left: 6,
            padding: 4,
            color: COLORS.text,
            backgroundColor: COLORS.background,
            maxWidth: '96%',
            maxHeight: 185,
            borderRadius: 12,
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
        },
        actionButton: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 6,
            gap: 4,
        },
        actionText: {
            ...FONTS.Inter['Md-14'],
            color: COLORS.actionIcon,
        },
        inReplyActionText: {
            ...FONTS.Inter['Lt-12'],
            color: COLORS.weakText,
        },
        activeActionText: {
            ...FONTS.Inter['Md-14'],
            color: COLORS.success,
        },
        activeInReplyActionText: {
            ...FONTS.Inter['Lt-12'],
            color: COLORS.success,
        },
        /** *************************** **/
        inReplySkeleton: {
            minHeight: 160,
            borderWidth: 1,
            borderRadius: 12,
            borderColor: COLORS.seperator,
            // borderColor: COLORS.seperator,
        },
        isViewModeText: {
            ...FONTS.Inter['Md-14'],
            color: COLORS.weakText,
            flexDirection: 'row',
            textAlign: 'center',
        },
        cardContainer: {
            borderRadius: 12,
            borderWidth: 1,
            borderColor: COLORS.seperator,
            overflow: 'hidden',
            padding: 4,
        },
    })

    return useMemo(() => ({ styles, COLORS }), [COLORS])
}
