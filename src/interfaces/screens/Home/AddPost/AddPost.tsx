import { View, Text } from 'react-native'

import { useStyles } from './styleAddPost'

export default function AddPost() {
    //
    const { styles } = useStyles()

    return (
        <View style={styles.container}>
            <Text style={styles.text}> post screen</Text>
        </View>
    )
}
