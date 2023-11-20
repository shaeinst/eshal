import { FONTS, useColors } from '$exporter'
import { StyleSheet } from 'react-native'

export function useStyles() {
    //
    const { COLORS } = useColors()

    const styles = StyleSheet.create({
        blank: {
            flex: 1,
        },
        modalContainer: {
            flex: 1,
        },
        modalView: {
            height: "40%",
            width: "100%",
            borderColor: COLORS.text,
        },
        image: {
            flex: 1,
        },
        button: {
            borderRadius: 20,
            padding: 10,
        },
        buttonOpen: {
            backgroundColor: '#F194FF',
        },
        buttonClose: {
            backgroundColor: '#2196F3',
        },
        textStyle: {
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center',
        },
        modalText: {
            marginBottom: 15,
            textAlign: 'center',
        },
    })

    return {
        styles,
    }
}
