import webpack from 'webpack'
import path from 'path'
import objectAssignDeep from 'object-assign-deep'
import olCtaWidget from '../src/defaults'
import { Stats } from 'webpack/types';

// Overrides as they would come from the API server
let overrides = {
    partnerIdentifier: 'r0gue21',
    dealership: null,
    docFee: 100,
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

function errHandler(err?: Error, stats?: Stats) {
    if (err) {
        console.error(err.stack || err);
        return;
    }

    const info = stats?.toJson();

    if (stats?.hasErrors()) {
        console.error(info?.errors);
        return
    }

    if (stats?.hasWarnings()) {
        console.warn(info?.warnings);
        return
    }

    console.log('build successful!')
}

const baseConfiguration = {
    entry: path.resolve(__dirname, '..', 'src', 'index.ts'),
    plugins: [defPlug],
    module: { // https://learntypescript.dev/12/l4-webpack
        rules: [
            {
                test: /\.(ts|js)?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-typescript"],
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
}

console.log('running dev build')
// Run Development Build
webpack({
    ...baseConfiguration,
    mode: 'development',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        filename: 'index.js'
    }
}, errHandler);

console.log('running prod build')
// Run minified and optimized Production Build
webpack({
    ...baseConfiguration,
    mode: 'production',
    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        filename: 'index.min.js'
    }
}, errHandler);
