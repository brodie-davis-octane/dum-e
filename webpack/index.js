const webpack = require('webpack');
const path = require('path');
const objectAssignDeep = require(`object-assign-deep`);
const olCtaWidget = require('../src/default-configuration')

// Overrides as they would come from the API server
let overrides = {
    partnerIdentifier: 'r0gue21',
    dealership: null,
    docFee: 300,
    urls: {
        apiBaseUrl: 'test-url'
    }
}

// Webpack Define Plugin Configuration
let defPlug = new webpack.DefinePlugin({
    // Tell the code we're using a custom config object, not the defaults
    CTA_BUILD: true,
    // Set the Dealer Configuration
    WIDGET_CONFIGURATION: JSON.stringify(objectAssignDeep(olCtaWidget, overrides))
});

// Shared Webpack Configuration
let webpackConfiguration = {
    entry: '../src/index.js',
    plugins: [defPlug]
}

function errHandler(err, stats) {
    if (err) {
        console.error(err.stack || err);
        if (err.details) {
            console.error(err.details);
        }
        return;
    }

    const info = stats.toJson();

    if (stats.hasErrors()) {
        console.error(info.errors);
    }

    if (stats.hasWarnings()) {
        console.warn(info.warnings);
    }
    console.log('build successful!')
}

// Run Development Build
webpack({
    entry: '../src/index.js',
    plugins: [defPlug],
    mode: 'development',
    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        filename: 'index.js'
    }
}, errHandler);

// Run minified and optimized Production Build
webpack({
    entry: '../src/index.js',
    plugins: [defPlug],
    mode: 'production',
    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        filename: 'index.min.js'
    }
}, errHandler);
