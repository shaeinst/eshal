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
            icon: React.JSX.Element
            altIcon?: React.JSX.Element
        }
    }
}

export function useNavbarItems() {
    //
    const {COLORS} = useColors()

    const navbarItems: NavbarItemsType = {
        row1: {
            home: { title: 'Home', icon: <HomeIcon /> },
            search: { title: 'Search', icon: <SearchIcon /> },
            alert: { title: 'Alert', icon: <AlertIcon /> },
            more: { title: 'More', icon: <MoreDotIcon />, altIcon: <CloseIcon /> },
        },
        row2: {
            post: { title: 'Add Post', icon: <AddPostIcon /> },
            logout: { title: 'Logout', icon: <LogoutIcon /> },
            setting: { title: 'Setting', icon: <SettingIcon /> },
            profile: { title: 'Profile', icon: <ProfileIcon /> },
        },
    }

    return { navbarItems }
}
