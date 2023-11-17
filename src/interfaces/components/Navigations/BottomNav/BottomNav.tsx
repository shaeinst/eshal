import React, { useEffect } from 'react'
import { TouchableOpacity } from 'react-native'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

import { useZustandStore } from '$exporter'
import { Icons } from './Icons'
import { useStyles } from './styleBottomNav'

export default function BottomNav({ state, descriptors, navigation }: BottomTabBarProps) {
    //

    const { styles, COLORS } = useStyles()
    const { hideBottomTab } = useZustandStore()
    const height = useSharedValue(50)

    const animatedStyles = useAnimatedStyle(() => ({
        height: withTiming(height.value, { duration: 200 }),
        paddingTop: hideBottomTab ? 0 : 8,
    }))

    useEffect(() => {
        if (hideBottomTab) {
            height.value = 0
        }
        return () => {
            height.value = 50
        }
    }, [hideBottomTab])

    return (
        <Animated.View
            // exiting={SlideOutLeft}
            style={[styles.container, animatedStyles]}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key]
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                        ? options.title
                        : route.name

                const isFocused = state.index === index

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    })

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params)
                    }
                }

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    })
                }

                return (
                    <TouchableOpacity
                        key={route.name}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{ flex: 1, alignItems: 'center' }}
                        //
                    >
                        {Icons(label.toString(), isFocused ? COLORS.active : COLORS.actionIcon)}
                    </TouchableOpacity>
                )
            })}
        </Animated.View>
    )
}