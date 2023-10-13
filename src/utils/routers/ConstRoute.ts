const APP = 'eshal://app'

export const ROUTERS = {
    PREFIX: APP,

    // when APP is launched
    STARTUP: {
        LOADING: 'StartupLoading',
    },

    ONBOARDING: {
        ONBOARDING: 'OnboardingScreen1',
    },

    // for Authentication
    AUTH: {
        AUTH: { path: 'authentication', prefix: `${APP}/authentication` },
        LOGIN: { path: 'login', prefix: `${APP}/login` },
        REGISTER: { path: 'register', prefix: `${APP}/register` },
    },

    // for Home
    HOME: {
        TIMELINE: { path: 'timeline', prefix: `${APP}/timeline` },
        ADDPOST: { path: 'addpost', prefix: `${APP}/addpost` },
        PROFILE: { path: 'profile', prefix: `${APP}/profile` },
    },
}
