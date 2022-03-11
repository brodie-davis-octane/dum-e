if(CTA_BUILD) {
    // The string "WIDGET_CONFIGURATION" will be replaced with the
    // dealer specific configuration at build time
    olCtaWidget = WIDGET_CONFIGURATION;
} else {
    // import default values for static analysis and auto-complete
    // this block will be optimized out during a production build
    olCtaWidget = require('@octanelending/default-widget-configuration');
}

// export olCtaWidget to window for testing
window.olCtaWidget = olCtaWidget;

console.log(olCtaWidget)
console.log(olCtaWidget.partnerIdentifier)
console.log(olCtaWidget.dealership)
console.log(olCtaWidget.docFee)
