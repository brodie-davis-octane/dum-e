declare var CTA_BUILD: boolean;
declare var WIDGET_CONFIGURATION: object;
import defaults from './defaults'

let config = defaults;
if(CTA_BUILD) {
    // The string "WIDGET_CONFIGURATION" will be replaced with the
    // dealer specific configuration at build time
    // @ts-ignore
    config = WIDGET_CONFIGURATION;
}

export default config
