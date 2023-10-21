import { AppRegistry } from 'react-native'

import { name as appName } from './app.json'
import App from './src/App'

const Index = () => {
    //
    return <App />
}

AppRegistry.registerComponent(appName, () => Index)
