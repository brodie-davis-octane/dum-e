import {Parcel} from '@parcel/core';
import {fileURLToPath} from 'url';

export default {};

console.log('creating parcel')

let bundler = new Parcel({
    entries: '../src/parcel.js',
    defaultConfig: '@parcel/config-default',
    env: {
        'docFee': 200,
    },
    additionalReporters: [
        {
            packageName: '@parcel/reporter-cli',
            resolveFrom: fileURLToPath(import.meta.url)
        }
    ]
});

console.log('starting build')

try {
    let {bundleGraph, buildTime} = await bundler.run();
    console.log('getting bundles')
    let bundles = bundleGraph.getBundles();
    console.log(`✨ Built ${bundles.length} bundles in ${buildTime}ms!`);
} catch (err) {
    console.log(err.diagnostics);
    throw err
}

