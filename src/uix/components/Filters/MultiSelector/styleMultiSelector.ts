import { StyleSheet } from 'react-native'

import { FONTS, WHITESPACE, useColors } from '$exporter'

export function useStyles() {
    //
    const { COLORS } = useColors()

    const styles = StyleSheet.create({
        container: {
            // backgroundColor: 'red',
            width: '100%',
        },
        button: {
            ...FONTS.Inter['Md-16'],
            color: COLORS.text,
            paddingVertical: 4,
            paddingHorizontal: 12,
            borderWidth: 0.5,
            borderColor: COLORS.border,
            borderRadius: WHITESPACE.borderRadiusMedia,
        },
        active: {
            backgroundColor: COLORS.text,
            color: COLORS.background,
        },
        indent: {
            width: 6,
        },
    })

    return { styles, COLORS }
}
