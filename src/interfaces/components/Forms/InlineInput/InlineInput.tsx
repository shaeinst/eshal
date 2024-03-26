import { useState } from 'react'
import { View, Text, TextInput } from 'react-native'

import { CloseIcon, DragDotIcon } from '$exporter/asset'
import { useStyles } from './styleInputInline'
import { TouchableOpacity } from 'react-native-gesture-handler'

type PropsType = {
    placeholder: string
}

export default function InlineInput(props: PropsType) {
    //
    const { placeholder } = props
    const [inputText, setInputText] = useState('')

    const { styles, COLORS } = useStyles()

    const handleChangeText = (eventText: string) => {
        setInputText(eventText)
    }

    return (
        <View style={styles.container}>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={COLORS.placeholder}
                style={styles.input}
                value={inputText}
                onChangeText={handleChangeText}
                //
            />
            <TouchableOpacity>
                <CloseIcon width={12} height={12} />
            </TouchableOpacity>
            <DragDotIcon />
        </View>
    )
}
