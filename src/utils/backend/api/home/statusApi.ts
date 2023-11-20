import { MStatusType, TokenType } from '$exporter/type'
import axios from 'axios'

import { ENDPOINTS } from '../../endPoints'

type PropsType = {
    queryKey: [_key: string, id: string]
}

export default async function statusApi({ queryKey }: PropsType): Promise<MStatusType> {
    //

    const [_key, id] = queryKey

    const endpoint = `https://mastodon.social/api/v1/statuses/${id}`

    const response = await axios.get(endpoint, {
        headers: {
            Authorization: 'Bearer mlHKFPP1noA2K2PwpD9CfxeP1v3eLdbmXtumjt0upy8',
        },
    })

    return response.data
}
