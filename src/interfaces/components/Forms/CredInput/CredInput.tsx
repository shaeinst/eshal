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
    const { header, eg, state } = props
    const { styles, COLORS } = useStyles()

    return (
        <View style={styles.container}>
            <Text style={styles.header}>{header}</Text>
            <View style={styles.inputContainer}>
                {state.input.length < 1 && <Text style={styles.placeholderHeader}>Eg: </Text>}
                <TextInput
                    style={styles.placeholder}
                    defaultValue={state.input}
                    onChangeText={text => state.setInput(text)}
                    placeholder={eg}
                    placeholderTextColor={COLORS.placeholder}
                />
            </View>
        </View>
    )
}
