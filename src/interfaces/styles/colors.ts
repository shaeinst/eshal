import { useColorScheme } from 'react-native'

const colors = {
    primary: { light: '#1DA1F2', dark: '#1DA1F2' },
    background: { light: '#F5F8FA', dark: '#000000' },
    text: { light: '#10100F', dark: '#F9F2F2' },
    placeholder: { light: '#657786', dark: '#657786' },
    border: { light: '#10100F', dark: '#657786' },

    // theme mode independent colors
    common: {
        nav: '#161819',
    },
}

interface ColorsInterface {
    primary: string
    background: string
    text: string
    placeholder: string
    border: string,
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
                  placeholder: colors.placeholder.dark,
                  border: colors.border.dark,
              }
            : {
                  ...colors.common,
                  primary: colors.primary.light,
                  background: colors.background.light,
                  text: colors.text.light,
                  placeholder: colors.placeholder.light,
                  border: colors.border.light,
              }

    return { COLORS, themeMode }
}
export default useColors
