import React, { useState } from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SceneRendererProps, TabView, TabBar as NativeTabBar, NavigationState } from 'react-native-tab-view'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

import { FONTS, useColors } from '$exporter'

// compied from source code
type SceneProps = {
    route: any
} & Omit<SceneRendererProps, 'layout'>

type PropsType = {
    routes: Array<{ key: string; title: string; lazyLoad: boolean }>
    renderScene: ({ route, jumpTo, position }: SceneProps) => JSX.Element
}

export default React.memo(function TabBar(props: PropsType) {
    //
    const { routes, renderScene } = props
    const [index, setIndex] = useState<number>(0)

    const handleIndexChange = (currentIndex: number) => {
        setIndex(currentIndex)
    }

    const handleLazyLoad = ({ route }: { route: { key: string; title: string } }) => {
        const matchingRoute = routes.find(r => r.key === route.key)
        return matchingRoute ? matchingRoute.lazyLoad : false
    }

    const initialLayout = {
        height: 0,
        width: Dimensions.get('window').width,
    }

    return (
        <TabView
            initialLayout={initialLayout}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            renderTabBar={RenderTabBar}
            onIndexChange={handleIndexChange}
            lazy={handleLazyLoad}
        />
    )
})

type RenderTabBarPropsType = SceneRendererProps & {
    navigationState: NavigationState<{ key: string; title: string; lazyLoad: boolean }>
}

const RenderTabBar = (props: RenderTabBarPropsType) => {
    //
    const { styles, COLORS } = useStyles()

    return (
        <NativeTabBar
            {...props}
            indicatorStyle={styles.indicator}
            style={styles.container}
            labelStyle={styles.label}
            tabStyle={styles.tab}
        />
    )
    // return (
    //     <View style={styles.container}>
    //         {routes.map((route, i) => {
    //             const isActive = index === i
    //             return (
    //                 <TouchableOpacity
    //                     key={route.key}
    //                     style={[styles.tabItem, isActive ? styles.buttonBorder : {}]}
    //                     onPress={() => setIndex(i)}>
    //                     <Text style={styles.tabLable}>{route.title}</Text>
    //                 </TouchableOpacity>
    //             )
    //         })}
    //         <View style={[styles.buttonBorder]} />
    //     </View>
    // )
}

const useStyles = () => {
    //
    const { COLORS } = useColors()

    const styles = StyleSheet.create({
        container: {
            backgroundColor: COLORS.background,
        },
        indicator: {
            backgroundColor: COLORS.text,
        },
        label: {
            ...FONTS.Inter['Lt-16'],
            color: COLORS.text,
        },
        tab: {
            padding: 0,
            margin: -6,
        },

        //
        // tabItem: {
        //     flex: 1,
        //     paddingBottom: 8,
        //     alignItems: 'center',
        // },
        // tabLable: {
        //     ...FONTS.Inter['Md-16'],
        //     color: COLORS.text,
        //     alignItems: 'center',
        // },
        // buttonBorder: {
        //     borderBottomWidth: 2,
        //     borderBottomColor: COLORS.success,
        // },
    })

    return { styles, COLORS }
}
