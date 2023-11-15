// NOTE: for now hardcoded to get posts. it's just for testing

import axios from 'axios'
import { MStatusType } from '$exporter/type'

export default async function publicTimelineApi(id?: string): Promise<MStatusType[]> {
    //

    const params = id
        ? {
              limit: 20,
              min_id: id,
          }
        : {
              limit: 20,
          }

    // console.log("from Api: ", id);
    // console.log(params)

    const response = await axios.get('https://mastodon.social/api/v1/timelines/public', { params })

    return response.data
}
