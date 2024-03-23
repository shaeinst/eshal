import { useMemo } from 'react'
import { StyleSheet } from 'react-native'

import { FONTS, useColors, WHITESPACE } from '$exporter'

export function useStyles(inReply?: boolean) {
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
            // borderWidth: 0.5,
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
        boostText: {
            ...FONTS.Inter['Md-14'],
            color: COLORS.success,
        },
        /* ------------------------------------ */

        inReplySkeleton: {
            minHeight: 160,
            borderWidth: 1,
            borderRadius: 12,
            borderColor: COLORS.seperator,
            // borderColor: COLORS.seperator,
        },
        // ------------------------------------
        authorAvatar: {
            borderRadius: 50,
            borderWidth: 0.5,
            width: 40,
            height: 40,
            marginBottom: -40,
        },
        authorId: {
            marginLeft: WHITESPACE.postCardIndent,
            ...FONTS.Inter['Lt-12'],
            color: COLORS.weakText,
        },
        contentContainer: {
            marginLeft: WHITESPACE.postCardIndent,
            marginBottom: 18,
        },
        // ------------------------------------
        actionContainer: {
            marginLeft: WHITESPACE.postCardIndent,
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 4,
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

        activeActionText: {
            ...FONTS.Inter['Md-14'],
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

        indent: {
            marginLeft: WHITESPACE.postCardIndent,
        },
        /** *************************** **/
    })

    const inReplyStyle = StyleSheet.create({
        container: {
            // backgroundColor: COLORS.success,
            borderRadius: 12,
            borderColor: COLORS.cardBorder,
            borderWidth: 0.6,
            marginLeft: WHITESPACE.postCardIndent,
            padding: 8,
            marginTop: 10,
        },
        contentContainer: {
            marginTop: 4,
        },
        actionContainer: {
            marginLeft: 10,
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 4,
        },
    })

    return useMemo(() => ({ styles: inReply ? { ...styles, ...inReplyStyle } : styles, COLORS }), [COLORS])
}
