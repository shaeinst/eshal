// ROUTERS
export { default as RouteAuth } from '../utils/routers/RouteAuth'
export { default as RouteHome } from '../utils/routers/RouteHome'

// REDUX
export { default as reduxStore } from '../utils/persist/redux/store'
export type { RootState } from '../utils/persist/redux/store'
export {
    setAuthState as setAuthStateRedux,
    resetAuthState as resetAuthStateRedux,
} from '../utils/persist/redux/authSlice'
export { setInitState as setInitStateRedux } from '../utils/persist/redux/initSlice'

// THEME
export { default as WHITESPACE } from '../interfaces/styles/whitespace'
export { default as FONTS } from '../interfaces/theme/fonts'
export { default as useColors } from '../interfaces/theme/colors'
