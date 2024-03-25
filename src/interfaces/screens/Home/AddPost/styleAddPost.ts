import { Dimensions, StyleSheet } from 'react-native'

import { FONTS, useColors, WHITESPACE } from '$exporter'

const { height } = Dimensions.get('screen')

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
        scrollView: {
            flex: 1,
            // backgroundColor: 'red',
        },
        container: {
            // backgroundColor: 'green',
            // alignItems: 'center',
            gap: 20,
        },
        warnText: {
            width: '100%',
            height: 100,
        },
        content: {
            width: '100%',
            height: 200,
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
    })

    return { styles, COLORS }
}
