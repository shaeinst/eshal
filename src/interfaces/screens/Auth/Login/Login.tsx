import React, { useState } from 'react'
import { View, Text } from 'react-native'

import { CredInput, PrimaryButton } from '$exporter/component'
import { useStyles } from './styleLogin'

export default function Login() {
    //
    const [server, setServer] = useState('')
    const { styles, COLORS } = useStyles()

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
    }

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Eshal</Text>
            <View style={styles.login}>
                <CredInput
                    header="Server URL"
                    eg="mastodon.social"
                    state={{ input: server, setInput: setServer }}
                />

                <PrimaryButton
                    title="Login"
                    onClick={handleLogin}
                    headless
                    color={COLORS.text}
                    size="large"
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
