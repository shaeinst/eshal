import { TokenType } from './StorageType'

export type AuthStateType = {
    token?: TokenType
    isSignedIn: boolean
}
