import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { FONTS, RouteHome, useColors, useZustandStore, WHITESPACE } from '$exporter'
import { Navbar } from '$exporter/component'

export default function HomeInitial() {
    //
    const { styles } = useStyles()
    const { nav: navTitle } = useZustandStore()

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.logoContainer}>
                    <Text style={styles.logo}>{navTitle}</Text>
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
            position: 'relative',
            paddingHorizontal: 10,
            backgroundColor: COLORS.background,
        },
        top: {
        },
        logoContainer: {},
        logo: {
            ...FONTS.Inter['Bd-20'],
            color: COLORS.logo,
            paddingVertical: 8,
        },
        nav: {
            width: 230,
            position: 'absolute',
            top: 0,
            right: 0,
            zIndex: 1000,
        },
    })
    return { styles }
}
