import {
  ConfigPlugin,
  createRunOncePlugin,
  WarningAggregator
} from "@expo/config-plugins";

const pkg = { name: "react-native-webrtc-custom", version: "1" }; //require("react-native-webrtc/package.json");

const withNoBitcode: ConfigPlugin<void> = (config) => {
  if (!config.ios) {
    config.ios = {};
  }
  WarningAggregator.addWarningIOS("ios.bitcode", "Fully disabled it");
  // WebRTC requires Bitcode be disabled for
  // production iOS builds that target devices, e.g. not simulators.
  // SDK +44 property
  config.ios.bitcode = false;

  return config;
};

export default createRunOncePlugin(withNoBitcode, pkg.name, pkg.version);
