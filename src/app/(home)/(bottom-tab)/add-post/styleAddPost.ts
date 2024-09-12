import { Dimensions, StyleSheet } from 'react-native'

import { FONTS, useColors, WHITESPACE } from '$exporter'

const { height } = Dimensions.get('window')


export function useStyles() {
    //
    const { COLORS } = useColors()

    const styles = StyleSheet.create({
        container: {
            // backgroundColor: 'skyblue',
            flex: 1,
        },
        back: {
            // backgroundColor: 'skyblue',
            padding: 5,
            alignSelf: 'flex-start',
        },
        scrollView: {
            // backgroundColor: 'yellow',
            gap: 20,
        },
        mediaContainer: {
            alignSelf: 'flex-start',
        },
        mediaSeparator: {
            width: 10,
        },
        pollContainer: {},
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
        indent: {
            height: height / 2,
        },
    })

    return { styles, COLORS }
}
