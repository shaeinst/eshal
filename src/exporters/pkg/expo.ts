/*
This exporter is user to export the expo packages.
Meaning instead of importing directly from the package, we import from this file.

example:
instead of:
    import { useQuery } from 'react-query'
we use:
    import { useQuery } from '$expo'
**/

export { useFocusEffect, Stack, Redirect, Tabs, useRouter } from 'expo-router'

export { StatusBar, StatusBarStyle } from 'expo-status-bar'

export * as SplashScreen from 'expo-splash-screen'
