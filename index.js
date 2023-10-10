/**
 * @format
 */
import { AppRegistry } from 'react-native'
import { Provider as ReduxProvider } from 'react-redux'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { reduxStore } from '$exporter'
import { name as appName } from './app.json'
import App from './src/App'

const Index = () => {
    //
    return (
        <ReduxProvider store={reduxStore}>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <App />
            </GestureHandlerRootView>
        </ReduxProvider>
    )
}

AppRegistry.registerComponent(appName, () => Index)
