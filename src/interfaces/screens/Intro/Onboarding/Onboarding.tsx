import { Text, View } from 'react-native'
import { useDispatch } from 'react-redux'

import { setInitStateRedux } from '$exporter'
import { PrimaryButton } from '$exporter/component'
import styles from './styleOnboarding'

function Onboarding() {
    //
    const dispatch = useDispatch()

    const handleSkip = () => {
        //
        dispatch(setInitStateRedux({ isFreshApp: false }))
    }

    return (
        <View style={styles.container}>
            <Text style={{textAlign: 'center'}}> this is on bording screen</Text>
            <PrimaryButton title="skip" size="large" onClick={handleSkip} />
        </View>
    )
}

export default Onboarding
