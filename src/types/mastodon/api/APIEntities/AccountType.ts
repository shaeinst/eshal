/**
 * https://docs.joinmastodon.org/entities/Account/
 */

import { CustomEmoji } from './CustomEmojiType'
import { RoleType } from './RoleType'

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
    discoverable?: boolean | null
    created_at: string
    last_status_at?: string | null
    statuses_count: number
    followers_count: number
    following_count: number
    fields: Array<FieldType>
    emojis: Array<CustomEmoji>
    noindex?: boolean | null
    moved?: AccountType | null
    suspended?: boolean | null
    limited?: boolean | null

    // I'm still consfused of below. Mastodon DOC is confusion here
    source?: SourceType
    role?: RoleType
    muted_account?: {
        mute_expires_at?: string | null
    }
}

type SourceType = {
    note: string
    fields: Array<FieldType>
    privacy: 'public' | 'unlisted' | 'private' | 'direct'
    sensitive: boolean
    language: string
    follow_requests_count: number
}

type FieldType = {
    name: string
    value: string
    verified_at?: string | null
}
