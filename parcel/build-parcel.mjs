import {Parcel} from '@parcel/core';
import path from 'path'
import {fileURLToPath} from 'url';

console.log('creating parcel compiler')
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);

let bundler = new Parcel({
    entries: path.resolve(__dirname, '..', 'src', 'index.ts'),
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

console.log('starting parcel build')
try {
    let {bundleGraph, buildTime} = await bundler.run();
    console.log('getting bundles')
    let bundles = bundleGraph.getBundles();
    console.log(`✨ Built ${bundles.length} bundles in ${buildTime}ms!`);
} catch (err) {
    console.log(err.diagnostics);
    throw err
}

