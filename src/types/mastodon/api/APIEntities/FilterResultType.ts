/**
 * https://docs.joinmastodon.org/entities/Filter/
 */

import { FilterType } from './FilterType'

export type FilterResultType = {
    filter: FilterType
    keyword_matches: Array<string> | null
    status_matches: Array<string> | null
}
