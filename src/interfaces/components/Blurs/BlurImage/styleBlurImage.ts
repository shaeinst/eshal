import { StyleSheet } from 'react-native'

import { FONTS, useColors } from '$exporter'

export function useStyles() {
    //
    const { COLORS } = useColors()

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            overflow: 'hidden',
            borderRadius: 12,
            padding: 10,
        },
        button: {
            padding: 4,
            width: 40,
            alignItems: 'center',
        },
        overlayText: {
            ...FONTS.Inter['Rg-10'],
            position: 'absolute',
            top: 18,
        },
    })

    return { styles }
}
