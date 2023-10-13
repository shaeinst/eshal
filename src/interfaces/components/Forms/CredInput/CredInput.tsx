import { View, Text, TextInput } from 'react-native'

import { useStyles } from './styleCredInput'

type PropsType = {
    header: string
    eg: string
    state: {
        input: string
        setInput: React.Dispatch<React.SetStateAction<string>>
    }
}

export default function CredInput(props: PropsType) {
    //
    const { styles, COLORS } = useStyles()

    return (
        <View style={styles.container}>
            <Text style={styles.header}>{props.header}</Text>
            <View style={styles.inputContainer}>
                {props.state.input.length < 1 && (
                    <Text style={styles.placeholderHeader}>Eg: </Text>
                )}
                <TextInput
                    style={styles.placeholder}
                    defaultValue={props.state.input}
                    onChangeText={text => props.state.setInput(text)}
                    placeholder={props.eg}
                    placeholderTextColor={COLORS.placeholder}
                />
            </View>
        </View>
    )
}
