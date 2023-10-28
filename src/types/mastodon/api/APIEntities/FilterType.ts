/**
 * https://docs.joinmastodon.org/entities/Filter/
 */

import { FilterKeywordType } from './FilterKeywordType'
import { FilterStatusType } from './FilterStatusType'

export type FilterType = {
    id: string
    title: string
    expires_at: string | null
    filter_action: 'warn' | 'hide'
    context: Array<'home' | 'notifications' | 'public' | 'thread' | 'account'>
    keywords: Array<FilterKeywordType>
    statuses: Array<FilterStatusType>
}
