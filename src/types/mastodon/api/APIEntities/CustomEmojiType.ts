/**
 * https://docs.joinmastodon.org/entities/CustomEmoji/
 */

export type CustomEmoji = {
    shortcode: string
    url: string
    static_url: string
    visible_in_picker: boolean
    category: string | null
}
