import { useCallback, useEffect, useState } from 'react'
import { View, ScrollView, TouchableOpacity } from 'react-native'
import { NavigationProp, useFocusEffect, useNavigation } from '@react-navigation/native'

import { useZustandStore } from '$exporter'
import { BackIcon } from '$exporter/asset'
import { useStyles } from './styleAddPost'
import { UploadMedia } from './UploadMedia'
import { Poll } from './Poll'
import { ContentText, WarnText } from './Content'
import { Options } from './Options'

export default function AddPost() {
    //
    const [actives, setActives] = useState({
        warn: false,
        content: true,
        media: true,
        poll: true,
        emoji: true,
        language: true,
        send: false,
    })

    const { navigate } = useNavigation<NavigationProp<any>>()
    const { styles, COLORS } = useStyles()
    const { setHideBottomTab } = useZustandStore()

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
                {actives.warn ? <WarnText /> : null}
                {actives.content ? <ContentText /> : null}
                {actives.media ? <UploadMedia /> : null}
                {actives.poll ? <Poll /> : null}
                <View style={styles.indent}></View>
            </ScrollView>
            <Options actives={actives} />
        </View>
    )
}
