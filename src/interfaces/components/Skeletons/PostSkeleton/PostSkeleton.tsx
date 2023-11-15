import Animated from 'react-native-reanimated'

import { useOpacityAnimation } from '$exporter/animation'
import { useStyles } from './stylePostSkeleton'

const { View } = Animated

export default function PostSkeleton() {
    //
    const { styles } = useStyles()
    const { styles: animatedStyles } = useOpacityAnimation()

    return (
        <View style={styles.container}>
            <View style={[styles.profile, animatedStyles]} />
            <View style={styles.authorContainer}>
                <View style={[styles.line, animatedStyles]} />
                <View style={[styles.line, animatedStyles]} />
                <View style={[styles.body, animatedStyles]} />
                <View style={[styles.line, animatedStyles]} />
            </View>
        </View>
    )
}
