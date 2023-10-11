import { StyleSheet } from 'react-native'

import { FONTS, useColors, WHITESPACE } from '$exporter'

export function useStyles() {
    //
    const { COLORS } = useColors()

    const styles = StyleSheet.create({
        container: {
            width: '100%',
        },
        header: {
            ...FONTS.Inter['Md-16'],
            color: COLORS.text,
            paddingBottom: 10,
        },
        inputContainer: {
            borderColor: COLORS.border,
            borderWidth: WHITESPACE.borderWidthInputForm,
            borderRadius: WHITESPACE.borderRadius,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 20,
        },
        placeholderHeader: {
            ...FONTS.Inter['Rg-18'],
            color: COLORS.placeholder,
        },
        placeholder: {
            ...FONTS.Inter['Rg-18'],
            fontStyle: 'italic',
            color: COLORS.text,
            width: '90%',
            height: 45,
            // backgroundColor: 'red',
            paddingLeft: 10,
        },
    })
    return { styles, COLORS }
}
