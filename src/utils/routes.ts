export const ROUTES = {
    INTRO: {
        name: '(intro)',
        path: '/(intro)',
        ONBOARDING: {
            name: 'onboarding',
            path: '/(intro)/onboarding',
        },
    },
    AUTH: {
        name: '(auth)',
        path: '/(auth)',
        LOGIN: {
            name: 'login',
            path: '/(auth)/login',
        },
        REGISTER: {
            name: 'register',
            path: '/(auth)/register',
        },
    },
    HOME: {
        name: '(home)',
        path: '/(home)',
        TIMELINE: {
            name: 'timeline',
            path: '/(home)/timeline',
        },
        PROFILE: {
            name: 'profile',
            path: '/(home)/profile',
        },
    },
} as const
