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
import { ROUTERS } from '$exporter/constant'

type NavbarItemsType = {
    [key: string]: {
        [key: string]: {
            title: string
            icon: string | React.JSX.Element
            path?: string
        }
    }
}

type IconType = {
    [key: string]: (props: { openMore?: boolean; active: string }) => React.JSX.Element
}

export function useNavbarItems() {
    //
    const {
        COLORS: { active: activeC },
    } = useColors()
    const { HOME } = ROUTERS

    const icons: IconType = {
        home: ({ active }) => <HomeIcon stroke={active === 'Home' ? activeC : undefined} />,
        search: ({ active }) => <SearchIcon stroke={active === 'Search' ? activeC : undefined} />,
        alert: ({ active }) => <AlertIcon stroke={active === 'Alert' ? activeC : undefined} />,
        post: ({ active }) => <AddPostIcon stroke={active === 'Add Post' ? activeC : undefined} />,
        logout: ({ active }) => <LogoutIcon fill={active === 'Logout' ? activeC : undefined} />,
        setting: ({ active }) => <SettingIcon fill={active === 'Setting' ? activeC : undefined} />,
        profile: ({ active }) => <ProfileIcon fill={active === 'Profile' ? activeC : undefined} />,
        more: ({ openMore, active }) => {
            if (openMore) return <CloseIcon fill={activeC} />
            return (
                <MoreDotIcon
                    fill={
                        active !== 'Home' && active !== 'Search' && active !== 'Alert'
                            ? activeC
                            : undefined
                    }
                />
            )
        },
    }

    const navbarItems: NavbarItemsType = {
        row1: {
            home: { title: 'Home', icon: 'home', path: HOME.TIMELINE.path },
            search: { title: 'Search', icon: 'search', path: HOME.SEARCH.path },
            alert: { title: 'Alert', icon: 'alert', path: HOME.ALERT.path },
            more: { title: 'More', icon: 'more' },
        },
        row2: {
            post: { title: 'Add Post', icon: 'post', path: HOME.ADDPOST.path },
            logout: { title: 'Logout', icon: 'logout' },
            setting: { title: 'Setting', icon: 'setting', path: HOME.SETTING.path },
            profile: { title: 'Profile', icon: 'profile', path: HOME.PROFILE.path },
        },
    }

    return { navbarItems, icons }
}
