import { useState } from 'react'
import { Dimensions } from 'react-native'

import { InputText } from '$exporter/component'

const { height } = Dimensions.get('window')

export function ContentText() {
    //
    const [contentText, setContentText] = useState('')

    return (
        <InputText
            text={contentText}
            setText={setContentText}
            minHeight={height / 3}
            maxHeight={height / 2}
            placeholder="Type or paste what’s on your mind"
            limit={500}
            showCount
        />
    )
}

export function WarnText() {
    //
    const [warnText, setWarnText] = useState('')

    return (
        <InputText
            text={warnText}
            setText={setWarnText}
            minHeight={50}
            maxHeight={120}
            placeholder="Content Warning"
            limit={500}
            warn
        />
    )
}
