/**
 *  BUG
 *  Temperorly setting false to "detachInactiveScreens".
 *  there is an bug with react navigation with new Architecture
 *  https://github.com/react-navigation/react-navigation/issues/11384
 *  https://github.com/software-mansion/react-native-screens/issues/1762
 */
import { useCallback } from 'react'
import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { AlertScreen, AddPostScreen, ProfileScreen, SearchScreen } from '$exporter/screen'
import { BottomNav } from '$exporter/component'
import { ROUTERS } from './ConstRoute'
import { RouteDetails } from './RouteDetails'

const { HOME } = ROUTERS

type RootStackParamList = {
    [HOME.path]: undefined
    [HOME.ADDPOST.path]: undefined
    [HOME.SEARCH.path]: undefined
    [HOME.ALERT.path]: undefined
    [HOME.PROFILE.path]: undefined
}

const { Navigator, Screen } = createBottomTabNavigator<RootStackParamList>()

export default function RouteHome() {
    //

    const TabBar = useCallback((prop: BottomTabBarProps) => <BottomNav {...prop} />, [])

    return (
        <Navigator
            tabBar={TabBar}
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
            }}
            initialRouteName={HOME.path}
            /**
             *  BUG
             *  Temperorly setting false to "detachInactiveScreens".
             *  there is an bug with react navigation with new Architecture
             *  https://github.com/react-navigation/react-navigation/issues/11384
             *  https://github.com/software-mansion/react-native-screens/issues/1762
             */
            detachInactiveScreens={false}
            /* -------------------------------- */
        >
            <Screen name={HOME.path} component={RouteDetails} />
            <Screen name={HOME.ADDPOST.path} component={AddPostScreen} />
            <Screen name={HOME.SEARCH.path} component={SearchScreen} />
            <Screen name={HOME.ALERT.path} component={AlertScreen} />
            <Screen name={HOME.PROFILE.path} component={ProfileScreen} />
        </Navigator>
    )
}
