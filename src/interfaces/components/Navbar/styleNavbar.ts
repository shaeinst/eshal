import { StyleSheet } from 'react-native'

import { FONTS, useColors } from '$exporter'

export function useStyles() {
    //
    const { COLORS } = useColors()

    const styles = StyleSheet.create({
        container: {
            //
            backgroundColor: COLORS.navbar,
            gap: 20,
            paddingHorizontal: 10,
            paddingVertical: 20,
            borderRadius: 20,
        },
        navRows: {
            flexDirection: 'row',
            justifyContent: 'center',
        },
        navItem: {
            flex: 1,
            alignItems: 'center',
        },

        navContainer: {
            alignItems: 'center',
            gap: 4,
        },
        navTitle: {
            ...FONTS.Inter['Md-10'],
            color: COLORS.text,
        },
    })

    return { styles }
}
