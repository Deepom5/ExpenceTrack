const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  sourceExts: ['jsx', 'js', 'ts', 'tsx', 'json'],
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
