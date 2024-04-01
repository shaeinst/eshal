import { useCallback, useEffect, useState } from 'react'
import { View, ScrollView, TouchableOpacity } from 'react-native'
import { NavigationProp, useFocusEffect, useNavigation } from '@react-navigation/native'

import { useZustandStore } from '$exporter'
import { BackIcon } from '$exporter/asset'
import { useStyles } from './styleAddPost'
import { UploadMedia } from './UploadMedia'
import { Poll } from './Poll'
import { InputTextField } from './Content'
import { Options } from './Options'
import { useHandler } from './useHandler'

export default function AddPost() {
    //

    const { setHideBottomTab } = useZustandStore()
    const { navigate } = useNavigation<NavigationProp<any>>()
    const { styles, COLORS } = useStyles()
    const { actives } = useHandler()

    useFocusEffect(
        useCallback(() => {
            setHideBottomTab(true)
            return () => setHideBottomTab(false)
        }, []),
    )

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigate('timeline')} style={styles.back}>
                <BackIcon stroke={COLORS.text} />
            </TouchableOpacity>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
                {actives.warn ? <InputTextField inputType="warn" /> : null}
                {actives.content ? <InputTextField inputType="content" /> : null}
                {actives.media ? <UploadMedia /> : null}
                {actives.poll ? <Poll /> : null}
                <View style={styles.indent}></View>
            </ScrollView>
            <Options />
        </View>
    )
}
