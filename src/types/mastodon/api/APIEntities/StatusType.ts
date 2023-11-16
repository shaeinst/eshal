/**
 * https://docs.joinmastodon.org/entities/Status/
 */

import { AccountType } from './AccountType'
import { CustomEmojiType } from './CustomEmojiType'
import { FilterResultType } from './FilterResultType'
import { MediaAttachmentType } from './MediaAttachmentType'
import { PollType } from './PollType'
import { PreviewCardType } from './PreviewCard'

export type StatusType = {
    id: string
    uri: string
    created_at: string
    account: AccountType
    content: string
    visibility: 'public' | 'unlisted' | 'private' | 'direct'
    sensitive: boolean
    spoiler_text: string
    reblogs_count: number
    favourites_count: number
    replies_count: number
    mentions: Array<{ id: string; username: string; url: string; acct: string }>
    tags: Array<{ name: string; url: string }>
    media_attachments?: Array<MediaAttachmentType> // NOTE: in official doc, this is not optional but i think it must have to be
    emojis: Array<CustomEmojiType>
    filtered?: Array<FilterResultType>
    favourited?: boolean
    reblogged?: boolean
    muted?: boolean
    bookmarked?: boolean
    pinned?: boolean
    application?: { name: string; website?: string | null }
    url?: string | null
    in_reply_to_id?: string | null
    in_reply_to_account_id?: string | null
    reblog?: StatusType | null
    poll?: PollType | null
    card?: PreviewCardType | null
    language?: string | null
    text?: string | null
    edited_at?: string | null
}
