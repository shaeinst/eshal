import { useEffect } from 'react'
import { Linking } from 'react-native'
import axios from 'axios'

import { ROUTERS } from '$exporter/constant'

export default function useLogin() {
    //
    const redirectUri = ROUTERS.PREFIX
    const clientId = 'KgAuLcGbo2zkui5JT7rfjBwRkiThQR05FkErALqSzXo'
    const clientSecret = '5p0AMzuT0DRqrFMIIUJAb0rdjv8W2d2gu5_jRC3hpf4'

    useEffect(() => {
        return () => Linking.removeAllListeners('url')
    }, [])

    const handleLogin = (instanceUrl: string) => {
        //
        const scope = 'read write follow'

        return new Promise<{ access_token: string }>((resolve, reject) => {
            const handleDeepLink = (event: { url: string | null }) => {
                const url = event.url
                if (url && url.startsWith(redirectUri)) {
                    const authorizationCode = url.replace(
                        `${redirectUri}?code=`,
                        '',
                    ) // Extract the code from the URL

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
                            // Resolve the Promise with the access token data
                            const { access_token } = response.data
                            resolve({ access_token })
                        })
                        .catch(error => {
                            // Reject the Promise with the error
                            reject(error)
                        })
                }
            }

            Linking.addEventListener('url', handleDeepLink)

            const authUrl = `https://${instanceUrl}/oauth/authorize?response_type=code&client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}`
            Linking.openURL(authUrl)
        })
    }

    return { handleLogin }
}
