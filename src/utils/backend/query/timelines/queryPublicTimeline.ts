import { keepPreviousData, useInfiniteQuery, useQuery } from '@tanstack/react-query'

import { useZustandStore } from '$exporter'
import publicTimelineApi from '../../api/home/timelines/publicTimelineApi'
import { MStatusType } from '$exporter/type'

export default function queryHomeTimeline() {
    //

    const { auth } = useZustandStore()

    return useInfiniteQuery({
        queryKey: ['PublicTimelineApi'],
        queryFn: ({ pageParam }) => publicTimelineApi(pageParam),
        getNextPageParam: (data: MStatusType[]) => {
            const id = data ? data[data.length - 1].id : undefined
            console.log("FROM ", data[data.length - 1].account.display_name, id)
            return id
        },
        initialPageParam: undefined,
    })

    // return useQuery({
    //     queryKey: ['PublicTimelineApi'],
    //     queryFn: () => publicTimelineApi(),
    //     placeholderData: keepPreviousData,
    // })
}
