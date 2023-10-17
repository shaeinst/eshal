import React from 'react'
import { View } from 'react-native'

import { useStyles } from './styleNavbar'
import NavbarItem from './NavbarItem'
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
                            <NavbarItem
                                title={navbarItems[rowKey][navKey].title}
                                icon={navbarItems[rowKey][navKey].icon}
                            />
                        </View>
                    ))}
                </View>
            ))}
        </View>
    )
}
