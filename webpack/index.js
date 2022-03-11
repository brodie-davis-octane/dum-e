const webpack = require('webpack');
const path = require('path');
const objectAssignDeep = require(`object-assign-deep`);
const olCtaWidget = require('../src/default-configuration')

let overrides = {
    docFee: 200,
    urls: {
        apiBaseUrl: 'test-url'
    }
}

let defPlug = new webpack.DefinePlugin({
    PRODUCTION: JSON.stringify(true),
    VERSION: JSON.stringify('5fa3b9'),
    BROWSER_SUPPORTS_HTML5: true,
    TWO: '1+1',
    'typeof window': JSON.stringify('object'),
    // override the import statement of the default widget configuration with the customized values
    // "require('@octanelending/default-widget-configuration')": JSON.stringify(objectAssignDeep(olCtaWidget, overrides))
    CTA_BUILD: true,
    WIDGET_CONFIGURATION: JSON.stringify(objectAssignDeep(olCtaWidget, overrides))
});

let webpackConfiguration = {
    mode: "development",
    // mode: "production",
    entry: '../src/index.js',
    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        filename: 'index.js'
    },
    plugins: [
        defPlug
    ]
}

webpack(webpackConfiguration, () => console.log('development build successful!'));
webpack(
    objectAssignDeep(webpackConfiguration, {
        'mode': 'production',
        'output': {
            filename: 'index.min.js'
        }
    }),
    () => console.log('production build successful!')
);

