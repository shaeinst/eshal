import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SceneRendererProps, TabView } from 'react-native-tab-view'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

import { FONTS, useColors } from '$exporter'

// compied from source code
type SceneProps = {
    route: any
} & Omit<SceneRendererProps, 'layout'>

type PropsType = {
    routes: Array<{ key: string; title: string }>
    renderScene: ({ route, jumpTo, position }: SceneProps) => JSX.Element
}

export function TabBar(props: PropsType) {
    //
    const { routes, renderScene } = props
    const [index, setIndex] = useState<number>(0)
    const { styles } = useStyles()

    const handleIndexChange = (currentIndex: number) => {
        setIndex(currentIndex)
    }

    const RenderTabBar = () => (
        <View style={styles.container}>
            {routes.map((route, i) => {
                const isActive = index === i
                return (
                    <TouchableOpacity
                        key={route.key}
                        style={[styles.tabItem, isActive ? styles.buttonBorder : {}]}
                        onPress={() => setIndex(i)}>
                        <Text style={styles.tabLable}>{route.title}</Text>
                    </TouchableOpacity>
                )
            })}
            <View style={[styles.buttonBorder]} />
        </View>
    )

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            renderTabBar={RenderTabBar}
            onIndexChange={handleIndexChange}
        />
    )
}

const useStyles = () => {
    //
    const { COLORS } = useColors()

    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            shadowColor: COLORS.tabShadow,
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.17,
            shadowRadius: 3.05,
            elevation: 4,
            // end SHADOW
        },
        tabItem: {
            flex: 1,
            paddingBottom: 8,
            alignItems: 'center',
        },
        tabLable: {
            ...FONTS.Inter['Md-16'],
            color: COLORS.text,
            alignItems: 'center',
        },
        buttonBorder: {
            borderBottomWidth: 1,
            borderBottomColor: COLORS.text,
        },
    })

    return { styles }
}
