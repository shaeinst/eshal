import { StyleSheet } from 'react-native'

import { FONTS, useColors, WHITESPACE } from '$exporter'

export function useStyles() {
    //
    const { COLORS } = useColors()

    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },

        whiteSpace: {
            paddingVertical: 32,
            backgroundColor: COLORS.background,
        },
        seperator: {
            height: 1,
            width: '100%',
            backgroundColor: COLORS.seperator,
        },
    })

    return { styles, COLORS }
}
