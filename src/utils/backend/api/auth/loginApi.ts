import axios from 'axios'

import { ROUTERS } from '$exporter/constant'
import { TokenType } from '$exporter/type'

import { ENDPOINTS } from '../../endPoints'

type PropsType = {
    url: string | null
    instanceURL: string
    clientId: string
    clientSecret: string
}

export default async function loginApi(props: PropsType): Promise<TokenType> {
    //
    const { url, instanceURL, clientId, clientSecret } = props

    const redirectUri = ROUTERS.PREFIX
    const { AUTH } = ENDPOINTS

    if (url && url.startsWith(redirectUri)) {
        const formData = new FormData()
        const authorizationCode = url.replace(`${redirectUri}?code=`, '')
        const scope = 'read write follow push'
        formData.append('grant_type', 'authorization_code')
        formData.append('code', authorizationCode)
        formData.append('client_id', clientId)
        formData.append('client_secret', clientSecret)
        formData.append('redirect_uri', redirectUri)
        formData.append('scope', scope)

        const { data } = await axios.post(`${instanceURL}${AUTH.token}`, formData)

        return { ...data, server_url: instanceURL }
    }
    return null
}
