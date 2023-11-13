const clientName = 'TESTINGAPPNAME11223344'
const redirectUris = 'urn:ietf:wg:oauth:2.0:oob'
const scopes = 'read write follow push'
const website = 'http://192.168.1.130:3000'
const mastodonApiUrl = 'https://mastodon.social/api/v1/apps'

const formData = new FormData()
formData.append('client_name', clientName)
formData.append('redirect_uris', redirectUris)
formData.append('scopes', scopes)
formData.append('website', website)

fetch(mastodonApiUrl, {
    method: 'POST',
    body: formData,
})
    .then(response => response.json())
    .then(data => {
        // Handle the successful response here
        console.log('Application created:', data)
        console.log('client_id:', data.client_id)
        console.log('client_secret:', data.client_secret)
        // Store these values securely, such as in a server-side environment or a secure database
    })
    .catch(error => {
        // Handle errors here
        console.error('Error creating application:', error)
    })
