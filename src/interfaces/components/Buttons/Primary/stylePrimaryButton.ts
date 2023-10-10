import { StyleSheet } from 'react-native'

import { FONTS, WHITESPACE } from '$exporter'

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: WHITESPACE.borderRadius,
        flex: 1,
    },
    icon: {},
    text: {
        ...FONTS.Inter['Bd-18'],
        // color: useColors.text,
    },
})
