import { StyleSheet } from 'react-native'

import { FONTS, useColors } from '$exporter'

export function useStyles() {
    //
    const { COLORS } = useColors()

    const styles = StyleSheet.create({
        container: {
            //
            backgroundColor: COLORS.background,
            // borderColor: COLORS.text,
            // borderWidth: 0.5,
            gap: 20,
            paddingHorizontal: 10,
            paddingVertical: 20,
            borderRadius: 20,
        },
        navRows: {
            flexDirection: 'row',
            justifyContent: 'center',
        },
        navContainer: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            gap: 4,
        },
        navTitle: {
            ...FONTS.Inter['Md-10'],
            color: COLORS.navbar,
        },
        active: {
            color: COLORS.active
        }
    })

    return { styles }
}
