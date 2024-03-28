import { StyleSheet } from 'react-native'

import { WHITESPACE, useColors } from '$exporter'

export function useStyles() {
    //
    const { COLORS } = useColors()

    const styles = StyleSheet.create({
        container: {
            height: 200,
            gap: 8,
            paddingTop: 6,
            marginTop: 6,
            marginLeft: WHITESPACE.postCardIndent,
        },
        authorContainer: {
            flexDirection: 'row',
            gap: 10,
        },
        author: {
            backgroundColor: COLORS.skeleton,
            width: 40,
            height: 40,
            borderRadius: 50,
        },
        authorInfo: {
            flex: 1,
            backgroundColor: COLORS.skeleton,
            borderRadius: 10,
        },
        body: {
            flex: 1,
            backgroundColor: COLORS.skeleton,
            borderRadius: 10,
        },
        inReplyMargin: {
            // marginLeft: 50,
        },
        border: {
            height: 220,
            borderWidth: 1,
            borderRadius: 12,
            borderColor: COLORS.border,
        },
    })

    return { styles }
}
