import { useQuery } from '@tanstack/react-query'

import { useZustandStore } from '$exporter'
import homeTimelineApi from '../../api/home/timelines/homeTimelineApi'

export default function queryHomeTimeline() {
    //

    const { auth } = useZustandStore()

    return useQuery({
        queryKey: ['HomeTimelineApi'],
        queryFn: () => homeTimelineApi(auth.token),
    })
}
