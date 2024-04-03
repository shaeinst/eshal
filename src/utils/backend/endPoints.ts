const AUTH = {
    authorize: '/oauth/authorize',
    token: '/oauth/token',
    revoke: '/oauth/revoke',
}

const HOME = {
    TIMELINES: {
        home: '/api/v1/timelines/home',
    },

    NOTIFICATIONS: {
        all: '/api/v1/notifications',
        single: (id: string) => `/api/v1/notifications/${id}`,
        clear: '/api/v1/notifications/clear',
        dismiss: (id: string) => `/api/v1/notifications/${id}/dismiss`,
    },
}

const INSTANCES = 'https://instances.social/api/1.0/instances/list'

export const ENDPOINTS = {
    AUTH,
    HOME,
    INSTANCES,
}
