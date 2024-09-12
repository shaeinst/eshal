import {
    React,
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
    ActivityIndicator,
    FlatList,
    Text,
    View,
} from '@native'
import { FlashList } from '@3rd'
import { useFocusEffect } from '@expo'

import { LatestPostIndicator, PostCard, PostSkeleton, ProfileModal } from '$exporter/component'
import { queryHomeTimeline, queryPublicTimeline } from '$exporter/backend'
import { MStatusType } from '$exporter/type'
import { postReducer } from '$exporter/func'
import { useZustandStore } from '$exporter'
import { useStyles } from './index.style'

export default React.memo(function Timeline() {
    //
    const refFlasList = useRef<FlashList<any>>(null)

    const { styles } = useStyles()
    const { activeBottomTab } = useZustandStore()

    // const { data, error, isLoading, isFetching, refetch } = queryHomeTimeline()
    const { data, error, isError, isLoading, isFetching, handleRefresh, handleOnScroll, handleEndReached, latest3 } =
        queryPublicTimeline()

    const listRender = ({ item }: { item: MStatusType }) => <PostCard data={item} />

    const Skeleton = (
        <View style={styles.skeleton}>
            {/* {isLoading || isFetching ? <PostSkeleton /> : null} */}
            {isLoading || isFetching ? <ActivityIndicator size="large" /> : null}
            {!isLoading && !isFetching && isError ? <Text style={styles.skeletonText}>{error.message}</Text> : null}
        </View>
    )

    useFocusEffect(
        useCallback(() => {
            // go to top of flatlist
            if (activeBottomTab.pressedTime > 0) {
                refFlasList.current?.scrollToOffset({ animated: true, offset: 0 })
            }
        }, [activeBottomTab]),
    )

    return (
        <View style={styles.container}>
            <FlashList
                ref={refFlasList}
                estimatedItemSize={340}
                refreshing={false}
                showsVerticalScrollIndicator={false}
                overScrollMode="never"
                ListFooterComponent={Skeleton}
                data={data}
                keyExtractor={item => item.id}
                renderItem={listRender}
                onRefresh={handleRefresh}
                onEndReached={handleEndReached}
                onEndReachedThreshold={0.4}
                onScroll={handleOnScroll}
                ItemSeparatorComponent={() => <View style={styles.separator}></View>}
            />
            {latest3.length > 0 ? <LatestPostIndicator urls={latest3} /> : null}
        </View>
    )
})
