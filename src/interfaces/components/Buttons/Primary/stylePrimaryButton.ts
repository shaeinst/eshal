import { StyleSheet } from 'react-native'

import { FONTS, useColors, WHITESPACE } from '$exporter'

export function useStyles() {
    //
    const { COLORS } = useColors()

    const styles = StyleSheet.create({
        container: {
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: WHITESPACE.borderRadius,
            borderWidth: WHITESPACE.borderWidthButton,
            borderColor: COLORS.primary,
            paddingVertical: 5,
            paddingHorizontal: 5,
        },
        headlessContainer: {
            borderWidth: 0,
        },
        icon: {},
        text: {
            ...FONTS.Inter['Rg-16'],
            color: COLORS.primary,
        },
        textLarge: {
            ...FONTS.Inter['Bd-20'],
        },
    })
    return { styles }
}
