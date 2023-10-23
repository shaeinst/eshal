import { NavigationProp, useNavigation } from '@react-navigation/native'

export default function useHandleNavbar() {
    //
    const { navigate } = useNavigation<NavigationProp<any>>()

    const handleClick = (
        type: string,
        setOpenMore: React.Dispatch<React.SetStateAction<boolean>>,
        setActive: React.Dispatch<React.SetStateAction<string>>,
        path?: string,
    ) => {
        //
        console.log('clicked: ', type)
        if (type === 'More') {
            setOpenMore(prev => !prev)
        } else {
            if (path) navigate(path) // navigate to to screen
            setOpenMore(false)
            setActive(type)
        }
    }

    return { handleClick }
}
