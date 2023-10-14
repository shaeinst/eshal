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

    const set = async (value: TokenType): Promise<boolean> => {
        // return true on sucessfully saving token on storage else return false
        return localStorage
            .set(KEY, JSON.stringify(value))
            .then(() => true)
            .catch(() => false)
    }

    const remove = async (): Promise<boolean> => {
        // return true on sucessfully removing token from storage else return false
        return localStorage
            .remove(KEY)
            .then(() => true)
            .catch(() => false)
    }

    return { get, set, remove }
}
