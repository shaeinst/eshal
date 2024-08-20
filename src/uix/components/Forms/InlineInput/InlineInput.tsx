import { useState } from 'react'
import { View, Text, TextInput } from 'react-native'

import { CloseIcon, DragDotIcon } from '$exporter/asset'
import { useStyles } from './styleInputInline'
import { TouchableOpacity } from 'react-native-gesture-handler'

type PropsType = {
    pollData: { placeholder: string; value: string }[]
    setPollData: React.Dispatch<React.SetStateAction<{ placeholder: string; value: string }[]>>
    index: number
}

export default function InlineInput(props: PropsType) {
    //
    const { pollData, setPollData, index } = props

    const { styles, COLORS } = useStyles()

    const handleChangeText = (eventText: string) => {
        setPollData(prevData => {
            const updatedPollData = [...prevData]
            updatedPollData[index] = { ...updatedPollData[index], value: eventText }
            return updatedPollData
        })
    }

    const handleRemove = () => {
        console.log('handled remove: ', pollData[index].placeholder)
        if (pollData.length <= 2) return
        setPollData(prevData => {
            const updatedPollData = prevData.filter((_, i) => i !== index)
            return updatedPollData
        })
    }

    return (
        <View style={styles.container}>
            <TextInput
                placeholder={pollData[index].placeholder}
                placeholderTextColor={COLORS.placeholder}
                style={styles.input}
                value={pollData[index].value}
                onChangeText={handleChangeText}
                //
            />
            <TouchableOpacity onPress={handleRemove} style={styles.close}>
                <CloseIcon width={16} height={16} />
            </TouchableOpacity>
            {/* <DragDotIcon /> */}
        </View>
    )
}
