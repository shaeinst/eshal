import { useCallback, useEffect, useState } from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, FlatList } from 'react-native'
import { NavigationProp, useFocusEffect, useNavigation } from '@react-navigation/native'

import { InputInline } from '$exporter/component'
import { CheckListIcon, PlusIcon, SettingIcon } from '$exporter/asset'
import { FONTS, WHITESPACE, useColors } from '$exporter'

export function Poll() {
    //
    const [pollData, setPollData] = useState([
        { placeholder: 'Option 1', value: '' },
        { placeholder: 'Option 2', value: '' },
    ])
    const [isPollMultiChoice, setIsPollMultiChoice] = useState(false)
    const [pollLength, setPollLength] = useState({ text: '1 day', value: 60 * 60 * 24 })
    const [showPollLenght, setShowPollLength] = useState(false)
    const [showPollSetting, setShowPollSetting] = useState(false)

    const { styles, COLORS } = useStyles()

    const handleAddPoll = () => {
        if (pollData.length >= 4) return
        setPollData(prevData => {
            return [...prevData, { value: '', placeholder: `Option ${prevData.length + 1}` }]
        })
    }
    const handlePollChoice = () => {
        setIsPollMultiChoice(prev => !prev)
    }
    const handlePollLenght = (text: string, value: number) => {
        //
        setPollLength({ text, value })
        setShowPollLength(false)
    }

    return (
        <View style={styles.container}>
            {pollData.map((opt, index) => (
                <View key={opt.placeholder + index} style={styles.pollInput}>
                    <InputInline index={index} setPollData={setPollData} pollData={pollData} />
                </View>
            ))}
            <View style={styles.pollActionContainer}>
                <View style={styles.pollActionSettingContainer}>
                    <TouchableOpacity onPress={handleAddPoll}>
                        <PlusIcon />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setShowPollSetting(prev => !prev)}>
                        <SettingIcon />
                    </TouchableOpacity>
                </View>
                {showPollSetting ? (
                    <>
                        <TouchableOpacity style={styles.pollActionButton} onPress={handlePollChoice}>
                            <Text style={styles.pollText}>multiple choices </Text>
                            <CheckListIcon
                                checked={isPollMultiChoice}
                                stroke={isPollMultiChoice ? COLORS.text : COLORS.placeholder}
                                fill={isPollMultiChoice ? COLORS.error : COLORS.background}
                            />
                        </TouchableOpacity>
                        <View>
                            <TouchableOpacity
                                style={styles.pollActionButton}
                                onPress={() => setShowPollLength(prev => !prev)}>
                                <View style={styles.pollTextContainer}>
                                    <Text style={styles.pollText}>Poll length</Text>
                                    <Text style={styles.pollTextLength}>{pollLength.text}</Text>
                                </View>
                            </TouchableOpacity>
                            {showPollLenght ? (
                                <View style={styles.pollLenghtContainer}>
                                    <TouchableOpacity onPress={() => handlePollLenght('5 mins', 100000)}>
                                        <Text style={styles.pollLenghtText}>5 mins</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => handlePollLenght('30 mins', 100000)}>
                                        <Text style={styles.pollLenghtText}>30 mins</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => handlePollLenght('1 hour', 100000)}>
                                        <Text style={styles.pollLenghtText}>1 hour</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => handlePollLenght('6 hours', 100000)}>
                                        <Text style={styles.pollLenghtText}>6 hours</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => handlePollLenght('1 day', 100000)}>
                                        <Text style={styles.pollLenghtText}>1 day</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => handlePollLenght('3 days', 100000)}>
                                        <Text style={styles.pollLenghtText}>3 days</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => handlePollLenght('7 days', 100000)}>
                                        <Text style={styles.pollLenghtText}>7 days</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => handlePollLenght('14 days', 100000)}>
                                        <Text style={styles.pollLenghtText}>14 day</Text>
                                    </TouchableOpacity>
                                </View>
                            ) : null}
                        </View>
                    </>
                ) : null}
            </View>
        </View>
    )
}

const useStyles = () => {
    //
    const { COLORS } = useColors()

    const styles = StyleSheet.create({
        container: {},
        pollInput: {
            height: 46,
        },
        pollActionContainer: {
            gap: 8,
            alignSelf: 'flex-end',
            marginTop: 10,
        },
        pollActionSettingContainer: {
            gap: 6,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
        },
        pollActionButton: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
        },
        pollTextContainer: {
            flexDirection: 'row',
            gap: 4,
            alignItems: 'center',
        },
        pollText: {
            ...FONTS.Inter['Md-16'],
            color: COLORS.placeholder,
        },
        pollTextLength: {
            ...FONTS.Inter['Md-16'],
            borderBottomWidth: 2,
            color: COLORS.placeholder,
            borderColor: COLORS.error,
        },
        pollLenghtContainer: {
            backgroundColor: COLORS.text,
            borderRadius: WHITESPACE.borderRadiusTextInput,
            padding: 10,
        },
        pollLenghtText: {
            ...FONTS.Inter['Md-16'],
            color: COLORS.background,
        },
        actionsContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            gap: 8,
            padding: 6,
        },
        sendButton: {
            marginLeft: 'auto',
            marginRight: 8,
        },
        active: {
            backgroundColor: COLORS.text,
            padding: 4,
            borderRadius: 50,
        },
    })

    return { styles, COLORS }
}
