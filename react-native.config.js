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

                /**
                 *  new architecture for react-native-linear-gradient already implemented. wait for release
                 *  https://github.com/react-native-linear-gradient/react-native-linear-gradient/issues/622
                 */
                'BVLinearGradient',
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
