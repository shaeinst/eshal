/**
 * https://docs.joinmastodon.org/entities/Poll/
 */

import { CustomEmoji } from './CustomEmojiType'

export type PollType = {
    id: string
    expires_at: string | null
    expired: boolean
    multiple: boolean
    votes_count: number
    voters_count: number | null
    emojis: Array<CustomEmoji>
    options: Array<{ title: string; votes_count: number | null }>
    voted?: boolean
    own_votes?: Array<number>
}
