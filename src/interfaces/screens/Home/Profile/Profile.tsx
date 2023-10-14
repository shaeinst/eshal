import React from 'react'
import { Text, View } from 'react-native'

import { useStyles } from './stylesProfile'

export default function Profile() {
    //
    const { styles } = useStyles()

    return (
        <View style={styles.container}>
            <Text> profile screen</Text>
        </View>
    )
}
