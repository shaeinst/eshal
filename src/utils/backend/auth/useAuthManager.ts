import { useDispatch } from 'react-redux'

import { resetAuthStateRedux, setAuthStateRedux } from '$exporter'
import { storageToken } from '$exporter/persist'
import useLogin from './useLogin'
import useCreateAccount from './useCreateAccount'

export default function useAuthManager() {
    //

    const dispatch = useDispatch()
    const { set, remove } = storageToken()
    const { handleLogin, error: loginError, loading: loginLoading } = useLogin()
    const { handleCreate, error: createError, loading: createLoading } = useCreateAccount()

    const login = (instanceUrl: string) => {
        //
        handleLogin(instanceUrl).then(token => {
            if (!token) return
            set(token).then(tokenSaved => {
                if (tokenSaved) dispatch(setAuthStateRedux({ token, isSignedIn: true }))
            })
        })
    }

    const logout = async (): Promise<void> => {
        //
        remove().then(tokenRemoved => {
            if (tokenRemoved) dispatch(resetAuthStateRedux())
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
