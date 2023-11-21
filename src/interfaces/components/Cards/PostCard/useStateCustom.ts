import { useCallback, useState } from 'react'

type PropsType = {
    contentLen: boolean
    preview: {
        url?: string
        description?: string
        remoteUrl?: string
    }
}

export function useStateCustom(props: PropsType) {
    //
    const { contentLen, preview } = props

    const [lazyLoad, setLazyLoad] = useState(false)
    const [isAlt, setIsAlt] = useState(false)
    const [isLongContent, setIsLongContent] = useState({ isLong: contentLen, toggle: contentLen })
    const [activePreview, setActivePreview] = useState({ ...preview })

    const handleContent = useCallback(() => {
        setIsLongContent(prev => ({ ...prev, toggle: !prev.toggle }))
    }, [])
    const handleAlt = useCallback(() => {
        setIsAlt(prev => !prev)
    }, [])
    const handleLazyLoad = useCallback(() => {
        setLazyLoad(true)
    }, [])

    return {
        lazyLoad,
        isAlt,
        isLongContent,
        activePreview,
        handleContent,
        handleAlt,
        handleLazyLoad,
    }
}
