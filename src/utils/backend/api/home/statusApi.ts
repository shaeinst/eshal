import { MStatusType, TokenType } from '$exporter/type'
import axios from 'axios'

import { ENDPOINTS } from '../../endPoints'

export default async function statusApi(id: string): Promise<MStatusType> {
    //

    // const { token_type, server_url, access_token } = props

    const endpoint = `https://mastodon.social/api/v1/statuses/${id}`


    const response = await axios.get(endpoint, {
        headers: {
            Authorization: 'Bearer mlHKFPP1noA2K2PwpD9CfxeP1v3eLdbmXtumjt0upy8',
        },
    })

    return response.data
}
