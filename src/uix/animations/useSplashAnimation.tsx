import { useEffect } from 'react'
import {
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withSequence,
    withSpring,
} from 'react-native-reanimated'

export default function Animation() {
    //
    const letterSpacingValue = useSharedValue(10)

    useEffect(() => {
        letterSpacingValue.value = withSequence(
            withRepeat(withSpring(25, { duration: 500, stiffness: 10 }), 1000, true),
        )
    }, [])

    const styles = useAnimatedStyle(() => {
        return { letterSpacing: letterSpacingValue.value }
    })

    return { styles }
}
