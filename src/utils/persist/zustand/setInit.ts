import { useZustandStore } from './store'

const setIsFreshApp = (prop: boolean) => {
    return useZustandStore.setState(state => {
        return {
            init: {
                isFreshApp: prop,
            },
        }
    })
}

export const setInitState = {
    setIsFreshApp,
}
