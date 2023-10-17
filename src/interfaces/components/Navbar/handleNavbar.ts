export default function useHandleNavbar() {
    const handleClick = (type: string) => {
        //
        console.log('clicked: ', type)
    }

    return { handleClick }
}
