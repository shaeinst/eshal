import React from 'react'
import { Text, View } from 'react-native'

import { useStyles } from './styleAlert'

export default function Alert() {
    //
    const { styles } = useStyles()

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 50, color: 'red' }}>Alert screen</Text>
        </View>
    )
}
