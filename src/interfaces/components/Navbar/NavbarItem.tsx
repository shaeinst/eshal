import { StyleSheet, Text, View } from 'react-native'

import { useColors } from '$exporter'

type PropsType = {
    title: string
    icon: React.JSX.Element
    isActive?: boolean
}

export default function NavbarItem(props: PropsType) {
    //
    const { title, icon, isActive } = props
    const { styles } = useStyles()

    return (
        <View style={styles.container}>
            <Text>{title}</Text>
        </View>
    )
}

export function useStyles() {
    //
    const { COLORS } = useColors()

    const styles = StyleSheet.create({
        container: {
            backgroundColor: COLORS.primary,
        },
    })

    return { styles }
}
