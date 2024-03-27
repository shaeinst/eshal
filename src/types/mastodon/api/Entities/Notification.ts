/**
 * https://docs.joinmastodon.org/entities/Notification/
 */

import { AccountType } from './AccountType'
import { StatusType } from './StatusType'
import { ReportType } from './ReportType'

export type NotificationType = {
    id: string
    created_at: string
    account: AccountType
    type:
        | 'mention'
        | 'status'
        | 'reblog'
        | 'follow'
        | 'follow_request'
        | 'favourite'
        | 'poll'
        | 'update'
        | 'admin.sign_up'
        | 'admin.report'
    status?: StatusType
    report?: ReportType
}
