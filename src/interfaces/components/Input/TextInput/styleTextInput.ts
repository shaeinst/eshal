import { StyleSheet } from 'react-native'

import { FONTS, useColors, WHITESPACE } from '$exporter'

export function useStyles() {
    //
    const { COLORS } = useColors()

    const styles = StyleSheet.create({
        container: {
            width: '100%',
            gap: 8,
        },
        headerContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        header: {
            color: COLORS.text,
        },

        inputContainer: {
            borderColor: COLORS.border,
            borderWidth: WHITESPACE.borderWidthInputForm,
            borderRadius: WHITESPACE.borderRadiusTextInput,
            flexDirection: 'row',
            alignItems: 'center',
        },
        inputStyle: {
            // backgroundColor: 'red',
            ...FONTS.Inter['Rg-18'],
            color: COLORS.text,
            borderRadius: WHITESPACE.borderRadiusTextInput,
            paddingHorizontal: 8,
            minHeight: 100,
            textAlignVertical: 'top'
        },
    })
    return { styles, COLORS }
}
