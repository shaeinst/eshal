import { StyleSheet, View } from 'react-native'

import { RouteHome, useColors } from '$exporter'

export default function HomeInitial() {
    //
    const { styles } = useStyles()

    return (
        <View style={styles.container}>
            <RouteHome />
        </View>
    )
}

const useStyles = () => {
    //
    const { COLORS } = useColors()
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: COLORS.background,
        },
    })
    return { styles }
}
