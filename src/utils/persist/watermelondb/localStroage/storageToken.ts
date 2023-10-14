import { TokenType } from '$exporter/type'
import { KEYS, localStorage } from '..'

const KEY = KEYS.TOKEN

export default function Token() {
    //

    const get = async (): Promise<TokenType> => {
        return localStorage
            .get(KEY)
            .then((value: any) => {
                const _token: TokenType = JSON.parse(value)
                return _token
            })
            .catch(() => null)
    }

    const set = async (value: TokenType): Promise<void> => {
        await localStorage.set(KEY, JSON.stringify(value))
    }

    const remove = async (): Promise<void> => {
        await localStorage.remove(KEY)
    }

    return { get, set, remove }
}
