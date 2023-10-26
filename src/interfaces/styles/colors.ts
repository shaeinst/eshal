import { useColorScheme } from 'react-native'

const colors = {
    primary: { light: '#1DA1F2', dark: '#1DA1F2' },
    background: { light: '#F5F8FA', dark: '#000000' },
    text: { light: '#10100F', dark: '#F9F2F2' },
    strongText: { light: '#000000', dark: '#FFFFFF' },
    weakText: { light: '#657786', dark: '#657786' },
    placeholder: { light: '#657786', dark: '#657786' },
    border: { light: '#10100F', dark: '#657786' },
    error: { light: '#ff6666', dark: '#ff6666' },
    logo: { light: '#10100F', dark: '#F9F2F2' },
    navbar: { light: '#657786', dark: '#657786' },
    active: { light: '#000000', dark: '#ffffff' },
    success: { light: '#038B8B', dark: '#038B8B' },

    // theme mode independent colors
    common: {
        nav: '#161819',
    },
}

interface ColorsInterface {
    primary: string
    background: string
    text: string
    strongText: string
    placeholder: string
    border: string
    error: string
    logo: string
    navbar: string
    active: string
    success: string
    weakText: string
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
                  strongText: colors.strongText.dark,
                  weakText: colors.weakText.dark,
                  placeholder: colors.placeholder.dark,
                  border: colors.border.dark,
                  error: colors.error.dark,
                  logo: colors.logo.dark,
                  navbar: colors.navbar.dark,
                  active: colors.active.dark,
                  success: colors.success.dark,
              }
            : {
                  ...colors.common,
                  primary: colors.primary.light,
                  background: colors.background.light,
                  text: colors.text.light,
                  strongText: colors.strongText.light,
                  weakText: colors.weakText.light,
                  placeholder: colors.placeholder.light,
                  border: colors.border.light,
                  error: colors.error.light,
                  logo: colors.logo.light,
                  navbar: colors.navbar.light,
                  active: colors.active.light,
                  success: colors.success.light,
              }

    return { COLORS, themeMode }
}
export default useColors
