import { useQuery } from '@tanstack/react-query'

import { useZustandStore } from '$exporter'
import allNotificationApi from '../../api/home/notifications/allNotificationApi'

export default function queryAllNotification() {
    //

    const { auth } = useZustandStore()

    return useQuery({
        queryKey: ['HomeNotificationApi'],
        queryFn: () => allNotificationApi(auth.token),
    })
}
