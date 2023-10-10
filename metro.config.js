const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const path = require('path');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
    resolver: {
        extraNodeModules: {
            $exporter: path.resolve(__dirname, 'src/exporters'),
        },
    },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
