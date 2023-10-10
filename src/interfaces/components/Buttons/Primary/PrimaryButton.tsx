import {  WHITESPACE } from '$exporter'
import React from 'react'
import { Pressable, Text, View } from 'react-native'

import { styles } from './stylePrimaryButton'

type PropsType = {
    text: string
    onClick: () => void
    stateless?: boolean
    icon?: React.ReactNode
}

function PrimaryButton({ text, onClick, icon, stateless }: PropsType) {
    return (
        <Pressable
            style={[
                styles.container,
                {
                    // backgroundColor: stateless ? undefined : useColors.background,
                    // borderColor: stateless ? undefined : useColors.text,
                    borderWidth: stateless ? undefined : WHITESPACE.borderWidth,
                },
            ]}
            onPress={onClick}
            //
        >
            <View style={styles.icon}>{icon}</View>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    )
}

export default PrimaryButton
