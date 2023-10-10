import { View, Text } from 'react-native'

import { CreadInput } from '$exporter/component'
import { useStyles } from './styleLogin'

function Login() {
    //
    const styles = useStyles()

    return (
        <View style={styles.container}>
            <Text style={styles.text}> login screen</Text>
            <CreadInput />
        </View>
    )
}

export default Login
