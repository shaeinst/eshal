import { useEffect, useState } from 'react'
import { Linking } from 'react-native'
import axios from 'axios'

import { ROUTERS } from '$exporter/constant'
import { isURLValid } from '$exporter'
import { TokenType } from '$exporter/type'

export default function useLogin() {
    //
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<{ status: boolean; msg: string } | boolean>({
        status: false,
        msg: '',
    })

    const redirectUri = ROUTERS.PREFIX

    const clientId = '864ELq9VqDLHb9lcm_H0uDg-Z4IHzcQKMH4YajJ7YVs'
    const clientSecret = '2woqdzke-OhL8gqHqT9KV6vHCuvgGpkD3XvhTrT09Ik'

    useEffect(() => {
        return () => Linking.removeAllListeners('url')
    }, [])

    const handleLogin = async (instanceUrl: string): Promise<TokenType> => {
        //
        setLoading(true)
        setError({ status: false, msg: '' })

        // return false if instance url is invalid
        const isValid = await isURLValid(instanceUrl)
        if (!isValid) {
            setLoading(false)
            setError({
                status: true,
                msg: 'The URL is not valid or there was an issue with the network request.',
            })
            return null
        }

        return new Promise<TokenType>((resolve, reject) => {
            //
            const scope = 'read write follow push'
            const handleDeepLink = (event: { url: string | null }) => {
                const url = event.url
                if (url && url.startsWith(redirectUri)) {
                    const authorizationCode = url.replace(`${redirectUri}?code=`, '')
                    const tokenUrl = `https://${instanceUrl}/oauth/token`

                    const formData = new FormData()
                    formData.append('grant_type', 'authorization_code')
                    formData.append('code', authorizationCode)
                    formData.append('client_id', clientId)
                    formData.append('client_secret', clientSecret)
                    formData.append('redirect_uri', redirectUri)
                    formData.append('scope', scope)

                    axios
                        .post(tokenUrl, formData)
                        .then(response => {
                            const accessToken: TokenType = response.data
                            resolve(accessToken)
                        })
                        .catch(error => {
                            // Reject the Promise with the error
                            setError({ status: true, msg: 'Failed to get access token' })
                            reject(error)
                        })
                }
            }

            Linking.addEventListener('url', handleDeepLink)

            const authUrl = `https://${instanceUrl}/oauth/authorize?response_type=code&client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}`
            Linking.openURL(authUrl).finally(() => {
                setLoading(false)
            })
        })
    }

    return { handleLogin, error, loading }
}
