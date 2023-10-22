import React from 'react'
import {
    AddPostIcon,
    AlertIcon,
    CloseIcon,
    HomeIcon,
    LogoutIcon,
    MoreDotIcon,
    ProfileIcon,
    SearchIcon,
    SettingIcon,
} from '$exporter/asset'
import { useColors } from '$exporter'

type NavbarItemsType = {
    [key: string]: {
        [key: string]: {
            title: string
            icon: string | React.JSX.Element
        }
    }
}

type IconType = {
    [key: string]: (props: { openMore?: boolean; active: string }) => React.JSX.Element
}

export function useNavbarItems() {
    //
    const { COLORS } = useColors()

    const icons: IconType = {
        home: ({ active }) => <HomeIcon stroke={active === 'Home' ? 'red' : undefined} />,
        search: ({ active }) => <SearchIcon stroke={active === 'Search' ? 'red' : undefined} />,
        alert: ({ active }) => <AlertIcon stroke={active === 'Alert' ? 'red' : undefined} />,
        post: ({ active }) => <AddPostIcon stroke={active === 'Add Post' ? 'red' : undefined} />,
        logout: ({ active }) => <LogoutIcon fill={active === 'Logout' ? 'red' : undefined} />,
        setting: ({ active }) => <SettingIcon fill={active === 'Setting' ? 'red' : undefined} />,
        profile: ({ active }) => <ProfileIcon fill={active === 'Profile' ? 'red' : undefined} />,
        more: ({ openMore }) => {
            if (openMore) return <CloseIcon stroke="red" />
            return <MoreDotIcon />
        },
    }

    const navbarItems: NavbarItemsType = {
        row1: {
            home: { title: 'Home', icon: 'home' },
            search: { title: 'Search', icon: 'search' },
            alert: { title: 'Alert', icon: 'alert' },
            more: { title: 'More', icon: 'more' },
        },
        row2: {
            post: { title: 'Add Post', icon: 'post' },
            logout: { title: 'Logout', icon: 'logout' },
            setting: { title: 'Setting', icon: 'setting' },
            profile: { title: 'Profile', icon: 'profile' },
        },
    }

    return { navbarItems, icons }
}
