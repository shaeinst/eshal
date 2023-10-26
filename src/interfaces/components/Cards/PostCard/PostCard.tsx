import { BoostIcon, ExpandIcon, MoreArrowDownIcon, SwitchIcon } from '$exporter/asset'
import React from 'react'
import { Image, Text, View } from 'react-native'

import { useStyles } from './stylePostCard'

type PropsType = {
    //
}

export default function PostCard(props: PropsType) {
    //
    const {} = props
    const { styles } = useStyles()

    return (
        <View style={styles.container}>
            {/********** BOOST ***********/}
            <View style={styles.boostContainer}>
                <Image
                    source={{ uri: 'https://loremflickr.com/640/480/person' }}
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
                    source={{ uri: 'https://loremflickr.com/640/480/person' }}
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
                <View style={styles.accessibility}>
                    <View style={styles.accessibilityClick}>
                        <ExpandIcon />
                        <Text style={styles.accessibilityText}>Expand Text</Text>
                    </View>
                    <View style={styles.accessibilityClick}>
                        <SwitchIcon />
                        <Text style={styles.accessibilityText}>ALT</Text>
                    </View>
                </View>
                <Image
                    source={{ uri: 'https://loremflickr.com/640/480/person' }}
                    style={styles.postPreview}
                />
            </View>
            {/********** POST ACTIONS ***********/}
            <View style={styles.actionContainer}></View>
        </View>
    )
}
