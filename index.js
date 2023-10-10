/**
 * @format
 */
import { AppRegistry } from 'react-native'
import { Provider as ReduxProvider } from 'react-redux'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'

import { reduxStore } from '$exporter'
import App from './src/App'
import { name as appName } from './app.json'

const Index = () => {
  //
  return (
    <ReduxProvider store={reduxStore}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <App />
        </NavigationContainer>
      </GestureHandlerRootView>
    </ReduxProvider>
  )
}

AppRegistry.registerComponent(appName, () => Index)
