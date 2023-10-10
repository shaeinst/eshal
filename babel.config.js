module.exports = {
    //
    presets: ['module:metro-react-native-babel-preset'],

    plugins: [
        // https://watermelondb.dev/docs/Installation#android-react-native
        ['@babel/plugin-proposal-decorators', { legacy: true }],

        /* Reanimated plugin has to be listed last.
         * https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation#babel-plugin
         */
        'react-native-reanimated/plugin',
    ],

    env: {
        production: {
            plugins: ['transform-remove-console'],
        },
    },
}
