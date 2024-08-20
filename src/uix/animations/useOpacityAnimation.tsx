import { useEffect } from 'react'
import {
    Easing,
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withSpring,
    withTiming,
} from 'react-native-reanimated'

export default function Animation() {
    //
    const opacity = useSharedValue(1)

    const styles = useAnimatedStyle(() => {
        return {
            opacity: opacity.value,
        }
    })
    useEffect(() => {
        opacity.value = withRepeat(
            withTiming(0.2, {
                duration: 1000,
                easing: Easing.inOut(Easing.ease),
            }),
            -1,
            true,
        )
    }, [])

    return { styles }
}
