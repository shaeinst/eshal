import { StyleSheet } from 'react-native'

import { FONTS, useColors, WHITESPACE } from '$exporter'

export function useStyles() {
    //
    const { COLORS } = useColors()

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
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
        loginAction: {
            height: '30%',
        },

        error: {
            ...FONTS.Inter['Lt-12'],
            color: COLORS.error,
            textAlign: 'center',
        },
        bottom: {
            paddingTop: '60%',
        },
    })

    return { styles, COLORS }
}
