import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { FONTS, RouteHome, useColors, useZustandStore, WHITESPACE } from '$exporter'

export default function HomeInitial() {
    //
    const { styles, COLORS } = useStyles()
    const { nav: navTitle } = useZustandStore()

    return (
        <View style={styles.container}>
            <RouteHome bg={COLORS.background} fg={COLORS.logo} />
        </View>
    )
}

const useStyles = () => {
    //
    const { COLORS } = useColors()
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            paddingHorizontal: 10,
            backgroundColor: COLORS.background,
        },
        nav: {
            paddingBottom: 10,
        },
        logo: {
            ...FONTS.Inter['Bd-20'],
            color: COLORS.logo,
            paddingVertical: 8,
        },
    })
    return { styles, COLORS }
}
