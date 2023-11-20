import { useQuery } from '@tanstack/react-query'

import { useZustandStore } from '$exporter'
import statusApi from '../api/home/statusApi'

export default function queryStatus(id?: string) {
    //
    if (!id) return undefined

    // const { auth } = useZustandStore()

    // console.log("queryStatus.tsx: ", id)

    return useQuery({
        queryKey: ['statusApi', id],
        queryFn: statusApi,
    })
}
