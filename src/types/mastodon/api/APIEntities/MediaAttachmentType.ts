/**
 * https://docs.joinmastodon.org/entities/MediaAttachment/
 */

export type MediaAttachmentType = {
    id: string
    type: 'unknown' | 'image' | 'gifv' | 'video' | 'audio'
    url: string
    preview_url: string
    remote_url: string | null
    meta: string
    description: string
    blurhash: string
}
