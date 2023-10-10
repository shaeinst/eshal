import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { ROUTERS } from '$exporter/constant'
import { LoginScreen, OTPScreen } from '$exporter/screen'

const { AUTH } = ROUTERS
const { Navigator, Screen } = createNativeStackNavigator()

function RouteAuth() {
    //

    return (
        <Navigator
            initialRouteName={AUTH.LOGIN}
            screenOptions={{
                // When logging out, a pop animation feels intuitive
                animationTypeForReplace: 'pop', // 'pop', 'push',
                headerShown: false,
            }}
            /* -------------------------------- */
        >
            <Screen name={AUTH.LOGIN} component={LoginScreen} />
            <Screen name={AUTH.OTP} component={OTPScreen} />
        </Navigator>
    )
}

export default RouteAuth
