import React from 'react'
import { Text, View } from 'react-native'

import { useStyles } from './profile.style'

export default function Profile() {
    //
    const { styles } = useStyles()

    return (
        <View style={styles.container}>
            <Text style={{ color: 'red' }}> profile screen</Text>
        </View>
    )
}
