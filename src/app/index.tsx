import {StatusBar, StyleSheet, Text} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClientProvider} from '@tanstack/react-query';

import {
    SplashScreen,
    AuthInitialScreen,
    HomeInitialScreen,
    Onboarding,
} from '$exporter/screen';
import {useAppInit} from '$exporter/hooks';
import {LINKING} from '$exporter/constant';

export default function App() {
    //
    return <Text>Top-level page</Text>;
}

const styles = StyleSheet.create({
    gestureHandler: {
        flex: 1,
    },
});
