import { TokenType as MTokenType } from './mastodon/api/Entities/TokenType'

export type TokenType = MTokenType & {
    server_url: string
}

export type FreshAppType = boolean
