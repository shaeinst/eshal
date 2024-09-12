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

        BOTTOM_TAB: {
            name: '(bottom-tab)',
            path: '/(home)/(bottom-tab)',

            INDEX: {
                name: 'index',
                path: '/(home)/(bottom-tab)/index',
            },
            ADD_POST: {
                name: 'add-post/index',
                path: '/(home)/(bottom-tab)/add-post/index',
            },
            PROFILE: {
                name: 'profile',
                path: '/(home)/(bottom-tab)/profile',
            },
            ALERT: {
                name: 'alert',
                path: '/(home)/(bottom-tab)/alert',
            },
            SEARCH: {
                name: 'search',
                path: '/(home)/(bottom-tab)/search',
            },
        },

        POST_DETAILS: {
            name: 'post-details',
            path: '/(home)/post-details',
        },
        SETTING: {
            name: 'setting',
            path: '/(home)/setting',
        },
    },
} as const
