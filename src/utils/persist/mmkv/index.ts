import { MMKV, useMMKVString, useMMKVBoolean, useMMKVObject } from 'react-native-mmkv'

import { TokenType } from '$exporter/type'
import { KEYS } from './consts'

export const storage = new MMKV({ id: KEYS.STORAGE_NAME })
type KeyType = (typeof KEYS)[keyof typeof KEYS]

const useManagerObj = <T>(key: KeyType) => {
    const [get, set] = useMMKVObject<T>(key)

    const remove = () => {
        set(undefined)
    }

    return { get, set, remove }
}

const useManagerStr = (key: KeyType) => {
    const [get, set] = useMMKVString(key)

    const remove = () => {
        set(undefined)
    }

    return { get, set, remove }
}

const useManagerBool = (key: KeyType) => {
    const [get, set] = useMMKVBoolean(key)

    const remove = () => {
        set(undefined)
    }

    return { get, set, remove }
}

export function useLocalStorage() {
    //
    const fresh = useManagerBool(KEYS.FRESH_APP)
    const authToken = useManagerObj<TokenType>(KEYS.TOKEN)

    return {
        fresh,
        authToken,
    }
}
