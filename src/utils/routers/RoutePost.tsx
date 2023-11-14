import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { ROUTERS } from '$exporter/constant'
import { PostViewScreen, TimelineScreen } from '$exporter/screen'

const { Navigator, Screen } = createNativeStackNavigator()

export function RoutePost() {
    //
    return (
        <Navigator
            screenOptions={{
                // When logging out, a pop animation feels intuitive
                animationTypeForReplace: 'pop', // 'pop', 'push',
                headerShown: false,
            }}
            initialRouteName={ROUTERS.HOME.TIMELINE.path}
            /* -------------------------------- */
        >
            <Screen name={ROUTERS.HOME.TIMELINE.path} component={TimelineScreen} />
            <Screen name={ROUTERS.HOME.TIMELINE.POSTVIEW.path} component={PostViewScreen} />
        </Navigator>
    )
}
