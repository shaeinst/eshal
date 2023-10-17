import { StyleSheet } from 'react-native'

import { FONTS, useColors, WHITESPACE } from '$exporter'

export function useStyles() {
    //
    const { COLORS } = useColors()

    const styles = StyleSheet.create({
        container: {
            //
            width: '70%',
            gap: 14,
        },
        navRows: {
            flexDirection: 'row',
            justifyContent: 'center',
        },
        navItem: {
            flex: 1,
            alignItems: 'center',
        },
    })

    return { styles }
}
