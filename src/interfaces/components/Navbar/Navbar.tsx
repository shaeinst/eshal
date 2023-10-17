import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

import { FONTS, useColors } from '$exporter'
import { navbarItems } from './NavbarItems'

export default function Navbar() {
    //
    const { styles } = useStyles()

    return (
        <View style={styles.container}>
            {Object.keys(navbarItems).map(rowKey => (
                <View key={rowKey} style={styles.navRows}>
                    {Object.keys(navbarItems[rowKey]).map(navKey => (
                        <View key={navKey} style={styles.navItem}>
                            <TouchableOpacity style={styles.navContainer}>
                                {navbarItems[rowKey][navKey].icon}
                                <Text style={styles.navTitle}>
                                    {navbarItems[rowKey][navKey].title}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            ))}
        </View>
    )
}

export function useStyles() {
    //
    const { COLORS } = useColors()

    const styles = StyleSheet.create({
        container: {
            //
            backgroundColor: COLORS.navbar,
            gap: 14,
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
            gap: 2,
        },
        navTitle: {
            ...FONTS.Inter['Md-10'],
            color: COLORS.text,
        },
    })

    return { styles }
}
