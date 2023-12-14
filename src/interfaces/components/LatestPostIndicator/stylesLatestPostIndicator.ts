import { StyleSheet } from 'react-native'

import { FONTS, useColors } from '$exporter'

export function useStyles() {
    //
    const { COLORS } = useColors()

    const styles = StyleSheet.create({
        container: {
            position: 'absolute',
            bottom: 8,
            // left: 100,
            // right: 100,
            alignItems: 'center',
            alignSelf: 'center',
        },
        imageContainer: {
            flexDirection: 'row',
            gap: -4,
        },
        authorImage: {
            width: 34,
            height: 34,
            borderRadius: 50,
            borderWidth: 1,
            borderColor: COLORS.text,
        },
        desContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: COLORS.background,
            position: 'absolute',
            bottom: -8,
            paddingHorizontal: 4,
            borderRadius: 8,
            borderWidth: 0.5,
            borderColor: COLORS.text
        },
        text: {
            ...FONTS.Inter['Md-10'],
            color: COLORS.text,
        },
    })

    return { styles, COLORS }
}
