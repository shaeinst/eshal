import { StyleSheet, useCallback } from '@native'
import { Stack, Tabs } from '@expo'
import { BottomTabBarProps } from '@3rd'

import { ROUTES, useColors } from '$exporter'
import { BottomNav } from '$exporter/component'

const { BOTTOM_TAB } = ROUTES.HOME

export default function Layout() {
    //
    const TabBar = useCallback((prop: BottomTabBarProps) => <BottomNav {...prop} />, [])
    const { styles } = useStyles()

    return (
        <Tabs
            tabBar={TabBar}
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
            }}
            sceneContainerStyle={styles.container}
            //
        >
            <Stack.Screen name={BOTTOM_TAB.INDEX.name} />
            <Stack.Screen
                options={{ headerShown: true, headerStyle: styles.add_post }}
                name={BOTTOM_TAB.ADD_POST.name}
            />
            <Stack.Screen name={BOTTOM_TAB.SEARCH.name} />
            <Stack.Screen name={BOTTOM_TAB.ALERT.name} />
            <Stack.Screen name={BOTTOM_TAB.PROFILE.name} />
        </Tabs>
    )
}

const useStyles = () => {
    //
    const { COLORS } = useColors()

    const styles = StyleSheet.create({
        container: {
            backgroundColor: 'transparent',
        },
        add_post: {
            backgroundColor: COLORS.text,
        },
    })

    return { styles }
}
