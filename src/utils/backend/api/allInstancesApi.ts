import axios from 'axios'

import { MInstancesType } from '$exporter/type'
import { ENDPOINTS } from '../endPoints'

type PropsType = {
    token_type: string
    access_token: string
    next_id?: string
    search?: string
}

export default async function allInstances(props: PropsType): Promise<MInstancesType> {
    //
    // https://instances.social/api/doc/
    const { access_token, token_type, next_id, search } = props
    const isQuery = search && search.length > 0 ? true : false

    const url = isQuery ? ENDPOINTS.INSTANCES.search : ENDPOINTS.INSTANCES.list

    const params = isQuery
        ? // https://instances.social/api/1.0/instances/search
          { count: 50, q: search, name: true }
        : // https://instances.social/api/1.0/instances/list
          { count: 50, min_id: next_id }

    const response = await axios.get(url, {
        headers: {
            Authorization: `${token_type} ${access_token}`,
        },
        params,
    })

    return response.data
}
