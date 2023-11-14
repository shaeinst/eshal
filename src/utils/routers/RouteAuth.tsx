import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { ROUTERS } from '$exporter/constant'
import { LoginScreen, RegisterScreen } from '$exporter/screen'

const { AUTH } = ROUTERS

type RootStackParamList = {
    [AUTH.LOGIN.path]: undefined
    [AUTH.REGISTER.path]: undefined
}

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>()

export default function RouteAuth() {
    //
    return (
        <Navigator
            initialRouteName={AUTH.LOGIN.path}
            screenOptions={{
                // When logging out, a pop animation feels intuitive
                animationTypeForReplace: 'pop', // 'pop', 'push',
                headerShown: false,
            }}
            /* -------------------------------- */
        >
            <Screen name={AUTH.LOGIN.path} component={LoginScreen} />
            <Screen name={AUTH.REGISTER.path} component={RegisterScreen} />
        </Navigator>
    )
}
