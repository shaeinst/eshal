export default function useHandleNavbar() {
    //
    const handleClick = (
        type: string,
        setOpenMore: React.Dispatch<React.SetStateAction<boolean>>,
        setActive: React.Dispatch<React.SetStateAction<string>>,
    ) => {
        //
        console.log('clicked: ', type)
        if (type === 'More') {
            setOpenMore(prev => !prev)
        } else {
            setOpenMore(false)
            setActive(type)
        }
    }

    return { handleClick }
}
