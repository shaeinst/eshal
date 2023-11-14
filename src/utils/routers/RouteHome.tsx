import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { ROUTERS } from '$exporter/constant'
import { AddPostIcon, AlertIcon, HomeIcon, ProfileIcon, SearchIcon } from '$exporter/asset'
import {
    AlertScreen,
    AddPostScreen,
    ProfileScreen,
    SearchScreen,
    TimelineScreen,
} from '$exporter/screen'

const { Navigator, Screen } = createBottomTabNavigator()

type PropsType = {
    bg: string
    fg: string
}

export default function RouteHome(props: PropsType) {
    //
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: props.fg,
                tabBarStyle: {
                    height: 60,
                    shadowColor: 'transparent',
                    borderTopWidth: 0,
                    backgroundColor: props.bg,
                    paddingBottom: 10,
                    // paddingTop: 40,
                },
            }}
            initialRouteName={ROUTERS.HOME.TIMELINE.path}
            /* -------------------------------- */
        >
            <Screen
                options={{ tabBarIcon: ({ color }) => <HomeIcon stroke={color} /> }}
                name={ROUTERS.HOME.TIMELINE.path}
                component={TimelineScreen}
            />
            <Screen
                options={{ tabBarIcon: ({ color }) => <AddPostIcon stroke={color} /> }}
                name={ROUTERS.HOME.ADDPOST.path}
                component={AddPostScreen}
            />
            <Screen
                options={{ tabBarIcon: ({ color }) => <SearchIcon stroke={color} /> }}
                name={ROUTERS.HOME.SEARCH.path}
                component={SearchScreen}
            />
            <Screen
                options={{ tabBarIcon: ({ color }) => <AlertIcon stroke={color} /> }}
                name={ROUTERS.HOME.ALERT.path}
                component={AlertScreen}
            />
            <Screen
                options={{ tabBarIcon: ({ color }) => <ProfileIcon fill={color} /> }}
                name={ROUTERS.HOME.PROFILE.path}
                component={ProfileScreen}
            />
        </Navigator>
    )
}
