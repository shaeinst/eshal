import { StyleSheet } from 'react-native'

import { FONTS, useColors, WHITESPACE } from '$exporter'

export function useStyles() {
    //
    const { COLORS } = useColors()

    const styles = StyleSheet.create({
        separator: {
            backgroundColor: COLORS.seperator,
            marginVertical: 32,
            height: 1,
        },
        footer: {
            height: 200,
        },
        skeleton: {
            marginVertical: 20,
            paddingVertical: 20,
        },
        skeletonText: {
            color: COLORS.text,
            textAlign: 'center',
        },
    })

    return { styles, COLORS }
}
