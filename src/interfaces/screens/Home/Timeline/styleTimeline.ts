import { StyleSheet } from 'react-native'

import { FONTS, useColors, WHITESPACE } from '$exporter'

export function useStyles() {
    //
    const { COLORS } = useColors()

    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        separator: {
            backgroundColor: COLORS.seperator,
            marginVertical: 32,
            height: 1,
        },
        footer: {
            height: 200,
        },
    })

    return { styles, COLORS }
}
