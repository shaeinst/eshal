import { ROUTERS } from '$exporter/constant'
import { useEffect } from 'react'
import { Linking, Platform } from 'react-native'

export default function useLogin() {
    //
    const redirectUri = ROUTERS.AUTH.REGISTER.prefix

    useEffect(() => {
        const handleDeepLink = (event: { url: string | null }) => {
            const url = event.url
            if (url && url.startsWith(redirectUri)) {
                console.log('=========== URL ==================')
                console.log(url.toString())
                console.log('==================================')
                // const [_, queryString] = url.split('#')
                // const params = new URLSearchParams(queryString)
                // const accessToken = params.get('access_token')
                // if (accessToken) {
                //     // store access token
                //     console.log('--------- accessToken ----------------------')
                //     console.log(accessToken)
                //     console.log('-------------------------------')
                // }
                const params = new URLSearchParams(url.split('?')[1])
                const authorizationCode = params.get('code')

                // Use the authorization code to request an access token

                // Save the access token to AsyncStorage

                // Redirect to your main app screen
            }
        }
        Linking.addEventListener('url', handleDeepLink)
        return () => Linking.removeAllListeners('url')
        // return () => {
        //     Linking.removeEventListener('url', handleDeepLink)
        // }

        // Linking.getInitialURL().then(url => {
        //     handleDeepLink({ url })
        // })
        // if (Platform.OS === 'ios') {
        //     Linking.addEventListener('url', handleDeepLink)
        // }
    }, [])

    const handleLogin = async (instanceUrl: string) => {
        const clientId = 'tYBplw9qP_OF4zhcWRnTeKcOj8GZvE5xW9BT1W3ZLRU'
        const scope = 'read+write+follow'
        const authUrl = `https://${instanceUrl}/oauth/authorize?response_type=token&client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}`
        console.log(authUrl)

        Linking.openURL(authUrl)
            .then(data => {
                console.log('------------ data -------------')
                console.log(data)
                console.log('-------------------------------')
            })
            .catch((error: any) => {
                console.log('----------- error -------------')
                console.log(error)
                console.log('-------------------------------')
            })
    }

    return { handleLogin }
}
