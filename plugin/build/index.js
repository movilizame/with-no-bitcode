"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_plugins_1 = require("@expo/config-plugins");
const pkg = { name: "react-native-webrtc", version: "UNVERSIONED" }; //require("react-native-webrtc/package.json");
const withNoBitcode = (config) => {
    if (!config.ios) {
        config.ios = {};
    }
    config_plugins_1.WarningAggregator.addWarningIOS("ios.bitcode", 'Fully disabled it');
    // WebRTC requires Bitcode be disabled for
    // production iOS builds that target devices, e.g. not simulators.
    // SDK +44 property
    config.ios.bitcode = false;
    return config;
};
exports.default = (0, config_plugins_1.createRunOncePlugin)(withNoBitcode, pkg.name, pkg.version);
