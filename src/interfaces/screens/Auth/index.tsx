import { StyleSheet, View } from 'react-native'

import { RouteAuth, useColors } from '$exporter'

export default function AuthInitial() {
    //
    const { styles } = useStyles()

    return (
        <View style={styles.container}>
            <RouteAuth />
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
            paddingHorizontal: 36,
        },
    })
    return { styles }
}
