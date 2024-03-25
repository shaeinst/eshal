import { Dimensions, StyleSheet } from 'react-native'

import { FONTS, useColors, WHITESPACE } from '$exporter'

const { height } = Dimensions.get('window')

export const useMediaStyles = (mediaHeight: number, mediaWidth: number) => {
    //
    const { COLORS } = useColors()

    const styles = StyleSheet.create({
        container: {
            width: mediaWidth,
            height: mediaHeight,
            backgroundColor: 'pink',
            borderRadius: 10,
            overflow: 'hidden',
        },
        media: {
            flex: 1,
        },
        action: {
            flexDirection: 'row',
            backgroundColor: COLORS.text,
            justifyContent: 'center',
            position: 'absolute',
            bottom: 10,
            alignSelf: 'center',
            gap: 10,
            borderRadius: WHITESPACE.borderRadius,
            paddingVertical: 2,
            paddingHorizontal: 6,
        },
    })

    return { styles, COLORS }
}

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
        warnText: {
            width: '100%',
            height: 100,
        },
        content: {
            width: '100%',
            height: height/3,
        },
        mediaSeparator: {
            width: 10,
        },
        pollContainer: {
            gap: 6,
        },
        pollInput: {
            height: 46,
        },
        pollActionContainer: {
            // backgroundColor: 'red',
            gap: 10,
            flexDirection: 'row',
            alignItems: 'center',
        },
        actionsContainer: {
            backgroundColor: COLORS.border,
            // borderColor: COLORS.border,
            borderRadius: WHITESPACE.borderRadiusMedia,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 16,
            padding: 6,
            marginBottom: 1,
        },
        sendButton: {
            marginLeft: 'auto',
            marginRight: 'auto',
        },
        active: {
            backgroundColor: COLORS.background,
            padding: 4,
            borderRadius: 50,
        },
        indent: {
            height: height / 2,
        },
    })

    return { styles, COLORS }
}
