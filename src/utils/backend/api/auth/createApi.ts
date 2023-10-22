import { Linking } from 'react-native'

export default async function createApi() {
    //TODO: for now, just redirect to url

    const url = 'https://joinmastodon.org/servers'
    Linking.openURL(url)
}
