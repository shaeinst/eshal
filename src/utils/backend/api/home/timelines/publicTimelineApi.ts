// NOTE: for now hardcoded to get posts. it's just for testing

import axios from 'axios'
import { MStatusType } from '$exporter/type'

export default async function publicTimelineApi(): Promise<MStatusType[] | undefined> {
    //

    const serverUrl = 'https://mastodon.social/api/v1/timelines/public'

    const response = await axios.get(serverUrl, {
        params: {
            limit: 30,
        },
    })

    return response.data
}
