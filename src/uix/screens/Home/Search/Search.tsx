import React from 'react'
import { Text, View } from 'react-native'

import { useStyles } from './styleSearch'

export default function Search() {
    //
    const { styles } = useStyles()

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 50, color: 'red' }}>Search screen</Text>
        </View>
    )
}
