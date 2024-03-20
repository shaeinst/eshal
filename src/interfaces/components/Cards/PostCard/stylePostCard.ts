import { Dimensions, StyleSheet } from 'react-native'

import { FONTS, useColors, WHITESPACE } from '$exporter'
import { useMemo } from 'react'

const { width } = Dimensions.get('window')

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
            // backgroundColor: COLORS.error,
            borderWidth: 0.5,
        },

        /* ------------------------------------ */

        boostContainer: {
            flexDirection: 'row',
            gap: 6,
            marginBottom: 8,
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
        /* ------------------------------------ */

        authorAvatar: {
            borderRadius: 50,
            borderWidth: 0.5,
            height: 40,
            width: 40,
            marginBottom: -40,
        },
        authorId: {
            paddingLeft: WHITESPACE.postCardIndent,
            ...FONTS.Inter['Lt-12'],
            color: COLORS.weakText,
        },
        contentContainer: {
            paddingLeft: WHITESPACE.postCardIndent,
            maxHeight: 220,
            overflow: 'hidden',
        },
        authorNameContainer: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        authorName: {
            ...FONTS.Inter['SB-14'],
            color: COLORS.text,
        },
        emoji: {
            width: 12,
            height: 12,
        },
        indent: {
            paddingLeft: WHITESPACE.postCardIndent,
        },

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

        /** *************************** **/
        /** *************************** **/
        actionContainer: {
            paddingLeft: WHITESPACE.postCardIndent,
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
        postDate: {
            ...FONTS.Inter['Lt-12'],
            color: COLORS.weakText,
            marginLeft: 'auto',
        },
        more: {
            paddingHorizontal: 18,
        },
        /** *************************** **/
    })

    return useMemo(() => ({ styles, COLORS }), [COLORS])
}
