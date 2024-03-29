import React, { useState } from 'react'
import { View, Text } from 'react-native'

import { CredInput, PrimaryButton } from '$exporter/component'
import { useAuthManager } from '$exporter/backend'
import { useStyles } from './styleLogin'

export default function Login() {
    //
    const [instanceUrl, setInstanceUrl] = useState('mastodon.social')
    const { styles, COLORS } = useStyles()
    const { login, loading, error, isError, create } = useAuthManager()

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
                    <PrimaryButton
                        title="Login"
                        onClick={() => login(instanceUrl)}
                        color={COLORS.text}
                        loading={loading}
                        size="large"
                        headless
                        keyboardDismiss
                    />
                    {isError && <Text style={styles.error}>{error}</Text>}
                </View>
            </View>
            <View style={styles.bottom}>
                <PrimaryButton title="Create Account" onClick={create} headless />
            </View>
        </View>
    )
}
