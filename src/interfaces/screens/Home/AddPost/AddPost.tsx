import { useEffect, useState } from 'react'
import { View, Text } from 'react-native'

import { useStyles } from './styleAddPost'

export default function AddPost() {
    //
    const [mountCount, setMountCount] = useState(0)
    const { styles } = useStyles()

    console.log('AddPost.tsx ', mountCount)

    useEffect(() => {
        setMountCount(prev => prev + 1)
        return () => {
            setMountCount(0)
        }
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.text}> post screen</Text>
        </View>
    )
}
