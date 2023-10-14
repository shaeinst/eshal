import axios from 'axios'

export default async function isURLValid(url: string): Promise<boolean> {
    //
    return axios
        .head(url)
        .then(response => {
            return response.status >= 200 && response.status < 300
        })
        .catch(_error => {
            return false
        })
}
