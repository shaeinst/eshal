import React from 'react'
import { Text, View } from 'react-native'

import { PrimaryButton } from '$exporter/component'
import { useAuthManager } from '$exporter/backend'
import { useStyles } from './styleTimeline'

export default function Timeline() {
    //
    const { styles } = useStyles()
    const { logout, loading, isError, error } = useAuthManager()

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 50, color: 'red' }}>Timeline screen</Text>
            <PrimaryButton title="Logout" size="large" onClick={logout} loading={loading} />

            {isError && <Text style={styles.error}>{error}</Text>}
        </View>
    )
}
