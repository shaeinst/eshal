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

    const { styles } = useStyles()

    const handlePress = (key: string) => {
        if (opts[key].name.toLowerCase() === 'all') {
            const updatedOpts = Object.keys(opts).reduce((acc, optionKey) => {
                acc[key] = { ...opts[key], selected: true }
                acc[optionKey] = { ...opts[optionKey], selected: false }
                return acc
            }, {} as OptsType)
            setOpts(updatedOpts)
        } else {
            let count = 0
            Object.keys(opts).map(key => {
                if (key.toLowerCase() !== 'all' && opts[key].selected) {
                    count++
                }
            })
            setOpts(prev => ({
                ...prev,
                ['all']: { ...prev['all'], selected: false },
                [key]: { ...prev[key], selected: count === 1 ? true : !prev[key].selected },
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
