import React from 'react'
import { Text, TextInput, View } from 'react-native'

import { useStyles } from './styleTextInput'

export default function ContentInput() {
    //
    const { styles } = useStyles()

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>Header</Text>
                <Text style={styles.header}>0 / 200</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.inputStyle} multiline numberOfLines={6} />
            </View>
        </View>
    )
}
