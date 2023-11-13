import React, { useState } from 'react'
import { View, ImageBackground, Text, TouchableOpacity } from 'react-native'

import { EyeIcon } from '$exporter/asset'
import { useStyles } from './styleBlurImage'

type PropsType = {
    imageUrl: string
}

export default function Blur({ imageUrl }: PropsType) {
    //
    const { styles } = useStyles()
    const [showNSFW, setShowSNFW] = useState(false)

    return (
        <ImageBackground
            source={{ uri: imageUrl }}
            style={styles.container}
            blurRadius={showNSFW ? 0 : 100}
            //
        >
            <TouchableOpacity onPress={() => setShowSNFW(prev => !prev)} style={styles.button}>
                <EyeIcon hidden={!showNSFW} />
                <Text style={styles.overlayText}>NSFW</Text>
            </TouchableOpacity>
        </ImageBackground>
    )
}
