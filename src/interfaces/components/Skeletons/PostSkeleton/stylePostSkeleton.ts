import { StyleSheet } from 'react-native'

import { FONTS, useColors } from '$exporter'

export function useStyles() {
    //
    const { COLORS } = useColors()

    const styles = StyleSheet.create({
        container: {
            //
            gap: 10,
            flexDirection: 'row',
        },
        profile: {
            width: 40,
            height: 40,
            borderRadius: 100,
            backgroundColor: COLORS.skeleton,
        },
        authorContainer: {
            flex: 1,
            gap:5,
        },
        line: {
            height: 20,
            backgroundColor: COLORS.skeleton,
            borderRadius: 4,
        },
        body: {
            height: 180,
            borderRadius: 12,
            backgroundColor: COLORS.skeleton,
        },
    })

    return { styles }
}
