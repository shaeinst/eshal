import { FreshAppType } from '$exporter/type'
import { KEYS, localStorage } from '..'

const KEY = KEYS.FRESH_APP

const get = async (): Promise<boolean> => {
    return localStorage
        .get(KEY)
        .then((value: any) => {
            return value === 'false' ? false : true
        })
        .catch(() => true)
}

const set = async (value: FreshAppType): Promise<void> => {
    await localStorage.set(KEY, String(value))
}

const remove = async (): Promise<void> => {
    await localStorage.remove(KEY)
}

export default { set, get, remove }
