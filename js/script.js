/*
 1. Chiedere all'utente quanti kilometri vuole percorrere
 2. Chiedere all'utente la sua età
 3. Calcolare il prezzo totale del viaggio con due decimali
    3.1 0,21 euro al kilometro
    3.2 Sconto del 20% per i minorenni
    3.3 Sconto del 40% per gli over 65
*/

//1. Tratta di percorrenza
let km = prompt ('Per quanti chilometri vuoi viaggiare?');

console.log (typeof km);

console.log ('debug ok');

//2. Età
const age = prompt ('Quanti anni hai?');

console.log (typeof age);

console.log ('debug ok');

//3.1 Prezzo dei kilometri
let pricePerKm = km * 0.21;

console.log (typeof pricePerKm);

console.log ('debug ok');

//3.2 Prezzo per minorenni
let under18Discount = (pricePerKm / 100) * 20;

console.log (typeof under18Discount);

console.log ('debug ok');

//3.3 Prezzo per over 65
let over65Discount = (pricePerKm / 100) * 40;

console.log (typeof over65Discount);

console.log ('debug ok');

//3 Prezzo finale
let under18Ticket = (pricePerKm - under18Discount).toPrecision(2);

let over65Ticket = (pricePerKm - over65Discount).toPrecision(2);

if (age < 18) {
    alert(under18Ticket);
}
else if (age >= 65) {
    alert(over65Ticket);
}
else {
    alert(pricePerKm.toPrecision(2));
}