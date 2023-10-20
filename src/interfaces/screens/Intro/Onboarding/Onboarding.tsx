import { Text, View } from 'react-native'

import { useZustandStore } from '$exporter'
import { PrimaryButton } from '$exporter/component'
import styles from './styleOnboarding'

export default function Onboarding() {
    //

    const handleSkip = () => {
        //
        useZustandStore(state => state.setIsFreshApp(false))
    }

    return (
        <View style={styles.container}>
            <Text style={{ textAlign: 'center' }}> this is on bording screen</Text>
            <PrimaryButton title="skip" size="large" onClick={handleSkip} />
        </View>
    )
}
