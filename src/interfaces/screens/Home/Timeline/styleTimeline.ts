import { StyleSheet } from 'react-native'

import { FONTS, useColors, WHITESPACE } from '$exporter'

export function useStyles() {
    //
    const { COLORS } = useColors()

    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },

        separatorContainer: {
            backgroundColor: COLORS.background,
            paddingVertical: 32,
        },
        separator: {
            backgroundColor: COLORS.seperator,
            height: 1,
        },
        footer: {
            height: 200,
        },
    })

    return { styles, COLORS }
}
