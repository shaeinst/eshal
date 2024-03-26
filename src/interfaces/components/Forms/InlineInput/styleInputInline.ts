import { StyleSheet } from 'react-native'

import { FONTS, useColors, WHITESPACE } from '$exporter'

export function useStyles() {
    //
    const { COLORS } = useColors()

    const styles = StyleSheet.create({
        container: {
            // backgroundColor: 'green',
            flex: 1,
            // borderColor: COLORS.border,
            // borderWidth: WHITESPACE.borderWidthFormInputText,
            // borderRadius: WHITESPACE.borderRadiusFormInputText,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        },
        input: {
            // backgroundColor: 'red',
            ...FONTS.Inter['Rg-16'],
            flex: 1,
            color: COLORS.text,
            paddingHorizontal: 8,
        },
    })
    return { styles, COLORS }
}
