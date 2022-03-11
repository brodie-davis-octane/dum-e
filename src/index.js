import {olCtaWidget} from './defaults'

const BUNDLER = 'parcel';

console.log(`built with ${BUNDLER}!`)
console.log(olCtaWidget)
console.log(olCtaWidget.partnerIdentifier)
console.log(olCtaWidget.dealership)
console.log(olCtaWidget.docFee)
// process variables
console.log(process.env.docFee)

// values to bundle:
// olCtaWidget.partnerIdentifier = 'g4EAn12';
// olCtaWidget.dealership = 'g4EAn12';
// olCtaWidget.docFee = 200;