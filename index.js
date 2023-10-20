import { AppRegistry } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { name as appName } from './app.json'
import App from './src/App'

const Index = () => {
    //
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <App />
        </GestureHandlerRootView>
    )
}

AppRegistry.registerComponent(appName, () => Index)
