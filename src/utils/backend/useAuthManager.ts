import { useEffect } from 'react'
import { Linking } from 'react-native'
import { useMutation } from '@tanstack/react-query'

import { useZustandStore } from '$exporter'
import { storageToken } from '$exporter/persist'
import { ROUTERS } from '$exporter/constant'

import { ENDPOINTS } from './endPoints'
import secrete from './secrete'
import loginApi from './api/auth/loginApi'
import logoutApi from './api/auth/logoutApi'
import createApi from './api/auth/createApi'

export default function useAuthManager() {
    //
    const { clientId, clientSecret } = secrete()
    const { setAuth, resetAuth, auth } = useZustandStore()
    const { set, remove } = storageToken()

    const redirectUri = ROUTERS.PREFIX
    const { AUTH } = ENDPOINTS

    const {
        mutateAsync: mutateAsyncLogin,
        isPending: isLoginLoading,
        isError: isLoginError,
        error: loginError,
    } = useMutation({ mutationFn: loginApi }) // login mutation
    const {
        mutateAsync: mutateAsyncLogout,
        isError: isLogoutError,
        error: logoutError,
        isPending: isLogoutLoading,
    } = useMutation({ mutationFn: logoutApi }) // logout mutation
    const {
        mutateAsync: mutateAsyncCreate,
        isError: isCreateError,
        error: createError,
        isPending: isCreateLoading,
    } = useMutation({ mutationFn: createApi }) // create mutation

    useEffect(() => {
        return () => Linking.removeAllListeners('url')
    }, [])

    const login = async (instanceURL: string) => {
        //
        if (!instanceURL.startsWith('http://') && !instanceURL.startsWith('https://')) {
            instanceURL = 'https://' + instanceURL
        }

        Linking.addEventListener('url', async event => {
            mutateAsyncLogin({ url: event.url, instanceURL, clientId, clientSecret }).then(
                token => {
                    if (!token) return
                    set(token).then(tokenSaved => {
                        if (tokenSaved) setAuth({ token, isSignedIn: true })
                    })
                },
            )
        })
        const scope = 'read write follow push'
        const authUrl = `${instanceURL}${AUTH.authorize}?response_type=code&client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}`
        await Linking.openURL(authUrl)
    }

    const logout = () => {
        //
        mutateAsyncLogout({ auth, clientId, clientSecret }).then(() => {
            remove().then(() => {
                // since access token is revoked, we don't care if removing token fails from local storage
                resetAuth()
            })
        })
    }

    const create = async () => {
        //
        mutateAsyncCreate()
    }

    return {
        login,
        logout,
        create,
        loading: isLoginLoading || isLogoutLoading || isCreateLoading,
        error: loginError?.message || logoutError?.message || createError?.message,
        isError: isLoginError || isLogoutError || isCreateError,
    }
}
