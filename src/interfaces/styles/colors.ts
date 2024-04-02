import { useMemo } from 'react'
import { useColorScheme } from 'react-native'

export type ColorType = {
    primary: string
    background: string
    text: string
    strongText: string
    placeholder: string
    border: string
    error: string
    logo: string
    navbar: string
    success: string
    weakText: string
    seperator: string
    actionIcon: string
    skeleton: string
    cardBorder: string
    link: string
    tabShadow: string
    warn: string
    disabled: string
    black: string
    white: string
}

const colors = {
    primary: { light: '#1DA1F2', dark: '#1DA1F2' },
    background: { light: '#FFFFFF', dark: '#000000' },
    text: { light: '#10100F', dark: '#E9E2E2' },
    strongText: { light: '#000000', dark: '#FFFFFF' },
    weakText: { light: '#657786', dark: '#657786' },
    placeholder: { light: '#657786', dark: '#657786' },
    border: { light: '#10100F', dark: '#657786' },
    error: { light: '#ff6666', dark: '#ff6666' },
    logo: { light: '#10100F', dark: '#F9F2F2' },
    navbar: { light: '#657786', dark: '#657786' },
    seperator: { light: '#dddddd', dark: '#222222' },
    success: { light: '#038B8B', dark: '#038B8B' },
    actionIcon: { light: '#777777', dark: '#989898' },
    skeleton: { light: '#DDDDDD', dark: '#444444' },
    active: { light: '#000000', dark: '#ffffff' },
    cardBorder: { light: '#000000', dark: '#ffffff' },
    link: { light: '#0095F6', dark: '#0095F6' },
    tabShadow: { light: '#000000', dark: '#ffffff' },
    warn: { light: '#c8aa51', dark: '#c8aa51' },
    disabled: { light: '#e4e4e4', dark: '#444444' },
    black: { light: '#000000', dark: '#000000' },
    white: { light: '#ffffff', dark: '#ffffff' },

    // theme mode independent colors
    common: {
        nav: '#161819',
    },
}

export default function useColors() {
    //
    const themeMode = useColorScheme()

    const COLORS: ColorType & typeof colors.common =
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
                  success: colors.success.dark,
                  seperator: colors.seperator.dark,
                  actionIcon: colors.actionIcon.dark,
                  skeleton: colors.skeleton.dark,
                  cardBorder: colors.cardBorder.dark,
                  link: colors.link.dark,
                  tabShadow: colors.tabShadow.dark,
                  warn: colors.warn.dark,
                  disabled: colors.disabled.dark,
                  black: colors.black.dark,
                  white: colors.white.dark,
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
                  success: colors.success.light,
                  seperator: colors.seperator.light,
                  actionIcon: colors.actionIcon.light,
                  skeleton: colors.skeleton.light,
                  cardBorder: colors.cardBorder.light,
                  link: colors.link.light,
                  tabShadow: colors.tabShadow.light,
                  warn: colors.warn.light,
                  disabled: colors.disabled.light,
                  black: colors.black.light,
                  white: colors.white.light,
              }

    return useMemo(() => ({ COLORS, themeMode }), [themeMode])
}
