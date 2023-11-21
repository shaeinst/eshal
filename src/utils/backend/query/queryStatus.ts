import { useQuery } from '@tanstack/react-query'

import { useZustandStore } from '$exporter'
import statusApi from '../api/home/statusApi'
import { useMemo } from 'react'

export default function queryStatus(id?: string) {
    //

    // const { auth } = useZustandStore()

    // console.log("queryStatus.tsx: ", id)

    const query = useQuery({
        queryKey: ['statusApi', id || ''],
        queryFn: statusApi,
        enabled: id ? true : false,
    })

    return useMemo(() => query, [query.data])
}
