export const ROUTES = {
    AUTH: {
        name: '(auth)',
        LOGIN: {
            name: 'login',
            path: '/auth/login',
        },
        REGISTER: {
            name: 'register',
            path: '/auth/register',
        },
    },
    HOME: {
        name: '(home)',
        TIMELINE: {
            name: 'timeline',
            path: '/home/timeline',
        },
        PROFILE: {
            name: 'timeline',
            path: '/home/profile',
        },
    },
    INTRO: {},
} as const
