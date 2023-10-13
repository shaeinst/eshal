import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { ROUTERS } from '$exporter/constant'
import { PostScreen, ProfileScreen, TimelineScreen } from '$exporter/screen'

const { Navigator, Screen } = createNativeStackNavigator()
const rNames = ROUTERS.HOME

const RouteHome = () => {
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
            <Screen name={rNames.PROFILE.path} component={ProfileScreen} />
        </Navigator>
    )
}

export default RouteHome
