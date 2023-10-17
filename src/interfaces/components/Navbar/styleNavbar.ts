import { StyleSheet } from 'react-native'

import { FONTS, useColors, WHITESPACE } from '$exporter'

export function useStyles() {
    //
    const { COLORS } = useColors()

    const styles = StyleSheet.create({
        container: {
            padding: 10,
            backgroundColor: '#ff6666',
            gap: 10,
        },
        navItem: {
            gap: 10,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            backgroundColor: 'green'
        },
    })

    return { styles }
}
