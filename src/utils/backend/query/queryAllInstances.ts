import { useQuery } from '@tanstack/react-query'
import allInstancesApi from '../api/allInstancesApi'

export default function queryAllInstances() {
    //

    const token_type = 'Bearer'
    const access_token =
        'l63E36Wqd3ZGk6FCdfhNXtWvjaQ6XXUEJliECO4tUPL3puDVXpYxuXkUptLcpqIffiT5o7FDY1xcWbQEWaI2hv7kkEV26FmXyhMk2j1AyXeIr0bnZFtK0oqaGwehQLn5'
    return useQuery({
        queryKey: ['AllInstancesApi'],
        queryFn: () => allInstancesApi({ token_type, access_token }),
    })
}
