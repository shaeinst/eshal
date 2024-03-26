import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native'

import { useStyles } from './styleTextInput'

type PropsType = {
    text: string
    setText: React.Dispatch<React.SetStateAction<string>>
    placeholder: string
    limit: number
    minHeight: number
    maxHeight: number
    showCount?: boolean
    warn?: boolean
}

export default function ContentInput(props: PropsType) {
    //
    const { text, setText, placeholder, limit, showCount, minHeight, maxHeight, warn } = props
    const { styles, COLORS } = useStyles(minHeight, maxHeight)

    const [textLength, setTextLength] = useState(0)
    const [isLimitExceed, setIsLimitExceed] = useState(false)

    const handleOnChangeText = (inputText: string) => {
        //
        const inputTextLength = inputText.length

        if (inputTextLength > limit) setIsLimitExceed(true)
        else {
            if (isLimitExceed) setIsLimitExceed(false)
        }

        setText(inputText)
        setTextLength(inputTextLength)
    }

    return (
        <View style={styles.container}>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={COLORS.placeholder}
                value={text}
                onChangeText={handleOnChangeText}
                style={[styles.input, warn ? styles.warn : null, isLimitExceed ? styles.limitExceed : null]}
                multiline
            />
            {showCount ? (
                <Text style={styles.count}>
                    <Text style={isLimitExceed ? styles.limitExceed : null}>{textLength}</Text> / {limit}
                </Text>
            ) : null}
        </View>
    )
}
