import { StyleSheet } from 'react-native'

import { FONTS, useColors, WHITESPACE } from '$exporter'

export function useStyles() {
    //
    const { COLORS } = useColors()

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            gap: 20,
        },
        mediaContainer: {
            width: '100%',
            height: 200,
        },
        postPreview: {
            width: '100%',
            height: 200,
        },
    })

    return { styles, COLORS }
}
