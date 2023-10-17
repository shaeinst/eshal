import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { navbarItems } from './NavbarItems'
import { useStyles } from './styleNavbar'

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
