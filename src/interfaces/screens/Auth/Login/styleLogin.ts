import { StyleSheet } from 'react-native'

import { FONTS, useColors, WHITESPACE } from '$exporter'

export function useStyles() {
    //
    const { COLORS } = useColors()

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            paddingHorizontal: WHITESPACE.horizontalMP,
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
        serversContainer: {
            flex: 1,
            backgroundColor: COLORS.text,
            borderRadius: WHITESPACE.borderRadius,
            // padding: 10,
        },
        serverName: {
            ...FONTS.Inter['Rg-16'],
            color: COLORS.text,
            backgroundColor: COLORS.background,
            // borderRadius: WHITESPACE.borderRadius,
            padding: 10,
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
        indent: {
            height: 10,
        },
    })

    return { styles, COLORS }
}
