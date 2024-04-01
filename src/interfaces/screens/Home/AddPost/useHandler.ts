import { useZustandStore } from '$exporter'
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
    const [actives, setActives] = useState<ActivesType>({
        warn: false,
        content: true,
        media: false,
        poll: false,
        emoji: false,
        language: false,
        send: false,
    })

    const { createPost, setCreatePost } = useZustandStore()

    const removeMedia = (path: string) => {
        ImagePicker.cleanSingle(path)
            .then(() => {
                setCreatePost({
                    media_ids: createPost.media_ids?.filter(item => item !== path),
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    const options = (type: keyof ActivesType) => {
        if (type === 'media') {
            ImagePicker.openPicker({ mediaType: 'any', multiple: true, cropping: false })
                .then(res => {
                    const toUploadMedia: string[] = []
                    res.map(item => {
                        toUploadMedia.push(item.path)
                    })
                    setCreatePost({
                        media_ids: createPost.media_ids ? [...toUploadMedia, ...createPost.media_ids] : toUploadMedia,
                    })
                })
                .catch(error => {
                    console.log(error)
                })
                .finally(() => {
                    const hasMedia = createPost.media_ids?.length && createPost.media_ids.length > 0 ? true : false
                    if (hasMedia) {
                        setActives(prev => ({ ...prev, media: true, poll: false }))
                    } else {
                        setActives(prev => ({ ...prev, media: false }))
                    }
                    console.log('Clicked: media')

                    console.log(createPost.media_ids)
                })
        }
        if (type === 'poll') {
            setActives(prev => ({ ...prev, media: false, poll: true }))
            console.log('Clicked: poll')
        }
    }

    return { actives, setActives, removeMedia, options }
}
