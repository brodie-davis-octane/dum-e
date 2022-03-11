// import { Runtime } from "@parcel/plugin";
const Runtime = require('@parcel/plugin').Runtime

// export let obj = {}
// https://github.com/KarleeTheGolden/debug-2/blob/869556e67dc9975e30ee152b50d96acce62b43f6/packages/runtimes/hmr/src/HMRRuntime.js

module.exports = new Runtime({
    async apply({ bundle, bundleGraph }) {
        // ...
        console.log('bundler called!')
        console.log(bundle)
        console.log(bundleGraph)
        // return assets;
    },
});