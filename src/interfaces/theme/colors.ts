import { useColorScheme } from 'react-native'

const colors = {
    primary: { light: '#1DA1F2', dark: '#1DA1F2' },
    background: { light: '#F5F8FA', dark: '#000000' },
    text: { light: '#161819', dark: '#F9F2F2' },

    // theme mode independent colors
    common: {
        nav: '#161819',
    },
}

interface ColorsInterface {
    primary: string
    background: string
    text: string
}

function useColors() {
    //

    const themeMode = useColorScheme()

    const COLORS: ColorsInterface & typeof colors.common =
        themeMode === 'dark'
            ? {
                  ...colors.common,
                  primary: colors.primary.dark,
                  background: colors.background.dark,
                  text: colors.text.dark,
              }
            : {
                  ...colors.common,
                  primary: colors.primary.light,
                  background: colors.background.light,
                  text: colors.text.light,
              }

    return { COLORS, themeMode }
}
export default useColors
