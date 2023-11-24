import React, { useState } from 'react'
import { View, ImageBackground, Text, TouchableOpacity } from 'react-native'

import { EyeIcon } from '$exporter/asset'
import { useStyles } from './styleBlurImage'

type PropsType = {
    imageUrl: string
    nsfw:boolean
}

export default function Blur({ imageUrl, nsfw }: PropsType) {
    //
    const { styles } = useStyles()
    const [showNSFW, setShowSNFW] = useState(nsfw)

    return (
        <ImageBackground
            source={{ uri: imageUrl }}
            style={styles.container}
            blurRadius={showNSFW ? 100 : 0}
            //
        >
            <TouchableOpacity onPress={() => setShowSNFW(prev => !prev)} style={styles.button}>
                <EyeIcon hidden={!showNSFW} />
                <Text style={styles.overlayText}>NSFW</Text>
            </TouchableOpacity>
        </ImageBackground>
    )
}
