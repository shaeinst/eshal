import { StyleSheet, View } from 'react-native'

import { RouteHome, WHITESPACE } from '$exporter'

function Home() {
    //

    return (
        <View style={styles.container}>
            <RouteHome />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingTop: WHITESPACE.topMP,
    },
})

export default Home
