import { useQuery } from '@tanstack/react-query'

import { useZustandStore } from '$exporter'
import publicTimelineApi from '../../api/home/timelines/publicTimelineApi'

export default function queryHomeTimeline() {
    //

    const { auth } = useZustandStore()

    return useQuery({
        queryKey: ['PublicTimelineApi'],
        queryFn: () => publicTimelineApi(),
    })
}
