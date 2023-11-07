import { TokenType } from './StorageType'

export type AuthStateType = {
    token: TokenType | null
    isSignedIn: boolean
}
