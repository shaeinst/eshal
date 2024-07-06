/**
 * !WARNING: i refactored the wdbLocalStorage and using it here without testing.
 * expect to have the errors
 */

import { useEffect } from 'react'
import { Linking } from 'react-native'
import { useMutation } from '@tanstack/react-query'

import { useZustandStore } from '$exporter'
import { TokenType } from '$exporter/type'
import { wdbLocalStorage } from '$exporter/persist'
import { ROUTERS } from '$exporter/constant'

import { ENDPOINTS } from './endPoints'
import secrete from './secrete'
import loginApi from './api/auth/loginApi'
import logoutApi from './api/auth/logoutApi'
import createApi from './api/auth/createApi'

const { set, remove, KEYS } = wdbLocalStorage

export default function useAuthManager() {
    //
    const { clientId, clientSecret } = secrete()
    const { setAuth, resetAuth, auth } = useZustandStore()

    const redirectUri = ROUTERS.PREFIX
    const { AUTH, ESHAL } = ENDPOINTS

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
            mutateAsyncLogin({ url: event.url, instanceURL, clientId, clientSecret }).then(token => {
                if (!token) return
                set<TokenType>({ key: KEYS.TOKEN, value: token })
                    .then(() => {
                        setAuth({ token, isSignedIn: true })
                    })
                    .catch(e => {
                        console.log('error from useAuthManager.ts:\n', e)
                    })
            })
        })
        const scope = 'read write follow push'
        // const authUrl = AUTH.authorize({ instanceURL, clientId, scope, redirectUri })
        const authUrl = ESHAL.MASTODON.AUTH.login(instanceURL)
        await Linking.openURL(authUrl)
    }

    const logout = async () => {
        //
        mutateAsyncLogout({ auth, clientId, clientSecret }).then(() => {
            remove(KEYS.TOKEN)
                .then(() => {
                    // since access token is revoked, we don't care if removing token fails from local storage
                    resetAuth()
                })
                .catch(e => {
                    console.log('error from useAuthManager.ts:\n', e)
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
