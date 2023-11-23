import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { ROUTERS } from '$exporter/constant'
import { PostDetailsScreen, TimelineScreen } from '$exporter/screen'
import { MStatusType } from '$exporter/type'

const { STACK_TIMELINE } = ROUTERS.HOME

type RootStackParamList = {
    [STACK_TIMELINE.TIMELINE.path]: undefined
    [STACK_TIMELINE.POSTVIEW.path]: { data?: MStatusType; postId?: string }
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export function StackTimeline() {
    return (
        <Stack.Navigator
            screenOptions={{
                animationTypeForReplace: 'pop',
                headerShown: false,
            }}
            initialRouteName={STACK_TIMELINE.TIMELINE.path}
            /* -------------------------------- */
        >
            <Stack.Screen name={STACK_TIMELINE.TIMELINE.path} component={TimelineScreen} />
            <Stack.Screen name={STACK_TIMELINE.POSTVIEW.path} component={PostDetailsScreen} />
        </Stack.Navigator>
    )
}
