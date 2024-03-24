import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native'

import { useStyles } from './styleTextInput'

type PropsType = {
    header: string
    limit: number
    numberOfLines?: number
    showCount?: boolean
    border?: 'light' | 'medium' | 'heavy'
}

export default function ContentInput(props: PropsType) {
    //
    const { header, numberOfLines, limit, showCount, border } = props
    const { styles } = useStyles()

    const [text, setText] = useState('')
    const [textLength, setTextLength] = useState(0)

    const handleOnChangeText = (inputText: string) => {
        //
        const inputTextLength = inputText.length

        if (inputTextLength > limit) {
            const stripedText = inputText.substring(0, limit)
            setText(stripedText)
            setTextLength(stripedText.length)
            return
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
                        {textLength} / {limit}
                    </Text>
                ) : null}
            </View>
            <TextInput
                value={text}
                onChangeText={handleOnChangeText}
                style={styles.input}
                multiline
                numberOfLines={numberOfLines}
            />
        </View>
    )
}
