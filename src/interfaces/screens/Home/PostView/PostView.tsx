import React from 'react'
import { Text, View } from 'react-native'

import { useStyles } from './stylePostView'

export default function PostView() {
    //
    const { styles } = useStyles()

    return (
        <View style={styles.container}>
            <Text>POST VIEW SCREEN</Text>
        </View>
    )
}
