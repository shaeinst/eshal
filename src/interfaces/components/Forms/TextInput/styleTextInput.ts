import { StyleSheet } from 'react-native'

import { FONTS, useColors, WHITESPACE } from '$exporter'

export function useStyles() {
    //
    const { COLORS } = useColors()

    const styles = StyleSheet.create({
        container: {
            gap: 8,
            flex: 1,
            // backgroundColor: 'green',
        },
        headerContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        header: {
            ...FONTS.Inter['Md-14'],
            color: COLORS.text,
        },
        limitExceed: {
            color: COLORS.error,
        },
        input: {
            // backgroundColor: 'red',
            ...FONTS.Inter['Rg-16'],
            flex: 1,
            borderColor: COLORS.border,
            borderWidth: WHITESPACE.borderWidthFormInputText,
            borderRadius: WHITESPACE.borderRadiusFormInputText,
            color: COLORS.text,
            paddingHorizontal: 8,
            textAlignVertical: 'top',
        },
        limitExceedInput: {
            borderColor: COLORS.error,
        },
    })
    return { styles, COLORS }
}
