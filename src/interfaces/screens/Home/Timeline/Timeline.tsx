import React from 'react'
import { Text, View } from 'react-native'

import { useStyles } from './stylesTimeline'

export default function Timeline() {
    //
    const { styles } = useStyles()

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 50 }}>Timeline screen</Text>
        </View>
    )
}

