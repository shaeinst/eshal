const APP = 'eshal://app' as const

export const ROUTERS = {
    PREFIX: APP,

    // when APP is launched
    STARTUP: {
        LOADING: 'StartupLoading' as const,
    },

    ONBOARDING: {
        ONBOARDING: 'OnboardingScreen1' as const,
    },

    // for Authentication
    AUTH: {
        AUTH: { path: 'authentication' as const, prefix: `${APP}/authentication` as const },
        LOGIN: { path: 'login' as const, prefix: `${APP}/login` as const },
        REGISTER: { path: 'register' as const, prefix: `${APP}/register` as const },
    },

    // for Home
    HOME: {
        path: 'home' as const,
        prefix: `${APP}/home` as const,

        TIMELINE: {
            path: 'timeline' as const,
            prefix: `${APP}/timeline` as const,

            POSTVIEW: { path: 'postview/:postId' as const, prefix: `${APP}/postview` as const },
        },
        ADDPOST: { path: 'addpost' as const, prefix: `${APP}/addpost` as const },
        PROFILE: { path: 'profile' as const, prefix: `${APP}/profile` as const },
        SEARCH: { path: 'search' as const, prefix: `${APP}/search` as const },
        ALERT: { path: 'alert' as const, prefix: `${APP}/alert` as const },
        SETTING: { path: 'setting' as const, prefix: `${APP}/setting` as const },
    },
}
