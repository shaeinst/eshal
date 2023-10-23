import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { ROUTERS } from '$exporter/constant'
import {
    AlertScreen,
    PostScreen,
    ProfileScreen,
    SearchScreen,
    SettingScreen,
    TimelineScreen,
} from '$exporter/screen'

const { Navigator, Screen } = createNativeStackNavigator()
const rNames = ROUTERS.HOME

export default function RouteHome() {
    //
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                animation: 'slide_from_right',
                animationDuration: 200,
            }}
            initialRouteName={rNames.TIMELINE.path}
            /* -------------------------------- */
        >
            <Screen name={rNames.TIMELINE.path} component={TimelineScreen} />
            <Screen name={rNames.ADDPOST.path} component={PostScreen} />
            <Screen name={rNames.SEARCH.path} component={SearchScreen} />
            <Screen name={rNames.SETTING.path} component={SettingScreen} />
            <Screen name={rNames.ALERT.path} component={AlertScreen} />
            <Screen name={rNames.PROFILE.path} component={ProfileScreen} />
        </Navigator>
    )
}
