import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { FONTS, RouteHome, useColors } from '$exporter'
import { Navbar } from '$exporter/component'

export default function HomeInitial() {
    //
    const { styles } = useStyles()

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.logoContainer}>
                    <Text style={styles.logo}>ESHAL</Text>
                </View>
                <View style={styles.nav}>
                    <Navbar />
                </View>
            </View>
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
            backgroundColor: COLORS.background,
        },
        top: {
            backgroundColor: COLORS.primary,
        },
        logoContainer: {},
        logo: {
            ...FONTS.Inter['SB-20'],
            color: COLORS.logo,
        },
        nav: {},
    })
    return { styles }
}
