import React, { useState } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'

import { CredInput, PrimaryButton } from '$exporter/component'
import { useAuthManager } from '$exporter/backend'
import { useStyles } from './styleLogin'

export default function Login() {
    //
    const [instanceUrl, setInstanceUrl] = useState('')
    const { styles, COLORS } = useStyles()
    const { login, loading, error, create } = useAuthManager()

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Eshal</Text>
            <View style={styles.login}>
                <CredInput
                    header="Server URL"
                    eg="mastodon.social"
                    state={{ input: instanceUrl, setInput: setInstanceUrl }}
                />

                <View style={styles.loginAction}>
                    {loading ? (
                        <ActivityIndicator size="large" />
                    ) : (
                        <PrimaryButton
                            title="Login"
                            onClick={() => login(instanceUrl)}
                            color={COLORS.text}
                            size="large"
                            headless
                            keyboardDismiss
                        />
                    )}
                    <Text style={[styles.error]}>{error.msg}</Text>
                </View>
            </View>
            <View style={styles.bottom}>
                <PrimaryButton title="Create Account" onClick={create} headless />
            </View>
        </View>
    )
}
