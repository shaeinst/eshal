import { StyleSheet } from 'react-native'

import { useColors } from '$exporter'

export function useStyles() {
    //
    const { COLORS } = useColors()

    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: COLORS.background,
            alignItems: 'center',
            justifyContent: 'center',
        },
        text: {
            color: COLORS.text,
        },
    })
}
