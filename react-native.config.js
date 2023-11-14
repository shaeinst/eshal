module.exports = {
    project: {
        android: {
            unstable_reactLegacyComponentNames: [
                /**
                 * will remove this once flash-list support new architecture
                 * https://github.com/Shopify/flash-list/issues/811#issuecomment-1624778573
                 */
                'CellContainer',
                /**
                 * will remove this once react-native-fast-image support new architecture
                 * https://github.com/DylanVann/react-native-fast-image
                 */
                'FastImageView',
            ],
        },
        ios: {
            unstable_reactLegacyComponentNames: [],
        },
    },
    assets: [
        // FONTS
        './src/assets/fonts/Inter/static/',
        './src/assets/fonts/Kodchasan/',
    ],
}
