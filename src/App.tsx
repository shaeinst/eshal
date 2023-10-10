import { StatusBar, useColorScheme, View } from 'react-native'

import { COLORS } from '$exporter'
import {
    SplashScreen,
    AuthInitialScreen,
    HomeInitialScreen,
    Onboarding,
} from '$exporter/screen'
import { useAppInit } from '$exporter/hooks'

const { background } = COLORS

function App() {
    //
    const { isAppLaunching, isSignedIn, isFreshApp } = useAppInit()
    const barStyle =
        useColorScheme() === 'dark' ? 'light-content' : 'dark-content'

    if (isAppLaunching) return <SplashScreen />
    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor={background} barStyle={barStyle} />

            {isSignedIn ? (
                <HomeInitialScreen />
            ) : !isFreshApp ? (
                <Onboarding />
            ) : (
                <AuthInitialScreen />
            )}
        </View>
    )
}
export default App
