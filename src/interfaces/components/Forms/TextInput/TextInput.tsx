import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native'

import { useStyles } from './styleTextInput'

type PropsType = {
    text: string
    onChangeText: (text: string) => void
    placeholder: string
    limit: number
    minHeight: number
    maxHeight: number
    showCount?: boolean
    warn?: boolean
}

export default function ContentInput(props: PropsType) {
    //
    const { text, onChangeText, placeholder, limit, showCount, minHeight, maxHeight, warn } = props
    const { styles, COLORS } = useStyles(minHeight, maxHeight)
    const isLimitExceed = text.length >= limit ? true : false

    return (
        <View style={styles.container}>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={COLORS.placeholder}
                value={text}
                onChangeText={onChangeText}
                style={[styles.input, warn ? styles.warn : null, isLimitExceed ? styles.limitExceed : null]}
                multiline
            />
            {showCount ? (
                <Text style={styles.count}>
                    <Text style={isLimitExceed ? styles.limitExceed : null}>{text.length}</Text> / {limit}
                </Text>
            ) : null}
        </View>
    )
}
