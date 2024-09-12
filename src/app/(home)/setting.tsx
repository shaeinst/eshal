import React from 'react'
import { Text, View } from 'react-native'

import { useStyles } from './setting.style'

export default function Setting() {
    //
    const { styles } = useStyles()

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 50, color: 'red' }}>Setting screen</Text>
        </View>
    )
}
