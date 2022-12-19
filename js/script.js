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
let under18Ticket = (pricePerKm / 100) * 20;

console.log (typeof under18Ticket);

console.log ('debug ok');

//3.3 Prezzo per over 65
let over65Ticket = (pricePerKm / 100) * 40;

console.log (typeof over65Ticket);

console.log ('debug ok');
