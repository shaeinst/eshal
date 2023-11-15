/**
 *  BUG
 *  Temperorly setting falsea to "detachInactiveScreens".
 *  there is an bug with react navigation with new Architecture
 *  https://github.com/react-navigation/react-navigation/issues/11384
 *  https://github.com/software-mansion/react-native-screens/issues/1762
 */

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { AddPostIcon, AlertIcon, HomeIcon, ProfileIcon, SearchIcon } from '$exporter/asset'
import { AlertScreen, AddPostScreen, ProfileScreen, SearchScreen } from '$exporter/screen'
import { ROUTERS } from '$exporter/constant'
import { RoutePost } from './RoutePost'

const { HOME } = ROUTERS

type PropsType = {
    bg: string
    fg: string
    hide?: boolean
}

type RootStackParamList = {
    [HOME.path]: undefined
    [HOME.ADDPOST.path]: undefined
    [HOME.SEARCH.path]: undefined
    [HOME.ALERT.path]: undefined
    [HOME.PROFILE.path]: undefined
}

const { Navigator, Screen } = createBottomTabNavigator<RootStackParamList>()

const tabBarIcon = (routeName: string, color: string) => {
    switch (routeName) {
        case HOME.path:
            return <HomeIcon stroke={color} />
        case HOME.ADDPOST.path:
            return <AddPostIcon stroke={color} />
        case HOME.SEARCH.path:
            return <SearchIcon stroke={color} />
        case HOME.ALERT.path:
            return <AlertIcon stroke={color} />
        case HOME.PROFILE.path:
            return <ProfileIcon fill={color} />
        default:
            return null
    }
}

export default function RouteHome(props: PropsType) {
    //

    return (
        <Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: props.fg,
                tabBarStyle: {
                    top: props.hide ? 101 : null,
                    height: props.hide ? 0 : 60,
                    shadowColor: 'transparent',
                    borderTopWidth: 0,
                    backgroundColor: props.bg,
                    paddingBottom: 10,
                },
                tabBarIcon: ({ color }) => tabBarIcon(route.name, color),
            })}
            initialRouteName={HOME.path}
            /**
             *  BUG
             *  Temperorly setting falsea to "detachInactiveScreens".
             *  there is an bug with react navigation with new Architecture
             *  https://github.com/react-navigation/react-navigation/issues/11384
             *  https://github.com/software-mansion/react-native-screens/issues/1762
             */
            detachInactiveScreens={false}
            /* -------------------------------- */
        >
            <Screen name={HOME.path} component={RoutePost} />
            <Screen name={HOME.ADDPOST.path} component={AddPostScreen} />
            <Screen name={HOME.SEARCH.path} component={SearchScreen} />
            <Screen name={HOME.ALERT.path} component={AlertScreen} />
            <Screen name={HOME.PROFILE.path} component={ProfileScreen} />
        </Navigator>
    )
}
