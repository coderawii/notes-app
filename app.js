// const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const beleske = require('./notes.js');


//? Challenge: Setup command option and function
//? 1. Setup the remove command to take a required "--title" option
//? 2. Create and export a removeNote function from notes.js
//? 3. Call removeNote in remove command handler
//? 4. Have removeNote log the title of the note to be removed 
//? 5. Test your work using: node app.js remove --title="some title"


//? CHALLENGE: Use chalk to provide useful logs for remove:
//? 1. If a note is removed, print "Note removed!" with a green background
//? 2. If no note is removed, print "No note found!" with a red background

// Goal: Refactor all functions
// 1. If function is a method, use ES6 method definition syntax
// 2. Otherwise, use most concise arrow function possible
// 3. Test your work


// Goal: wire up list command
// 1. Create and export listNodes from notes.js
    // - "Your note" using chalk
    // - Print note title for each note
// 2. Call listNotes from command handler
// 3. Test ur work!

//* Customize yargs version
yargs.version('1.1.0'); // pre ovoga je bila 1.0.0

//* Create add command
yargs.command({
    command: 'dodaj',
    describe: 'Dodaj novu belesku',
    builder: {
        title: {
            describe: "Naslov beleske",
            demandOption: true, // * ovo je po difoltu false, tj naziv (title) je opcion, kada je true, moramo da definisemo naslov
            type: 'string' //* uvek ce biti string (pre ovoga je bilo boolean tj kada se stavi node app.js dodaj --title bez vrednosti, prikaze se boolean, a sad ce string)
        },
        body: {
            describe: 'Ovo je opis tela beleske',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        beleske.addNote(argv.title, argv.body)
    }
});

//* Create remove command
yargs.command({
    command: 'ukloni',
    describe: 'Ukloni belesku',
    builder: {
        title: {
            describe: "Naslov beleske",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        beleske.removeNote(argv.title);
    }
}); 

//* Create list command
yargs.command({
    command: 'listaj',
    describe: 'Listaj sve beleske',
    handler() {
        // console.log('Izlistavanje svih beleski');
        beleske.listNotes();
    }
});

//* Create read command
yargs.command({
    command: 'citaj',
    describe: 'Citaj sve beleske',
    builder: {
        title: {
            describe: 'Naslov beleski',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        // console.log('Citanje beleski');
        beleske.readNote(argv.title);
    }
})

//* add, remove, read, list

// console.log(yargs.argv); //* bez ovoga yargs argument parsiranje uopste ne bi radilo, sto nema bas logike, al ae, ali umesto ovoga mozemo staviti yargs.parse()

yargs.parse();
