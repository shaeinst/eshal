import { useDispatch, useSelector } from 'react-redux'

import { resetAuthStateRedux, RootState, setAuthStateRedux } from '$exporter'
import { storageToken } from '$exporter/persist'
import useLogin from './useLogin'
import useCreateAccount from './useCreateAccount'
import axios from 'axios'

export default function useAuthManager() {
    //

    const dispatch = useDispatch()
    const { set, remove } = storageToken()
    const { handleLogin, error: loginError, loading: loginLoading } = useLogin()
    const { handleCreate, error: createError, loading: createLoading } = useCreateAccount()
    const { token } = useSelector((state: RootState) => state.auth)

    const login = (instanceURL: string) => {
        //
        handleLogin(instanceURL).then(token => {
            if (!token) return

            set(token).then(tokenSaved => {
                if (tokenSaved) dispatch(setAuthStateRedux({ token, isSignedIn: true }))
            })
        })
    }

    const logout = async (): Promise<void> => {
        //

        const clientId = '864ELq9VqDLHb9lcm_H0uDg-Z4IHzcQKMH4YajJ7YVs'
        const clientSecret = '2woqdzke-OhL8gqHqT9KV6vHCuvgGpkD3XvhTrT09Ik'
        const formData = new FormData()

        formData.append('client_id', clientId)
        formData.append('client_secret', clientSecret)
        formData.append('token', token?.access_token)
        axios
            .post(`${token?.server_url}/oauth/revoke`, formData)
            .then(response => {
                // 200: successfully Revoked the access token to make it no longer valid for use.
                if (response.status === 200) {
                    remove().then(() => {
                        // since access token is revoked, we don't care if removing token fails from local storage
                        dispatch(resetAuthStateRedux())
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
