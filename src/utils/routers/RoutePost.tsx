import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { ROUTERS } from '$exporter/constant'
import { PostDetailsScreen, TimelineScreen } from '$exporter/screen'
import { MStatusType } from '$exporter/type'

const { TIMELINE } = ROUTERS.HOME

type RootStackParamList = {
    [TIMELINE.path]: undefined
    [TIMELINE.POSTVIEW.path]: { data?: MStatusType; postId?: string }
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export function RoutePost() {
    return (
        <Stack.Navigator
            screenOptions={{
                animationTypeForReplace: 'pop',
                headerShown: false,
            }}
            initialRouteName={TIMELINE.path}
            /* -------------------------------- */
        >
            <Stack.Screen name={TIMELINE.path} component={TimelineScreen} />
            <Stack.Screen name={TIMELINE.POSTVIEW.path} component={PostDetailsScreen} />
        </Stack.Navigator>
    )
}
