import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import { MInstancesType } from '$exporter/type'
import allInstancesApi from '../api/allInstancesApi'

export default function queryAllInstances(queryInstance: string) {
    //
    const [data, setData] = useState<MInstancesType | undefined>()

    const token_type = 'Bearer'
    const access_token =
        'l63E36Wqd3ZGk6FCdfhNXtWvjaQ6XXUEJliECO4tUPL3puDVXpYxuXkUptLcpqIffiT5o7FDY1xcWbQEWaI2hv7kkEV26FmXyhMk2j1AyXeIr0bnZFtK0oqaGwehQLn5'

    const query = useQuery({
        queryKey: ['AllInstancesApi'],
        queryFn: () =>
            allInstancesApi({ token_type, access_token, next_id: data?.pagination.next_id, search: queryInstance }),
    })

    const handleEndReached = () => {
        if (query.data?.instances) {
            setData(prev => ({
                instances: [...(prev?.instances ? prev.instances : []), ...query.data.instances],
                pagination: query.data.pagination,
            }))
        }
        query.refetch()
    }

    useEffect(() => {
        const timerId = setTimeout(() => {
            query.refetch().then(res => {
                setData(res.data)
            })
        }, 500)
        return () => {
            clearTimeout(timerId)
        }
    }, [queryInstance])

    return {
        ...query,
        data: data,
        handleEndReached,
    }
}
