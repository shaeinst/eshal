/*
This exporter is user to export the 3rd party packages.
Meaning instead of importing directly from the package, we import from this file.

example:
instead of:
    import { useQuery } from 'react-query'
we use:
    import { useQuery } from '$3rd'
**/

export { GestureHandlerRootView } from 'react-native-gesture-handler'
export { SafeAreaView } from 'react-native-safe-area-context'
export { QueryClient, QueryClientProvider } from '@tanstack/react-query'
export { FlashList } from '@shopify/flash-list'
export { BottomTabBarProps } from '@react-navigation/bottom-tabs'
export { default as Animated, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
