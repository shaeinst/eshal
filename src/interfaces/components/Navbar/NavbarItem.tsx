import { StyleSheet, Text, View } from 'react-native'

import { useColors } from '$exporter'

type PropsType = {
    title: string
    icon: React.ReactElement
    isActive?: boolean
}

export default function NavbarItem(props: PropsType) {
    const { title, icon, isActive } = props
    const { styles } = useStyles()

    return (
        <View style={styles.container}>
            {icon}
            <Text>{title}</Text>
        </View>
    )
}

export function useStyles() {
    //
    const { COLORS } = useColors()

    const styles = StyleSheet.create({
        container: {
            alignItems: 'center',
            gap: 2,
        },
    })

    return { styles }
}
