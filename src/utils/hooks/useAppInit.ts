import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState, setAuthStateRedux, setInitStateRedux } from '$exporter'
import { storageFreshApp, storageToken } from '$exporter/persist'

function useInit() {
    //
    const [isAppLaunching, setIsAppLaunching] = useState(true)
    const { isFreshApp } = useSelector((state: RootState) => state.init)
    const { isSignedIn } = useSelector((state: RootState) => state.auth)

    const dispatch = useDispatch()
    const { get: getToken } = storageToken()

    useEffect(() => {
        // storageFreshApp.set(true)
        getToken()
            .then(token => {
                const isSignedIn = token ? true : false
                dispatch(setAuthStateRedux({ token, isSignedIn }))

                if (isSignedIn)
                    dispatch(setInitStateRedux({ isFreshApp: false }))
                else dispatch(setInitStateRedux({ isFreshApp: true }))
            })
            .finally(() => {
                setIsAppLaunching(false)
            })
    }, [])

    return {
        isAppLaunching,
        isSignedIn,
        isFreshApp,
    }
}

export default useInit
