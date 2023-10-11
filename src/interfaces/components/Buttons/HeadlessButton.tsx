import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

type PropsType = {
    text: string
    onClick: () => void
    stateless?: boolean
}

export default function HeadlessButton(props:PropsType) {
    return (
        <TouchableOpacity>
            <Text>button</Text>
        </TouchableOpacity>
    )
}
