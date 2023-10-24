import { NavigationProp, useFocusEffect, useNavigation } from '@react-navigation/native'
import { useCallback, useRef, useState } from 'react'
import { BackHandler } from 'react-native'

type HandleClickType = {
    title: string
    path?: string
}

export default function useHandleNavbar() {
    //
    const [active, setActive] = useState('Home')
    const [openMore, setOpenMore] = useState(false)
    const lastBackPressed = useRef(0)
    const { navigate, getState } = useNavigation<NavigationProp<any>>()

    useFocusEffect(
        useCallback(() => {
            const onBackPress = () => {
                // Check the current route name
                const currentRouteName = getState().routes.slice(-1)[0].name

                if (currentRouteName !== 'timeline') {
                    navigate('timeline')
                    setActive('Home')
                } else {
                    // Handle back button presses on the home page
                    if (lastBackPressed.current && lastBackPressed.current + 1000 >= Date.now()) {
                        BackHandler.exitApp()
                    } else {
                        lastBackPressed.current = Date.now()
                    }
                }
                return true
            }

            const backHandler = BackHandler.addEventListener('hardwareBackPress', onBackPress)

            return () => backHandler.remove()
        }, [navigate]),
    )

    const handleClick = ({ title, path }: HandleClickType) => {
        //
        console.log('clicked: ', title)
        if (title === 'More') {
            setOpenMore(prev => !prev)
        } else {
            if (path) navigate(path) // navigate to to screen
            setOpenMore(false)
            setActive(title)
        }
    }

    return { handleClick, active, openMore }
}
