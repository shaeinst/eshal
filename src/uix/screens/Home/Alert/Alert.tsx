import React, { useState } from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import { FlashList, ListRenderItemInfo } from '@shopify/flash-list'

import { MultiSelector } from '$exporter/component'
import { queryAllNotification } from '$exporter/backend'
import { useStyles } from './styleAlert'

type OptsType = {
    [key: string]: { name: string; selected: boolean }
}

export default function Alert() {
    //
    const [filter, setFilter] = useState<OptsType>({
        all: { name: 'All', selected: true },
        mention: { name: 'Mentions', selected: false },
        status: { name: 'New posts', selected: false },
        reblog: { name: 'Boots', selected: false },
        follow: { name: 'New followers', selected: false },
        follow_request: { name: 'Follow Requests', selected: false },
        favourite: { name: 'Favourites', selected: false },
        poll: { name: 'Polls', selected: false },
        update: { name: 'Post edits', selected: false },
        adminSignUp: { name: 'Sign ups', selected: false },
        adminReport: { name: 'Reports', selected: false },
    })
    const { styles } = useStyles()

    const handlerFilter = () => {
        //
    }

    // const data = [0, 1, 2, 3, 4, 5]
    const { data, error, isLoading, isFetching } = queryAllNotification()

    console.log('===================')
    console.log('LOADING: ', isLoading)
    console.log('Fetching: ', isFetching)
    console.log('DATA: ', data)
    console.log('ERROR: ', error)
    console.log('===================')
    return (
        <View style={styles.container}>
            <MultiSelector opts={filter} setOpts={setFilter} callback={handlerFilter} />
            {/* {isLoading || isFetching ? <ActivityIndicator size="large" /> : null} */}
            <View style={styles.item}>
                <FlashList
                    refreshing={true}
                    estimatedItemSize={150}
                    data={data}
                    renderItem={({ item }) => (
                        <View style={styles.rednerItemContainer}>
                            <Text> {item.type}</Text>
                        </View>
                    )}
                />
            </View>
        </View>
    )
}
