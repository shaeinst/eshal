import axios from 'axios'

import { useZustandStore } from '$exporter'
import { storageToken } from '$exporter/persist'
import { ENDPOINTS } from '$exporter/backend'
import useCreateAccount from './useCreateAccount'
import useLogin from './useLogin'
import secrete from './secrete'

export default function useAuthManager() {
    //
    const { set, remove } = storageToken()
    const { handleLogin, error: loginError, loading: loginLoading } = useLogin()
    const { handleCreate, error: createError, loading: createLoading } = useCreateAccount()
    const { auth, setAuth, resetAuth } = useZustandStore()

    const login = (instanceURL: string) => {
        //
        handleLogin(instanceURL).then(token => {
            if (!token) return

            set(token).then(tokenSaved => {
                if (tokenSaved) setAuth({ token, isSignedIn: true })
            })
        })
    }

    const logout = async (): Promise<void> => {
        //
        const { clientId, clientSecret } = secrete()

        const formData = new FormData()
        formData.append('client_id', clientId)
        formData.append('client_secret', clientSecret)
        formData.append('token', auth.token?.access_token)

        axios
            .post(`${auth.token?.server_url}${ENDPOINTS.AUTH.revoke}`, formData)
            .then(response => {
                // 200: successfully Revoked the access token to make it no longer valid for use.
                if (response.status === 200) {
                    remove().then(() => {
                        // since access token is revoked, we don't care if removing token fails from local storage
                        resetAuth()
                    })
                } else {
                    // removing token failed
                }
            })
            .catch(_error => {
                //
            })
    }

    const create = async () => {
        await handleCreate().then(_response => {
            //TODO:
        })
    }

    return {
        login,
        logout,
        create,
        loading: loginLoading || createLoading,
        error: loginError ? loginError : createError,
    }
}
