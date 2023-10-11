import { StyleSheet } from 'react-native'

import { FONTS, useColors, WHITESPACE } from '$exporter'

export function useStyles() {
    //
    const { COLORS } = useColors()

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            // backgroundColor: COLORS.primary,
            alignItems: 'center',
            paddingHorizontal: 36,
        },
        logo: {
            ...FONTS.Inter['SB-32'],
            color: COLORS.text,
            paddingTop: '20%',
        },
        login: {
            paddingTop: '25%',
            gap: 10,
        },
        bottom: {
            paddingTop: '100%',
        },
    })

    return { styles, COLORS }
}
