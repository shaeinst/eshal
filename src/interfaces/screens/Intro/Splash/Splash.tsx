import React from 'react'
import { Text, View } from 'react-native'

function Splash() {
    //

    console.log('\n\n\n1: splash screen')

    return (
        <View
            style={{
                backgroundColor: 'green',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <Text style={{ fontSize: 50 }}>Splash ScreenText </Text>
        </View>
    )
}

export default Splash
