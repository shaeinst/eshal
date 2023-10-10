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
            initialRouteName={rNames.TIMELINE}
            /* -------------------------------- */
        >
            <Screen name={rNames.TIMELINE} component={TimelineScreen} />
            <Screen name={rNames.ADDPOST} component={PostScreen} />
            <Screen name={rNames.PROFILE} component={ProfileScreen} />
        </Navigator>
    )
}

export default RouteHome
