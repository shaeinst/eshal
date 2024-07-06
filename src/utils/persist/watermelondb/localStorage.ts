import { database } from '.'
import { KEYS } from './consts'

type KeyType = (typeof KEYS)[keyof typeof KEYS]

const get = async <T>(key: KeyType): Promise<T | null> => {
    return database.localStorage.get(key).then((value: any) => {
        const _data: T | null = value ? JSON.parse(value) : null
        return _data
    })
}

const set = async <T>({ key, value }: { key: KeyType; value: T }) => {
    return database.localStorage.set(key, JSON.stringify(value))
}

const remove = async (key: KeyType) => {
    return database.localStorage.remove(key)
}

export const localStorage = { get, set, remove, KEYS }
