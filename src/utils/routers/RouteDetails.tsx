import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { ROUTERS } from '$exporter/constant'
import { PostDetailsScreen } from '$exporter/screen'
import { MStatusType } from '$exporter/type'
import TabTimeline from './tabs/TabTimeline'

const { TIMELINE } = ROUTERS.HOME

type RootStackParamList = {
    [TIMELINE.TABS.HOME.path]: undefined
    [TIMELINE.DETAILS.POSTVIEW.path]: { data?: MStatusType; postId?: string }
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export function RouteDetails() {
    return (
        <Stack.Navigator
            screenOptions={{
                animationTypeForReplace: 'pop',
                headerShown: false,
            }}
            initialRouteName={TIMELINE.TABS.HOME.path}
            /* -------------------------------- */
        >
            <Stack.Screen name={TIMELINE.TABS.HOME.path} component={TabTimeline} />
            <Stack.Screen name={TIMELINE.DETAILS.POSTVIEW.path} component={PostDetailsScreen} />
        </Stack.Navigator>
    )
}
