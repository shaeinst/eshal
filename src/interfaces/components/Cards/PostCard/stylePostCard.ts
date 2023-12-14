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
            borderWidth: 0.6,
            padding: 4,
            marginTop: 4,
            marginBottom: 6,
        },

        secondContainer: {
            gap: 2,
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
        },
        /** *************************** **/
        contentContainer: {
            maxHeight: 220,
            overflow: 'hidden',
        },
        /** *************************** **/

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
