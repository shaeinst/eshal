import { StyleSheet } from 'react-native'

import { FONTS, useColors, WHITESPACE } from '$exporter'

export function useStyles() {
    //
    const { COLORS } = useColors()

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            gap: 10,
        },
        item: {
            flex: 1,
        },
        rednerItemContainer: {
            //
            backgroundColor: 'red',
            borderBottomWidth: 0.5,
            paddingVertical: 12,
        },
    })

    return { styles, COLORS }
}
