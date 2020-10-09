// We load the plugin here.
// We recommend using loadPluginFile in tests, as using usePlugin from within
// a plugin can interfer with any build step you have (e.g. TypeScript).
import{ loadPluginFile } from "@nomiclabs/buidler/plugins-testing";
loadPluginFile(__dirname + "/../../src/index");

module.exports = {
  defaultNetwork: "buidlerevm"
};
