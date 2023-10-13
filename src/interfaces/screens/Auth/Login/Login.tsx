import React, { useState } from 'react'
import { View, Text } from 'react-native'

import { CredInput, PrimaryButton } from '$exporter/component'
import { useStyles } from './styleLogin'
import { useAuthManager } from '$exporter/backend'

export default function Login() {
    //
    const [instanceUrl, setInstanceUrl] = useState('mastodon.social')
    const { styles, COLORS } = useStyles()
    const { login } = useAuthManager()

    const handleCreateAccount = () => {
        //
        const url = 'https://joinmastodon.org/servers'
    }
    const handleLearnMore = () => {
        //
        const url = 'https://joinmastodon.org/'
    }

    const handleLogin = () => {
        //
        login(instanceUrl)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Eshal</Text>
            <View style={styles.login}>
                <CredInput
                    header="Server URL"
                    eg="mastodon.social"
                    state={{ input: instanceUrl, setInput: setInstanceUrl }}
                />

                <PrimaryButton
                    title="Login"
                    onClick={handleLogin}
                    color={COLORS.text}
                    size="large"
                    headless
                />
            </View>
            <View style={styles.bottom}>
                <PrimaryButton
                    title="Create Account"
                    onClick={handleCreateAccount}
                    headless
                />
                <PrimaryButton
                    title="Learn More"
                    onClick={handleLearnMore}
                    headless
                />
            </View>
        </View>
    )
}
