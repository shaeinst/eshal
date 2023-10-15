import { FONTS, useColors } from '$exporter'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Splash() {
    //
    const { styles } = useStyles()

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>ESHAL</Text>
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
            justifyContent: 'center',
        },
        logo: {
            ...FONTS.Inter['SB-32'],
            color: COLORS.text,
            textAlign: 'center',
            letterSpacing: 20,
        },
    })

    return { styles }
}
