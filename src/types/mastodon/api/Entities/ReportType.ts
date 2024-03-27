/**
 * https://docs.joinmastodon.org/entities/Report/
 */

import { AccountType } from './AccountType'

export type ReportType = {
    id: string
    action_taken: boolean
    category: 'spam' | 'violation' | 'other'
    comment: string
    forwarded: boolean
    created_at: string
    target_account: AccountType
    action_taken_at: string | null
    status_ids: Array<string> | null
    rule_ids: Array<string> | null
}
