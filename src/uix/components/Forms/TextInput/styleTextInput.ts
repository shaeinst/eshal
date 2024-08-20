import { StyleSheet } from 'react-native'

import { FONTS, useColors, WHITESPACE } from '$exporter'

export function useStyles(minHeight: number, maxHeight: number) {
    //
    const { COLORS } = useColors()

    const styles = StyleSheet.create({
        container: {
            // backgroundColor: 'green',
        },
        input: {
            // backgroundColor: 'red',
            ...FONTS.Inter['Rg-16'],
            color: COLORS.text,
            textAlignVertical: 'top',
            borderColor: COLORS.border,
            borderBottomWidth: WHITESPACE.borderWidthFormInputText,
            minHeight: minHeight,
            maxHeight: maxHeight,
        },
        warn: {
            ...FONTS.Inter['Md-16'],
            backgroundColor: COLORS.warn,
            color: COLORS.background,
            borderRadius: WHITESPACE.borderRadiusFormInputText,
        },
        count: {
            ...FONTS.Inter['Md-14'],
            color: COLORS.placeholder,
            alignSelf: 'flex-end',
            marginTop: -25,
        },
        limitExceed: {
            color: COLORS.error,
        },
    })
    return { styles, COLORS }
}
