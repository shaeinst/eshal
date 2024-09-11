import { Text, View, StyleSheet } from '@native'

import { useZustandStore } from '$exporter'
import { PrimaryButton } from '$exporter/component'

export default function Onboarding() {
    //
    const { setIsFreshApp } = useZustandStore()

    const handleSkip = () => {
        //
        setIsFreshApp(false)
    }

    return (
        <View style={styles.container}>
            <Text style={{ textAlign: 'center' }}> this is on bording screen</Text>
            <PrimaryButton title="skip" size="large" onClick={handleSkip} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 20,
        backgroundColor: '#f076aa',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
