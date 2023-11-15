import { LinkingOptions } from '@react-navigation/native'
import { ROUTERS } from './ConstRoute'

const { AUTH, HOME, PREFIX } = ROUTERS

export const links: LinkingOptions<ReactNavigation.RootParamList> = {
    prefixes: [PREFIX],
    config: {
        screens: {
            // Auth
            [AUTH.LOGIN.path]: {
                path: AUTH.LOGIN.path,
            },
            [AUTH.REGISTER.path]: {
                path: AUTH.REGISTER.path,
            },

            // HOME
            [HOME.path]: {
                screens: {
                    [HOME.TIMELINE.path]: {
                        path: HOME.TIMELINE.path,
                    },
                    [HOME.TIMELINE.POSTVIEW.path]: {
                        path: HOME.TIMELINE.POSTVIEW.path,
                        parse: {
                            postId: (id: string) => id.replace(/^@/, ''),
                        },
                    },
                },
            },
            [HOME.SEARCH.path]: {
                path: HOME.SEARCH.path,
            },
            [HOME.ADDPOST.path]: {
                path: HOME.ADDPOST.path,
            },
            [HOME.ALERT.path]: {
                path: HOME.ALERT.path,
            },
            [HOME.PROFILE.path]: {
                path: HOME.PROFILE.path,
            },
        },
    },
}
