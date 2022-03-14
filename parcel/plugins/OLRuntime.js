// import { Runtime } from "@parcel/plugin";
const Runtime = require('@parcel/plugin').Runtime
const olCtaWidget = require('../../src/defaults')

// https://github.com/KarleeTheGolden/debug-2/blob/869556e67dc9975e30ee152b50d96acce62b43f6/packages/runtimes/hmr/src/HMRRuntime.js

module.exports = new Runtime({
    async apply({ bundle, bundleGraph }) {
        // ...
        console.log('bundler called!')
        console.log(bundle)
        console.log(bundleGraph)
        return [`
        let olCtaWidget = JSON.loads(${JSON.stringify({
            ...olCtaWidget,
            docFee: 400
        })})
        `]
        // return assets;
    },
});