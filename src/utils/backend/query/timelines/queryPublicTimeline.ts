import { useCallback, useEffect, useMemo, useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import { useZustandStore } from '$exporter'
import { MPOST_STATUS_DATA } from '$exporter/fakedata'
import publicTimelineApi from '../../api/home/timelines/publicTimelineApi'
import { MStatusType } from '$exporter/type'

const mergeArrays = (previous: MStatusType[], fetched: MStatusType[]): MStatusType[] => {
    const map = new Map()

    // Create a map from array1 with id as the key
    previous.forEach(item => {
        map.set(item.id, item)
    })

    // Merge or replace items from array2 into array1
    fetched.forEach(item => {
        map.set(item.id, item)
    })

    // Return merged values from the map
    return Array.from(map.values())
}

const arraySlider = (props: {
    data: MStatusType[]
    upper: number
    height: number
    freq: number
    direction: 'up' | 'down'
}): {
    data: MStatusType[]
    up: number
} => {
    //
    const { data, upper, height, freq, direction } = props
    let up = 0
    const dataLength = data.length

    if (height + freq >= dataLength) {
        return { data, up }
    }
    if (direction === 'up') {
        up = upper - freq < 1 ? 0 : upper - freq
    } else {
        up = upper + freq + height >= dataLength ? dataLength - height : upper + freq
    }

    return {
        up,
        data: data.slice(up, up + height),
    }
}

const HEIGHT = 20
const FREQ = 1

export default function queryHomeTimeline() {
    //
    const [cursor, setCursor] = useState<string | undefined>(undefined)
    const { auth } = useZustandStore()
    const [loadingIndicator, setLoadingIndicator] = useState(false)
    const [dataStore, setDataStore] = useState<MStatusType[]>([])
    const [visibleData, setVisibleData] = useState<MStatusType[]>(MPOST_STATUS_DATA)
    const [visibleUpperLimit, setVisibleUpperLimit] = useState(0)
    const [latest3, setLatest3] = useState<string[]>([])

    const query = useQuery({
        queryKey: ['PublicTimelineApi'],
        // initialData: MPOST_STATUS_DATA,
        queryFn: () => publicTimelineApi(cursor),
    })

    const handleDataSlider = (direction: 'up' | 'down') => {
        //
        const slidedData = arraySlider({
            data: dataStore,
            height: HEIGHT,
            freq: FREQ,
            upper: visibleUpperLimit,
            direction: direction,
        })
        setVisibleUpperLimit(slidedData.up)
        setVisibleData(slidedData.data)
    }
    const handleRefresh = () => {
        // todo:
        setLoadingIndicator(true)
        console.log('handleRefresh: ')
        query.refetch()
        // handleDataSlider('up')
    }

    const handleEndReached = () => {
        console.log('End Reached')
        setLoadingIndicator(false)
        handleRefresh()
        handleDataSlider('down')
    }

    const handleOnScroll = ({ nativeEvent }) => {
        const { contentOffset } = nativeEvent
        // Check if the user is close to the top of the list
        // console.log("POSITION: ", contentOffset)
        if (contentOffset.y <= 0) {
            // Perform the action when the user reaches the top
            // console.log('Reached the top of the list!')
            // setVisibleUpperLimit(prev => prev + 4) // Increase the count when scrolled
            // Add your action here
        }
    }

    useEffect(() => {
        if (!query.data || query.data.length < 1) {
            return
        }
        // console.log('queryPublicTimeline: DATA LENGTH: ', dataStore.length)
        if (query.data.length > 2) {
            //     return
            setCursor(query.data[query.data.length - 1].id)
        }

        if (dataStore.length < 100) {
            setDataStore(prev => mergeArrays(prev, query.data))
        }
        // hardcoded: will change later
        setLatest3([query.data[0].account.avatar, query.data[1].account.avatar, query.data[2].account.avatar])
    }, [query.data])

    return {
        ...query,
        data: dataStore,
        handleRefresh,
        handleEndReached,
        handleOnScroll,
        loadingIndicator: loadingIndicator && (query.isLoading || query.isFetching),
        latest3
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
