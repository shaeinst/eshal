import { Platform, StyleSheet } from 'react-native'

import { FONTS, useColors } from '$exporter'

export function useStyles() {
    //
    const { COLORS } = useColors()

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            overflow: 'hidden',
            borderRadius: 12,
        },
        button: {
            padding: 4,
            width: 40,
            alignItems: 'center',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
            elevation: 10,
            borderRadius: 50,
        },
        overlayText: {
            ...FONTS.Inter['Rg-10'],
            position: 'absolute',
            top: 18,
        },
    })

    return { styles }
}
