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
            borderColor: COLORS.text,
            borderRadius: WHITESPACE.borderRadius,
            borderWidth: 2,
        },
        serverName: {
            ...FONTS.Inter['Rg-16'],
            color: COLORS.text,
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
        ListFooterComponentContainer: {
            paddingVertical: 4,
        },
    })

    return { styles, COLORS }
}
