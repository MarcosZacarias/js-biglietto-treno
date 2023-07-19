// Request Km trip
const tripKm = parseInt(prompt("Quanti Km devi viaggiare"));
console.log("Viaggio di " + tripKm + " Km");
console.log(typeof tripKm);

// Request age
const ageUtent = prompt("Scrivi la tue età");
console.log("Età: " + ageUtent);

// Price € x km
const priceKm = 0.21;
console.log(priceKm);
console.log(typeof priceKm);

// Ticket standard
let ticketStandard = priceKm * tripKm;
console.log(ticketStandard);
console.log(typeof ticketStandard);

// Discount users over 65 years
const discountOver65 = 0.4;
console.log(discountOver65);
console.log(typeof discountOver65);

// Discount users under 18 years
const discountUnder18 = 0.2;
console.log(discountUnder18);
console.log(typeof discountUnder18);
