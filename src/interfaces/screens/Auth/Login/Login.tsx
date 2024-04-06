import React, { useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import { FlashList } from '@shopify/flash-list'

import { CredInput, PrimaryButton } from '$exporter/component'
import { queryAllInstances, useAuthManager } from '$exporter/backend'
import { useStyles } from './styleLogin'

export default function Login() {
    //
    const [instanceUrl, setInstanceUrl] = useState('')
    const [showInstances, setShowInstances] = useState(false)

    const { styles, COLORS } = useStyles()
    const { login, loading, error, isError, create } = useAuthManager()
    const {
        data: mastodonServers,
        isLoading: isLoadingServer,
        isFetching: isServerFetching,
        handleEndReached,
        isError: isErrorServer,
        error: errorServer,
    } = queryAllInstances(instanceUrl)

    const handleSeletInstance = (instance: string) => {
        //
        setInstanceUrl(instance)
        setShowInstances(false)
    }

    const handleOnFoucsInstanceInput = () => {
        //
        setShowInstances(true)
    }

    return (
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
            <Text style={styles.logo}>Eshal</Text>
            <View style={styles.login}>
                <CredInput
                    header="Server URL"
                    eg="mastodon.social"
                    state={{ input: instanceUrl, setInput: setInstanceUrl }}
                    onFocus={handleOnFoucsInstanceInput}
                />
                {showInstances ? (
                    <View style={styles.serversContainer}>
                        <FlashList
                            refreshing={isLoadingServer || isServerFetching}
                            estimatedItemSize={100}
                            data={mastodonServers?.instances}
                            onEndReached={handleEndReached}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => handleSeletInstance(item.name)}>
                                    <Text style={styles.serverName}>{item.name}</Text>
                                </TouchableOpacity>
                            )}
                            ListFooterComponent={() => (
                                <View style={styles.ListFooterComponentContainer}>
                                    {isLoadingServer || isServerFetching ? (
                                        <ActivityIndicator size="large" />
                                    ) : isErrorServer ? (
                                        <Text style={styles.error}>{errorServer?.message}</Text>
                                    ) : null}
                                </View>
                            )}
                        />
                    </View>
                ) : null}

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
