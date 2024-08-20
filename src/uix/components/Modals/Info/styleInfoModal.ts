import { StyleSheet } from 'react-native'

import { FONTS, WHITESPACE, useColors } from '$exporter'

export function useStyles() {
    //
    const { COLORS } = useColors()

    const styles = StyleSheet.create({
        container: {},
        text: {},
    })

    return { styles, COLORS }
}
