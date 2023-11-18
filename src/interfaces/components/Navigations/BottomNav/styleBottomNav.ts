import { StyleSheet } from 'react-native'

import { useColors } from '$exporter'

export function useStyles() {
    //
    const { COLORS } = useColors()

    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            borderTopWidth : 1,
            borderTopColor: COLORS.seperator,
        },

        icon: {
            flex: 1,
            alignItems: 'center',
        },
    })

    return { styles, COLORS }
}
