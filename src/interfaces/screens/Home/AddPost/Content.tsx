import { Dimensions } from 'react-native'

import { InputText } from '$exporter/component'
import { MStatusCreateType } from '$exporter/type'

const { height } = Dimensions.get('window')

type PropsType = {
    inputType: 'content' | 'warn'
    limit?: number
    createPost: MStatusCreateType
    setCreatePost: (prop: MStatusCreateType) => void
}

export function InputTextField({ inputType, limit, createPost, setCreatePost }: PropsType) {
    //

    const text = inputType === 'content' ? createPost.status || '' : createPost.spoiler_text || ''
    const placeholder = inputType === 'content' ? 'Type or paste what’s on your mind' : ' Content Warning'
    const minHeight = inputType === 'content' ? height / 3 : 50
    const maxHeight = inputType === 'content' ? height / 2 : 120
    const lenghtLimit = limit ? limit : 500

    const handleTextChange = (text: string) => {
        if (inputType === 'content') {
            setCreatePost({ status: text })
        } else {
            setCreatePost({ spoiler_text: text })
        }
    }

    return (
        <InputText
            text={text}
            onChangeText={handleTextChange}
            minHeight={minHeight}
            maxHeight={maxHeight}
            placeholder={placeholder}
            limit={lenghtLimit}
            showCount={inputType === 'content' ? true : false}
            warn={inputType === 'warn' ? true : false}
        />
    )
}
