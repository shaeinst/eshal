import {
    BoostIcon,
    CommentIcon,
    ExpandIcon,
    MoreArrowDownIcon,
    SingleDotIcon,
    StarIcon,
    SwitchIcon,
} from '$exporter/asset'
import { FlashList } from '@shopify/flash-list'
import React, { useState } from 'react'
import { Image, Text, View } from 'react-native'

import { useStyles } from './stylePostCard'

type PropsType = {
    //
}

const MEDIA_URL = [
    'https://loremflickr.com/640/480/person',
    'https://loremflickr.com/640/480/animal',
    'https://loremflickr.com/640/480/bird',
    'https://loremflickr.com/640/480/fish',
    'https://loremflickr.com/640/480/fish',
    'https://loremflickr.com/640/480/fish',
    'https://loremflickr.com/640/480/fish',
]

export default function PostCard(props: PropsType) {
    //
    const {} = props

    const [isAlt, setIsAlt] = useState(false)

    const { styles, COLORS } = useStyles()

    return (
        <View style={styles.container}>
            {/********** BOOST ***********/}
            <View style={styles.boostContainer}>
                <Image
                    source={{ uri: 'https://loremflickr.com/640/480/human' }}
                    style={styles.boostUserPic}
                />
                <Text style={styles.boostUserName}>Dan Gillmor</Text>
                <View style={styles.boostLogo}>
                    <BoostIcon />
                </View>
                <Text style={styles.boostText}>boosted</Text>
            </View>
            {/********** AUTHOR INFO ***********/}
            <View style={styles.authorContainer}>
                <Image
                    source={{ uri: 'https://loremflickr.com/640/480/boy' }}
                    style={styles.authorProfilePic}
                />
                <View style={styles.authorInfo}>
                    <View style={styles.NameNPost}>
                        <Text style={styles.authorName}>Ali Shahid</Text>
                        <Text style={styles.postDate}>2 days, 12-01-2023</Text>
                    </View>
                    <Text style={styles.authorId}>@campus@mastadon.social</Text>
                </View>
                <View style={styles.options}>
                    <MoreArrowDownIcon />
                </View>
            </View>
            {/********** POST TEXT ***********/}
            <View style={styles.textContainer}>
                <Text style={styles.description}>
                    From the very start of your design phase, it is highly recommended that you (or
                    your designer) has some knowledge about mold making and can make design choices
                    that make the mold simpler to produce...
                </Text>
            </View>
            {/********** POST MEDIA ***********/}

            <View style={styles.mediaContainer}>
                <View style={styles.accNprev}>
                    <View style={styles.accessibility}>
                        <View style={styles.accessibilityClick}>
                            <ExpandIcon />
                            <Text style={styles.accessibilityText}>Expand Text</Text>
                        </View>
                        <View style={styles.accessibilityClick}>
                            <SwitchIcon isOn={isAlt} />
                            <Text style={styles.accessibilityText}>ALT</Text>
                        </View>
                    </View>
                    <Image
                        source={{ uri: 'https://loremflickr.com/640/480/person' }}
                        style={styles.postPreview}
                    />
                </View>
                <View style={styles.mediaListContainer}>
                    <View style={styles.mediaList}>
                        <FlashList
                            data={MEDIA_URL}
                            estimatedItemSize={20}
                            showsVerticalScrollIndicator={false}
                            ItemSeparatorComponent={() => <View style={styles.whiteSpace}></View>}
                            ListFooterComponentStyle={{
                                height: 50,
                                backgroundColor: COLORS.background,
                            }}
                            renderItem={({ item }) => (
                                <Image source={{ uri: item }} style={styles.media} />
                            )}
                        />
                    </View>
                    <Text style={styles.textIndicator}>1 / 2</Text>
                    <View style={styles.dotIndicatorContainer}>
                        {Array(MEDIA_URL.length)
                            .fill(null)
                            .map((_, index) => (
                                <View key={index} style={styles.dotIndicator}>
                                    <SingleDotIcon />
                                </View>
                            ))}
                    </View>
                </View>
            </View>
            {/********** POST ACTIONS ***********/}
            <View style={styles.actionContainer}>
                <View style={styles.action}>
                    <Text style={styles.actionText}>262</Text>
                    <StarIcon />
                </View>
                <View style={styles.action}>
                    <Text style={styles.actionText}>34</Text>
                    <BoostIcon />
                </View>
                <View style={styles.action}>
                    <Text style={styles.actionText}>55</Text>
                    <CommentIcon />
                </View>
            </View>
        </View>
    )
}
