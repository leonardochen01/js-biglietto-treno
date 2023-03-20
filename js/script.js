// Dati e prompt da far compilare all'utente
const costoPerKm = 0.21;
let kmDaPercorrere = prompt("Inserisci il numero di chilometri che desideri percorrere:");
console.log(`desideri percorrere` + kmDaPercorrere + `kilometri`)
let age = prompt("Inserisci la tua età:");

// Calcola il costo totale del viaggio
let costoTot = kmDaPercorrere * costoPerKm;
console.log( kmDaPercorrere, age, costoPerKm, costoTot )


