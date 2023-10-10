import { StyleSheet } from 'react-native'

import { COLORS, FONTS, WHITESPACE } from '$exporter'

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: WHITESPACE.borderRadius,
        flex: 1,
    },
    icon: {},
    text: {
        ...FONTS.Nunito['Bd-18'],
        color: COLORS.text,
    },
})

export default styles
