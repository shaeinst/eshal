import { StyleSheet } from 'react-native'

import { useColors } from '$exporter'

export function useStyles() {
    //
    const { COLORS } = useColors()

    const styles = StyleSheet.create({
        container: {
            height: 200,
            padding: 8,
            borderWidth: 1,
            borderRadius: 12,
            borderColor: COLORS.border,
            gap: 8,
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
    })

    return { styles }
}
