import { LinkingOptions } from '@react-navigation/native'
import { ROUTERS } from './ConstRoute'

export const links: LinkingOptions<ReactNavigation.RootParamList> = {
    prefixes: [ROUTERS.PREFIX],
    config: {
        screens: {
            // Auth
            [ROUTERS.AUTH.LOGIN.path]: {
                path: ROUTERS.AUTH.LOGIN.path,
            },
            [ROUTERS.AUTH.REGISTER.path]: {
                path: ROUTERS.AUTH.REGISTER.path,
            },

            // HOME
            [ROUTERS.HOME.TIMELINE.path]: {
                path: ROUTERS.HOME.TIMELINE.path,
            },
            [ROUTERS.HOME.ADDPOST.path]: {
                path: ROUTERS.HOME.ADDPOST.path,
            },
            [ROUTERS.HOME.PROFILE.path]: {
                path: ROUTERS.HOME.PROFILE.path,
            },
        },
    },
}
