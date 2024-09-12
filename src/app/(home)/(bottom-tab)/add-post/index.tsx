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

    const { styles, COLORS } = useStyles()
    const { actives, removeMedia, options } = useHandler()
    const { setHideBottomTab, createPost, setCreatePost } = useZustandStore()
    const { navigate } = useNavigation<NavigationProp<any>>()

    useFocusEffect(
        useCallback(() => {
            setHideBottomTab(true)
            return () => setHideBottomTab(false)
        }, []),
    )

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
                {actives.warn ? (
                    <InputTextField createPost={createPost} setCreatePost={setCreatePost} inputType="warn" />
                ) : null}
                {actives.content ? (
                    <InputTextField createPost={createPost} setCreatePost={setCreatePost} inputType="content" />
                ) : null}
                {actives.media ? <UploadMedia createPost={createPost} removeMedia={removeMedia} /> : null}
                {actives.poll ? <Poll /> : null}
                <View style={styles.indent}></View>
            </ScrollView>
            <Options options={options} actives={actives} />
        </View>
    )
}
