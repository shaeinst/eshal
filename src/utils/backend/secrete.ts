type ReturnType = {
    clientId: string
    clientSecret: string
    accessToken: string
}

export default function secrete(): ReturnType {
    //TODO: for now, secrete is hardcoded

    const clientKey = 'zKrXU-RLonON8q-tbTAucBpfIjQmktpbJpotdc3xR_w'
    const clientSecret = '6jcXJUKg-aL3RnbSeTTlLLLPr5QgZireMN8nuxuIiJs'
    const accessToken = 'AG9rJjyCQsUPu1kzPKp0DW0_P1kn9DV5gbODBJanHlw'

    return {
        clientId: clientKey,
        clientSecret,
        accessToken,
    }
}

const registerApp = async () => {
    const clientName = 'TESTINGAPPNAME11223344'
    const redirectUris = 'urn:ietf:wg:oauth:2.0:oob'
    const scopes = 'read write follow push'
    const website = 'com.eshal'

    // Create form data for the request
    const formData = new FormData()
    formData.append('client_name', clientName)
    formData.append('redirect_uris', redirectUris)
    formData.append('scopes', scopes)
    formData.append('website', website)

    fetch('https://mastodon.social/api/v1/apps', {
        method: 'POST',
        body: formData,
    })
        .then(response => {
            console.log(response)
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`)
            }
            return response.json()
        })
        .then(data => {
            console.log('Application created successfully:', data)

            const clientId = data.client_id
            const clientSecret = data.client_secret
            console.log('Client ID     : ', clientId)
            console.log('Client Secrete: ', clientSecret)
        })
        .catch(error => {
            console.error('Error:', error.message)
        })
}

// registerApp()
