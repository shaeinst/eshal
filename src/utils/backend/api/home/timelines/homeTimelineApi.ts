import { MStatusType, TokenType } from '$exporter/type'
import axios from 'axios'

import { ENDPOINTS } from '../../../endPoints'

export default async function homeTimelineApi(
    props: TokenType | null,
): Promise<MStatusType[] | undefined> {
    //
    if (!props) return undefined // JUST for typescript. token will never be null after loggedin

    const { token_type, server_url, access_token } = props

    const response = await axios.get(`${server_url}${ENDPOINTS.HOME.TIMELINES.home}`, {
        headers: {
            Authorization: `${token_type} ${access_token}`,
        },
        params: {
            limit: 20,
        },
    })

    return response.data
}
