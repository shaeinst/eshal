import React from 'react'
import { Keyboard, Text, TouchableOpacity, View } from 'react-native'

import { useStyles } from './stylePrimaryButton'

type PropsType = {
    title: string
    onClick: () => void
    headless?: boolean
    icon?: React.ReactNode
    color?: string
    size?: 'normal' | 'large'
    disabled?: boolean
    keyboardDismiss?: boolean
}

export default function PrimaryButton(props: PropsType) {
    //
    const { title, onClick, icon, headless, color, size, disabled, keyboardDismiss } = props
    const { styles } = useStyles()

    return (
        <TouchableOpacity
            style={[styles.container, headless ? styles.headlessContainer : undefined]}
            onPress={() => {
                if (keyboardDismiss) Keyboard.dismiss()
                onClick()
            }}
            disabled={disabled}
            //
        >
            <View style={styles.icon}>{icon}</View>
            <Text
                style={[
                    color ? [styles.text, { color: color }] : styles.text,
                    size === 'large' ? styles.textLarge : undefined,
                    disabled ? styles.disabled : undefined,
                ]}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}
