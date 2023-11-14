import { LinkingOptions } from '@react-navigation/native'
import { ROUTERS } from './ConstRoute'

const { AUTH, HOME } = ROUTERS

export const links: LinkingOptions<ReactNavigation.RootParamList> = {
    prefixes: [ROUTERS.PREFIX],
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
                path: HOME.path,
            },
            [HOME.TIMELINE.path]: {
                path: HOME.TIMELINE.path,
            },
            [HOME.TIMELINE.POSTVIEW.path]: {
                path: HOME.TIMELINE.POSTVIEW.path,
            },
            [HOME.ADDPOST.path]: {
                path: HOME.ADDPOST.path,
            },
            [HOME.PROFILE.path]: {
                path: HOME.PROFILE.path,
            },
        },
    },
}
