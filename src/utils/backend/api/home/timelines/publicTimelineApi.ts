// NOTE: for now hardcoded to get posts. it's just for testing

import axios from 'axios'
import { MStatusType } from '$exporter/type'

export default async function publicTimelineApi(id?: string): Promise<MStatusType[]> {
    //

    const params = id
        ? {
              limit: 30,
              // min_id: id,
              max_id: id,
          }
        : {
              limit: 30,
          }

    // console.log("from Api: ", id);
    // console.log(params)

    const endpoint = 'https://mastodon.social/api/v1/timelines/home'
    // const endpoint = "https://mastodon.social/api/v1/timelines/public"
    const response = await axios.get(endpoint, {
        params,
        headers: {
            Authorization: 'Bearer mlHKFPP1noA2K2PwpD9CfxeP1v3eLdbmXtumjt0upy8',
        },
    })

    return response.data
}
