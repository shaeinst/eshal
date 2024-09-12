/*
TODO:
write register screen.
will try to create register screen where users can register
from app itself (if possible)
**/

import { PrimaryButton } from '$exporter/component'
import { ROUTERS } from '$exporter/constant'
import React from 'react'
import { View, Text, Linking } from 'react-native'

import { useStyles } from './register.styles'

export default function Register() {
    //
    const { styles } = useStyles()

    const handleRgister = () => {
        const authUrl = ROUTERS.AUTH.LOGIN.prefix

        Linking.openURL(authUrl)
            .then(data => {
                console.log('------REGISTER: data ----------')
                console.log(data)
                console.log('-------------------------------')
            })
            .catch((error: any) => {
                console.log('------REGISTER: error ---------')
                console.log(error)
                console.log('-------------------------------')
            })
    }

    return (
        <View style={styles.container}>
            <Text>Register Screen</Text>
            <PrimaryButton title="Learn More" onClick={handleRgister} />
        </View>
    )
}
