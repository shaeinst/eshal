import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native'

import { useStyles } from './styleTextInput'

type PropsType = {
    header: string
    limit: number
    showCount?: boolean
    border?: 'light' | 'medium' | 'heavy'
}

export default function ContentInput(props: PropsType) {
    //
    const { header, limit, showCount, border } = props
    const { styles } = useStyles()

    const [text, setText] = useState('')
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
            <View style={styles.headerContainer}>
                <Text style={styles.header}>{header}</Text>
                {showCount ? (
                    <Text style={styles.header}>
                        <Text style={isLimitExceed ? styles.limitExceed : null}>{textLength}</Text> / {limit}
                    </Text>
                ) : null}
            </View>
            <TextInput
                value={text}
                onChangeText={handleOnChangeText}
                style={[styles.input, isLimitExceed ? styles.limitExceedInput : null]}
                multiline
            />
        </View>
    )
}
