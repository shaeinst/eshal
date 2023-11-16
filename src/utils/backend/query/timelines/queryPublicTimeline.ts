import { useCallback, useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import { useZustandStore } from '$exporter'
import { MPOST_STATUS_DATA } from '$exporter/fakedata'
import publicTimelineApi from '../../api/home/timelines/publicTimelineApi'

export default function queryHomeTimeline() {
    //
    const [cursor, setCursor] = useState<string | undefined>(undefined)
    const { auth } = useZustandStore()

    const handleRefresh = () => {
        // todo:
        console.log("handleRefresh: ")
    }

    const query = useQuery({
        queryKey: ['PublicTimelineApi'],
        initialData: MPOST_STATUS_DATA,
        queryFn: () => publicTimelineApi(cursor),
    })

    useCallback(() => {
        // will handle setting cursor data later
        console.log('useCallback | FROM publicTimelineApi')
    }, [query.data])

    return {
        ...query,
        handleRefresh,
    }
    // const response = useInfiniteQuery({
    //     queryKey: ['PublicTimelineApi'],
    //     queryFn: context => {
    //         console.log(' ======= FROM Query Function =========\n')
    //         console.log(context)
    //         // console.log("data: " ,context.pageParam.id)
    //         console.log('=====================================\n')
    //         return publicTimelineApi(context?.pageParam?.id)
    //     },
    //     getNextPageParam: (data: MStatusType[]) => {
    //         const id = data.length > 1 ? data[data.length - 1].id : undefined
    //         const fetchedDate = new Date()
    //         // console.log("FROM ", data[data.length - 1].account.display_name, id)
    //         return { id, fetchedDate }
    //     },
    //     initialPageParam: undefined,
    // })
}
