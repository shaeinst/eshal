import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import useHandleNavbar from './handleNavbar'

import { useNavbarItems } from './NavbarItems'
import { useStyles } from './styleNavbar'

export default function Navbar() {
    const [active, setActive] = useState('Home')
    const [openMore, setOpenMore] = useState(false)
    const { styles } = useStyles()
    const { handleClick } = useHandleNavbar()
    const { navbarItems, icons } = useNavbarItems()

    return (
        <View style={styles.container}>
            {Object.keys(navbarItems).map(rowKey => {
                if (rowKey !== 'row1' && !openMore) return
                return (
                    <View key={rowKey} style={styles.navRows}>
                        {Object.keys(navbarItems[rowKey]).map(navKey => {
                            const title = navbarItems[rowKey][navKey].title
                            const path = navbarItems[rowKey][navKey].path
                            const icon = icons[navKey]
                            return (
                                <TouchableOpacity
                                    style={styles.navContainer}
                                    onPress={() => handleClick(title, setOpenMore, setActive, path)}
                                    key={title}
                                    //
                                >
                                    {icon({ openMore: openMore && title === 'More', active })}
                                    {openMore && title !== 'More' ? (
                                        <Text style={styles.navTitle}>{title}</Text>
                                    ) : undefined}
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                )
            })}
        </View>
    )
}
