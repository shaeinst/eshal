import axios from 'axios'

import { MInstancesType } from '$exporter/type'
import { ENDPOINTS } from '../endPoints'

type TokenType = {
    token_type: string
    access_token: string
}

export default async function allInstances({ access_token, token_type }: TokenType): Promise<MInstancesType> {
    //
    // https://instances.social/api/doc/

    const url = ENDPOINTS.INSTANCES

    const response = await axios.get(url, {
        headers: {
            Authorization: `${token_type} ${access_token}`,
        },

        params: {
            // sort_by: "name"
        },
    })

    return response.data
}
