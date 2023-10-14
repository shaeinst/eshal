import React from 'react'
import { Text, View } from 'react-native'

import { PrimaryButton } from '$exporter/component'
import { useAuthManager } from '$exporter/backend'
import { useStyles } from './stylesTimeline'

export default function Timeline() {
    //
    const { styles } = useStyles()
    const { logout } = useAuthManager()

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 50, color: 'red' }}>Timeline screen</Text>
            <PrimaryButton title="Logout" size="large" onClick={logout} />
        </View>
    )
}
