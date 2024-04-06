type AuthorizeType = {
    instanceURL: string
    clientId: string
    scope: string
    redirectUri: string
}

// https://docs.joinmastodon.org/methods/oauth/
const AUTH = {
    token: '/oauth/token',
    revoke: '/oauth/revoke',
    authorize: ({ instanceURL, clientId, scope, redirectUri }: AuthorizeType) =>
        `${instanceURL}/oauth/authorize?response_type=code&client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}`,
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

const INSTANCES = {
    list: 'https://instances.social/api/1.0/instances/list',
    search: 'https://instances.social/api/1.0/instances/search',
}

export const ENDPOINTS = {
    AUTH,
    HOME,
    INSTANCES,
}
