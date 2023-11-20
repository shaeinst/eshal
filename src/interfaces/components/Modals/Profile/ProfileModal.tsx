import React, { useState } from 'react'
import { Alert, Modal, Pressable, Text, View } from 'react-native'
import Animated from 'react-native-reanimated'
import { BlurView } from '@react-native-community/blur'

import FastImage from 'react-native-fast-image'

import { useStyles } from './styleProfileModal'

export default function ProfileModal() {
    //
    const [showModal, setShowModal] = useState(false)
    const [modalUrl, setModalUrl] = useState<string | undefined>('')
    const { styles } = useStyles()

    const handleClose = () => {
        setShowModal(false)
    }

    const handleModal = (url?: string) => {
        if (url) setModalUrl(url)
        setShowModal(true)
    }

    const ModalComponent = () => (
        <Modal animationType="none" transparent visible={showModal} onRequestClose={handleClose}>
            <Pressable style={styles.blank} onPress={handleClose}>
                <BlurView style={styles.modalContainer} blurType="dark" blurAmount={18} blurRadius={2}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Pressable style={styles.modalView}>
                            <Animated.Image
                                source={{ uri: modalUrl }}
                                sharedTransitionTag="profilePic"
                                style={styles.image}
                            />
                        </Pressable>
                    </View>
                </BlurView>
            </Pressable>
        </Modal>
    )

    return {
        ModalComponent,
        setShowModal,
        showModal,
        modalUrl,
        handleModal,
    }
}
