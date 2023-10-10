export type TokenType = {
    accessToken: string
    refreshToken: {
        token: string
        expiresIn: number | string
    }
} | null

export type FreshAppType = boolean
