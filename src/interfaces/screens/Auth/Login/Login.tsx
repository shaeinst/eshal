import React, { useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { FlashList } from '@shopify/flash-list'

import { CredInput, PrimaryButton } from '$exporter/component'
import { queryAllInstances, useAuthManager } from '$exporter/backend'
import { useStyles } from './styleLogin'

export default function Login() {
    //
    const [instanceUrl, setInstanceUrl] = useState('')
    const { styles, COLORS } = useStyles()
    const { login, loading, error, isError, create } = useAuthManager()
    const { data: mastodonServers, isLoading: isLoadingServer, isFetching: isServerFetching } = queryAllInstances()

    return (
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
            <Text style={styles.logo}>Eshal</Text>
            <View style={styles.login}>
                <CredInput
                    header="Server URL"
                    eg="mastodon.social"
                    state={{ input: instanceUrl, setInput: setInstanceUrl }}
                />
                <View style={styles.serversContainer}>
                    <FlashList
                        refreshing={isLoadingServer || isServerFetching}
                        estimatedItemSize={100}
                        data={mastodonServers?.instances}
                        renderItem={({ item }) => <Text style={styles.serverName}>{item.name}</Text>}
                        ItemSeparatorComponent={() => <View style={styles.indent} />}
                    />
                </View>

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
        </ScrollView>
    )
}
