// Request Km trip
const tripKm = parseInt(prompt("Quanti Km devi viaggiare"));
console.log("Viaggio di " + tripKm + " Km");
console.log(typeof tripKm);

// Request age
const ageUtent = prompt("Scrivi la tue età");
console.log("Età: " + ageUtent);

// Price € x km
const priceKm = 0.21;
console.log("Prezzo per Km " + priceKm);
console.log(typeof priceKm);

// Ticket standard
let ticketStandard = priceKm * tripKm;
console.log("Biglietto standard " + ticketStandard);
console.log(typeof ticketStandard);

// Discount users over 65 years
const discountOver65 = 0.4;
console.log("Sconto Over 65 " + discountOver65);
console.log(typeof discountOver65);

// Ticket users over 65 years
let ticketOver65;

if (ageUtent >= 65) {
  ticketOver65 = ticketStandard - ticketStandard * discountOver65;
}

ticketOver65;
console.log("Biglietto Over 65 " + ticketOver65);
console.log(typeof ticketOver65);

// Discount users under 18 years
const discountUnder18 = 0.2;
console.log(discountUnder18);
console.log(typeof discountUnder18);

// Ticket users under 18 years
let ticketUnder18;

if (ageUtent < 18) {
  ticketUnder18 = ticketStandard - ticketStandard * discountUnder18;
}

ticketUnder18;
console.log("Biglietto Under 18 " + ticketUnder18);
console.log(typeof ticketUnder18);

// Ticket Final

let ticketFinal;

if (ageUtent >= 65) {
  ticketFinal = ticketOver65.toFixed(2);
} else if (ageUtent < 18) {
  ticketFinal = ticketUnder18.toFixed(2);
} else ticketFinal = ticketStandard.toFixed(2);

ticketFinal;
console.log("Biglietto Finale " + ticketFinal);
console.log(typeof ticketFinal);

// Ticket client
const ticketClient = `
<p>Prezzo biglietto finale: <b> € ${ticketFinal}</b></p>
`;

// PRINT TICKET CLIENT IN HTML WITH ID
document.getElementById("ticketTrain").innerHTML = ticketClient;
