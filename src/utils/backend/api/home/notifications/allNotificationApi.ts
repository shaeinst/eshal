import { MNotificationType, MStatusType, TokenType } from '$exporter/type'
import axios from 'axios'

import { ENDPOINTS } from '../../../endPoints'

export default async function allNotificationApi(props: TokenType): Promise<MNotificationType[]> {
    //

    const { token_type, server_url, access_token } = props

    const response = await axios.get(`${server_url}${ENDPOINTS.HOME.NOTIFICATIONS.all}`, {
        headers: {
            Authorization: `${token_type} ${access_token}`,
        },
        params: {
            limit: 40,
            types: [
                'mention',
                'status',
                'reblog',
                'follow',
                'follow_request',
                'favourite',
                'poll',
                'update',
                'admin.sign_up',
                'admin.report',
            ],
        },
    })

    console.log(response)

    return response.data
}
