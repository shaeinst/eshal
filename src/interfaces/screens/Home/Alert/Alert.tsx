import React, { useState } from 'react'
import { Text, View } from 'react-native'

import { MultiSelector } from '$exporter/component'
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

    const handlerFilter = () => {}

    return (
        <View style={styles.container}>
            <MultiSelector opts={filter} setOpts={setFilter} callback={handlerFilter} />
        </View>
    )
}
