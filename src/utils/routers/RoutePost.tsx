import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { ROUTERS } from '$exporter/constant'
import { PostViewScreen, TimelineScreen } from '$exporter/screen'
import { MStatusType } from '$exporter/type'

type RootStackParamList = {
    [ROUTERS.HOME.TIMELINE.path]: undefined
    [ROUTERS.HOME.TIMELINE.POSTVIEW.path]: { data: MStatusType }
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export function RoutePost() {
    return (
        <Stack.Navigator
            screenOptions={{
                animationTypeForReplace: 'pop',
                headerShown: false,
            }}
            initialRouteName={ROUTERS.HOME.TIMELINE.path}
            /* -------------------------------- */
        >
            <Stack.Screen name={ROUTERS.HOME.TIMELINE.path} component={TimelineScreen} />
            <Stack.Screen name={ROUTERS.HOME.TIMELINE.POSTVIEW.path} component={PostViewScreen} />
        </Stack.Navigator>
    )
}
