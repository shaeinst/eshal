import { View, StyleSheet } from 'react-native'
import Animated from 'react-native-reanimated'

import { FONTS, useColors } from '$exporter'
import { useSplashAnimation } from '$exporter/animation'

export default function Splash() {
    //
    const { styles } = useStyles()
    const { styles: animationStyles } = useSplashAnimation()

    return (
        <View style={styles.container}>
            <Animated.Text style={[styles.logo, animationStyles]}>ESHAL</Animated.Text>
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
            justifyContent: 'center',
            alignItems: 'center'
        },
        logo: {
            ...FONTS.Inter['Bd-32'],
            color: COLORS.text,
            textAlign: 'center',
            width: '100%',
        },
    })

    return { styles }
}
