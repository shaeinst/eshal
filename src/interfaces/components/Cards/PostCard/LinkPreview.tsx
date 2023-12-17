import React, { useCallback, useMemo } from 'react'
import { Linking, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import FastImage from 'react-native-fast-image'

import { MPreviewCardType } from '$exporter/type'
import { useStyles } from './stylePostCard'

export default React.memo(function LinkPreview({ card }: { card: MPreviewCardType }) {
    //
    const { styles } = useStyles()

    const handleClick = useCallback(() => {
        Linking.openURL(card.url)
    }, [])

    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.cardContainer} onPress={handleClick}>
            <Text numberOfLines={2} ellipsizeMode="tail" style={styles.cardDescription}>
                {card.description}
            </Text>
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.cardLink}>
                {card.url}
            </Text>
            {card.image ? (
                <TouchableWithoutFeedback>
                    <FastImage style={styles.postPreview} source={{ uri: card.image }} />
                </TouchableWithoutFeedback>
            ) : null}
        </TouchableOpacity>
    )
})
