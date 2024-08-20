import { useState } from 'react'
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native'

import { useStyles } from './styleInfoModal'

type PropsType = {
    text: string
}

export default function InfoModal({ text }: PropsType) {
    //
    const { styles } = useStyles()

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}
