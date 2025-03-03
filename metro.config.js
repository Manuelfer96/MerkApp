const {getDefaultConfig} = require('expo/metro-config');
const {mergeConfig} = require('@react-native/metro-config');
const {withNativeWind} = require('nativewind/metro');
/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */

const configOptions = {};

const config = mergeConfig(getDefaultConfig(__dirname), configOptions);
module.exports = withNativeWind(config, {input: './global.e.css'});
