import React from 'react'
import { View } from 'react-native'

import { useStyles } from './styleNavbar'
import NavbarItem from './NavbarItem'

const navbarItems = [
    ['Home', 'Search', 'Alert', 'More'],
    ['Add Post', 'Logout', 'Setting', 'Profile'],
]

export default function Navbar() {
    //
    const { styles } = useStyles()

    return (
        <View style={styles.container}>
            {navbarItems.map((row, index) => (
                <View key={`${row}+${index}`} style={styles.navItem}>
                    {row.map((nav, index) => (
                        <NavbarItem key={`${nav}+${index}`} title={nav} />
                    ))}
                </View>
            ))}
        </View>
    )
}
