import { AuthStateType } from '$exporter/type'
import { useZustandStore } from './store'

const setAuth = (prop: AuthStateType) => {
    return useZustandStore.setState(_state => {
        return { auth: prop }
    })
}

export const setAuthState = {
    setAuth,
}
