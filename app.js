// const fs = require('fs');

// // fs.writeFileSync('notes.txt', 'Ovo je fajl napravljen sa fs iz node.js. A ovo je sad dodat text');

// fs.appendFileSync('notes.txt', '. Ovo je sad dodat text sa appendFileSync u notes.txt')

// const firstName = require('./utils.js');
// // const name = 'Andrew';
// console.log(firstName); //! svaki modul ima svoj scope, dakle ova app.js nema promenljivu name, i bez obz sto smo pozvali ovde utils.js koji ima promenljivu name, kada pokrenemo u terminalu node app.js izbacice se greska da name nije definisano.
//! Dakle app.js ne moze da pristupi promenljivama u utils.js-u iako je u app.js-u ucitan utils.js
//! Ali, mozemo pristupiti ako exportujemo ono cemu zelimo da pristupimo tj zahvaljujuci exportu mi odjredjujemo koje stavri ce biti dostupne van tog modula u kom su, koje stvari delimo iz tog i tog fajla sa nekim drugim fajlovima

// const add = require('./utils.js');
// const sum = add(4, -2);
// console.log(sum);

const getNotes = require('./notes.js');
const beleske = getNotes("MOje beleske");
console.log(beleske);
