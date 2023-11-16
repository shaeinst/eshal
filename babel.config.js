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

        /** react-native-linear-gradient requires to use skeleton by moti
         *  https://moti.fyi/skeleton#option-2-react-native-linear-gradient
         */
        [
            'module-resolver',
            {
                root: ['./'],
                alias: { 'moti/skeleton': 'moti/skeleton/react-native-linear-gradient' },
            },
        ],
    ],

    env: {
        production: {
            plugins: ['transform-remove-console'],
        },
    },
}
