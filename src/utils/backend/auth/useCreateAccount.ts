import { useState } from 'react'
import { Linking } from 'react-native'

export default function useCreateAccount() {
    //
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<{ status: boolean; msg: string } | boolean>({
        status: false,
        msg: '',
    })

    const handleCreate = async () => {
        // will implement later

        const url = 'https://joinmastodon.org/servers'
        Linking.openURL(url)
    }

    return { handleCreate, error, loading }
}
