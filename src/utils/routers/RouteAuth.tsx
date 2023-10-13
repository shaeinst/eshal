import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { ROUTERS } from '$exporter/constant'
import { LoginScreen, OTPScreen, RegisterScreen } from '$exporter/screen'

const { AUTH } = ROUTERS
const { Navigator, Screen } = createNativeStackNavigator()

function RouteAuth() {
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

export default RouteAuth
