import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { resetAuthStateRedux, setAuthStateRedux } from '$exporter'
import { storageToken } from '$exporter/persist'
import useLogin from './useLogin'
import useCreateAccount from './useCreateAccount'

export default function useAuthManager() {
    //
    const [error, setError] = useState<{ status: boolean; msg: string } | boolean>({
        status: false,
        msg: '',
    })
    const dispatch = useDispatch()
    const { set, remove } = storageToken()
    const { handleLogin, error: loginError, loading: loginLoading } = useLogin()
    const { handleCreate, error: createError, loading: createLoading } = useCreateAccount()

    const login = (instanceUrl: string) => {
        //
        handleLogin(instanceUrl)
            .then(token => {
                set(token).then(() => {
                    dispatch(setAuthStateRedux({ token, isSignedIn: true }))
                })
            })
            .catch(error => {
                //
                setError({ status: true, msg: 'failed to resolve token' })
            })
    }

    const logout = async (): Promise<void> => {
        //
        remove().then(() => {
            dispatch(resetAuthStateRedux())
        })
    }

    const create = async () => {
        await handleCreate().then(res => {
            //TODO:
        })
    }

    return {
        login,
        logout,
        create,
        loading: loginLoading || createLoading,
        error: error || loginError || createError,
    }
}
