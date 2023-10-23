import { View, Text } from 'react-native'

import { useStyles } from './stylePost'

export default function Post() {
    //
    const { styles } = useStyles()

    return (
        <View style={styles.container}>
            <Text> post screen</Text>
        </View>
    )
}
