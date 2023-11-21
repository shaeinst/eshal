import React, { useState } from 'react'
import { Modal, Pressable, View } from 'react-native'
import Animated from 'react-native-reanimated'

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
                <View style={styles.modalContainer}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Pressable style={styles.modalView}>
                            <Animated.Image
                                source={{ uri: modalUrl }}
                                sharedTransitionTag="profilePic"
                                style={styles.image}
                            />
                        </Pressable>
                    </View>
                </View>
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
