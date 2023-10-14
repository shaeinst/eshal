import { useDispatch } from 'react-redux'

import { resetAuthStateRedux, setAuthStateRedux } from '$exporter'
import { storageToken } from '$exporter/persist'
import useLogin from './useLogin'

export default function useAuthManager() {
    //
    const dispatch = useDispatch()
    const { set, remove } = storageToken()
    const { handleLogin, error: loginError, loading: loginLoading } = useLogin()

    const login = async (instanceUrl: string) => {
        //
        await handleLogin(instanceUrl).then(res => {
            // console.log(res)
        })

        //
        // const data: AuthStateType = {
        //     isSignedIn: true,
        //     token: {
        //         accessToken: 'this is access token',
        //         refreshToken: {
        //             token: 'this is refresh token',
        //             expiresIn: '2023-12-12',
        //         },
        //     },
        // }

        // return await set(data.token).then(() => {
        //     dispatch(setAuthStateRedux(data))
        // })
    }

    const logout = async (): Promise<void> => {
        //

        remove().then(() => {
            dispatch(resetAuthStateRedux())
        })
    }

    return {
        login,
        logout,
        loading: loginLoading,
        error: loginError,
    }
}
