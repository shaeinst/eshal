/**
 * https://docs.joinmastodon.org/entities/Account/
 */

import { CustomEmoji } from './CustomEmojiType'

export type AccountType = {
    id: string
    username: string
    acct: string
    url: string
    display_name: string
    note: string
    avatar: string
    avatar_static: string
    header: string
    header_static: string
    locked: boolean
    bot: boolean
    group: boolean
    discoverable: boolean | null
    created_at: string
    last_status_at: string | null
    statuses_count: number
    followers_count: number
    following_count: number
    fields: Array<{ name: string; value: string; verified_at: string | null }>
    emojis: Array<CustomEmoji>
    noindex?: boolean | null
    moved?: AccountType | null
    suspended?: boolean
    limited?: boolean

    // CredentialAccount entity attributes
    // source
    // role

    // MutedAccount entity attributes
    // mute_expires_at

    // Field entity attributes
    // name
    // value
    // verified_at
}
