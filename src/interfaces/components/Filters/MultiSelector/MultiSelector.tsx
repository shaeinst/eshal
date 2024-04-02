import { useState } from 'react'
import { Text, View, TouchableOpacity, FlatList } from 'react-native'

import { useStyles } from './styleMultiSelector'

type OptsType = {
    [key: string]: { name: string; selected: boolean }
}

type PropsType = {
    opts: OptsType
    setOpts: React.Dispatch<React.SetStateAction<OptsType>>
    callback: () => void
}

export default function MultiSelector({ opts, setOpts, callback }: PropsType) {
    //

    const [totalActive, setTotalActive] = useState(1)
    const { styles } = useStyles()

    const handlePress = (key: string) => {
        //

        if (opts[key].name.toLowerCase() === 'all') {
            const updatedOpts = Object.keys(opts).reduce((acc, optionKey) => {
                acc[key] = { ...opts[key], selected: true }
                acc[optionKey] = { ...opts[optionKey], selected: false }
                return acc
            }, {} as OptsType)
            setOpts(updatedOpts)
        } else {
            setOpts(prev => ({
                ...prev,
                ['all']: { ...prev['all'], selected: false },
                [key]: { ...prev[key], selected: !prev[key].selected },
            }))

            Object.keys(opts).map(_key => {
                // if (_key !== 'all') {
                //     if (opts[_key].selected) {
                //         setTotalActive(prev => prev + 1)
                //     }
                // }
                if (opts[_key].selected) {
                    setTotalActive(prev => prev + 1)
                }
            })
            if (totalActive === 1)
                setOpts(prev => ({
                    ...prev,
                    [key]: { ...prev[key], selected: true },
                }))
        }
        callback()
    }

    return (
        <View style={styles.container}>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={Object.keys(opts)}
                keyExtractor={item => `MULTI_SELECTOR_${opts[item].name}`}
                renderItem={({ item: key }) => (
                    <TouchableOpacity onPress={() => handlePress(key)}>
                        <Text style={[styles.button, opts[key].selected ? styles.active : null]}>{opts[key].name}</Text>
                    </TouchableOpacity>
                )}
                ItemSeparatorComponent={() => <View style={styles.indent} />}
            />
        </View>
    )
}
