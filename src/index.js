// publish the defaults as a package for two reasons:
//   1. Allow autocompletion and static analysis of configuration fields
//   2. Allow overriding the require statement during compilation with dealer overrides
if(!CTA_BUILD) {
    olCtaWidget = require('@octanelending/default-widget-configuration');
} else {
    olCtaWidget = WIDGET_CONFIGURATION;
}
window.olCtaWidget = olCtaWidget; // export for testing

console.log(olCtaWidget)
console.log(olCtaWidget.partnerIdentifier)
console.log(olCtaWidget.dealership)
console.log(olCtaWidget.docFee)

// values to bundle:
// olCtaWidget.partnerIdentifier = 'g4EAn12';
// olCtaWidget.dealership = 'g4EAn12';
// olCtaWidget.docFee = 200;