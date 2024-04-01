/**
 * https://docs.joinmastodon.org/methods/statuses
 */

export type StatusCreateType = {
    status?: string
    media_ids?: string[]
    poll?: {
        options: string[]
        expires_in: number
        multiple?: boolean
        hide_totals?: boolean
    }
    in_reply_to_id?: string
    sensitive?: boolean
    spoiler_text?: string
    visibility?: 'public' | 'unlisted' | 'private' | 'direct'
    language?: string
    scheduled_at?: string
}
