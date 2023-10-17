import React from 'react'
import {
    AddPostIcon,
    AlertIcon,
    HomeIcon,
    LogoutIcon,
    MoreDotIcon,
    ProfileIcon,
    SearchIcon,
    SettingIcon,
} from '$exporter/asset'

type NavbarItemsType = {
    [key: string]: {
        [key: string]: {
            title: string
            icon: React.JSX.Element
        }
    }
}

export const navbarItems: NavbarItemsType = {
    row1: {
        home: { title: 'Home', icon: <HomeIcon /> },
        search: { title: 'Search', icon: <SearchIcon /> },
        alert: { title: 'Alert', icon: <AlertIcon /> },
        more: { title: 'More', icon: <MoreDotIcon /> },
    },
    row2: {
        post: { title: 'Add Post', icon: <AddPostIcon /> },
        logout: { title: 'Logout', icon: <LogoutIcon /> },
        setting: { title: 'Setting', icon: <SettingIcon /> },
        profile: { title: 'Profile', icon: <ProfileIcon /> },
    },
}
