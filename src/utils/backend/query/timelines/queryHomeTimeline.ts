import { useQuery } from '@tanstack/react-query'

import { useZustandStore } from '$exporter'
import homeTimelineApi from '../../api/home/timelines/homeTimelineApi'

export default function queryHomeTimeline() {
    //

    const { auth } = useZustandStore()

    const { error, data, isLoading, isFetching, refetch } = useQuery({
        queryKey: ['HomeTimelineApi'],
        queryFn: () => homeTimelineApi(auth.token),
    })

    return { error, data, isLoading, isFetching, refetch }
}
