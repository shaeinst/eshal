import { FONTS, useColors } from '$exporter'
import React from 'react'
import { StyleSheet, View } from 'react-native'

import HTMLView from 'react-native-htmlview'

type PropsType = {
    toggle: boolean
    content: string
}

function PostDescription({content, toggle}:PropsType) {
    //
    const {styles} = useStyles()
    return (
        <View style={[toggle ? styles.container : null]}>
            <HTMLView value={content} stylesheet={styles} />
        </View>
    )
}


const useStyles = () => {

    const {COLORS} = useColors()
    const tagSyles = {
        fontFamily: FONTS.Inter.fontFamily,
        color: COLORS.text,
    }

const styles = StyleSheet.create({
        /* ------------------------------------ */
        // HTMLView
        /* ------------------------------------ */
        strong: tagSyles,
        span: tagSyles,
        p: tagSyles,
        b: tagSyles,
        em: tagSyles,
        i: tagSyles,
        h1: tagSyles,
        h2: tagSyles,
        h3: tagSyles,
        h4: tagSyles,
        h5: tagSyles,
        a: {
            fontFamily: FONTS.Inter.fontFamily,
            color: COLORS.primary,
            fontStyle: 'italic',
            textDecorationLine: 'underline',
        },
        /* ------------------------------------ */
    container: {
            maxHeight: 220,
            overflow: 'hidden',
    }
})

    return {styles}
}

export default React.memo(PostDescription)
