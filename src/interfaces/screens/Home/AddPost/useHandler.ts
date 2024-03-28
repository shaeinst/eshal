import { useState } from 'react'
import ImagePicker from 'react-native-image-crop-picker'

type ActivesType = {
    warn: boolean
    content: boolean
    media: boolean
    poll: boolean
    emoji: boolean
    language: boolean
    send: boolean
}

export function useHandler() {
    //
    const [media, setMedia] = useState<string[]>([])
    const [actives, setActives] = useState<ActivesType>({
        warn: false,
        content: true,
        media: false,
        poll: false,
        emoji: false,
        language: false,
        send: false,
    })

    const addMedia = () => {
        ImagePicker.openPicker({ mediaType: 'any', multiple: true, cropping: false })
            .then(res => {
                res.map(item => {
                    setMedia(prev => [item.path, ...prev])
                })
            })
            .catch(error => {
                console.log(error)
            })
    }
    const removeMedia = (path: string) => {
        ImagePicker.cleanSingle(path)
            .then(() => {
                setMedia(prev => prev.filter(item => item !== path))
            })
            .catch(error => {
                console.log(error)
            })
    }

    const options = (type: keyof ActivesType) => {
        if (type === 'media') {
            setActives(prev => ({ ...prev, media: true }))
            addMedia()
            if (media.length > 0) {
                setActives(prev => ({ ...prev, media: true, poll: false }))
            } else {
                setActives(prev => ({ ...prev, media: false }))
            }
            console.log(media)
            console.log('Clicked: media')
        }
        if (type === 'poll') {
            setActives(prev => ({ ...prev, media: false, poll: true }))
            console.log('Clicked: poll')
        }
    }

    return { actives, setActives, media, addMedia, removeMedia, options }
}
