import { StyleSheet } from 'react-native'

import { useColors } from '$exporter'

export function useStyles() {
    //
    const { COLORS } = useColors()

    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            justifyContent: 'space-around',
        },
    })

    return { styles, COLORS }
}
