import { WHITESPACE } from '$exporter'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import { useStyles } from './stylePrimaryButton'

type PropsType = {
    title: string
    onClick: () => void
    headless?: boolean
    icon?: React.ReactNode
    color?: string
    size?: 'normal' | 'large'
}

function PrimaryButton({
    title,
    onClick,
    icon,
    headless,
    color,
    size,
}: PropsType) {
    //
    const { styles } = useStyles()

    return (
        <TouchableOpacity
            style={[
                styles.container,
                headless ? styles.headlessContainer : undefined,
            ]}
            onPress={onClick}
            //
        >
            <View style={styles.icon}>{icon}</View>
            <Text
                style={[
                    color ? [styles.text, { color: color }] : styles.text,
                    size === 'large' ? styles.textLarge : undefined,
                ]}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default PrimaryButton
