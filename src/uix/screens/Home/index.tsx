import React from 'react'
import { StyleSheet, View } from 'react-native'

import { FONTS, RouteHome, useColors } from '$exporter'

export default function HomeInitial() {
    //
    const { styles } = useStyles()

    return (
        <View style={styles.container}>
            <RouteHome />
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
