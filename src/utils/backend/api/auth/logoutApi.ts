import axios from 'axios'

import { AuthStateType } from '$exporter/type'

import { ENDPOINTS } from '../../endPoints'

type PropsType = {
    auth: AuthStateType
    clientId: string
    clientSecret: string
}

export default async function logoutApi(props: PropsType) {
    //
    const { auth, clientId, clientSecret } = props

    const formData = new FormData()
    formData.append('client_id', clientId)
    formData.append('client_secret', clientSecret)
    formData.append('token', auth.token?.access_token)

    return await axios.post(`${auth.token?.server_url}${ENDPOINTS.AUTH.revoke}`, formData)
}
