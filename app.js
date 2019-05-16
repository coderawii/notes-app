// const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');

// const beleske = getNotes("Moje beleske.....");
// console.log(beleske);

// const zelenaMsg = chalk.green .inverse.bold('Success!');
// console.log(zelenaMsg);


// console.log(validator.isEmail('delete.database@example.com'));
// console.log(validator.isURL('https://mead.io'));

// console.log(process.argv[2]); //? argv iliti arguments vector je niz koji sadrzi sve obezbedjene argumente

// const command = process.argv[2];
// console.log(process.argv);

// if (command === 'add') {
//     console.log('Adding note!');
// } else if (command === 'remove') {
//     console.log('Removing note!');
// }

// console.log(process.argv);

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
    handler: function(argv){
        console.log(`Naslov: ${argv.title}.
        Sadrzaj beleske: ${argv.body}`);
    }
});

//* Create remove command
yargs.command({
    command: 'ukloni',
    describe: 'Ukloni belesku',
    // builder: {
    //     title: {
    //         describe: "Naslov beleske"
    //     }
    // },
    handler: function () {
        console.log('Uklanjanje beleske');
    }
}); 

//* Create list command
yargs.command({
    command: 'listaj',
    describe: 'Listaj sve beleske',
    handler: function () {
        console.log('Izlistavanje svih beleski');
    }
});

//* Create read command
yargs.command({
    command: 'citaj',
    describe: 'Citaj sve beleske',
    handler: function () {
        console.log('Citanje beleski');
    }
})

//* add, remove, read, list

// console.log(yargs.argv); //* bez ovoga yargs argument parsiranje uopste ne bi radilo, sto nema bas logike, al ae, ali umesto ovoga mozemo staviti yargs.parse()

yargs.parse();
