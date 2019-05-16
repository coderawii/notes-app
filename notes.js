const fs = require('fs');
const chalk = require('chalk');


// Goal: wire up read command
// 1. Setup --title option for read command
// 2. Create readNote in notes.js
//     - Search for note by title
//     - Find note and print title (styled) and body (plain)
//     - No note found? Print error in red
// 3. Have the command handler call the function
// 4. Test ur work by running a couple commands


//? ADD - DODAJ BELESKU
const dodajBelesku = (naslov, sadrzaj) => {
    const beleske = ucitajBeleske();
    // const dupliraneBeleske = beleske.filter(function (beleska) { 
    //     //* ako vratimo true filter ce da ostavi dupliranu belesku u nizu, a ako stavimo false, nece je sadrzati, recice da NIJE dupliat WTF
    //     //* ovaj niz dupliraneBeleske ce biti prazan ako ne nadjemo duplirane beleske, a ako nadjemo
    //     return beleska.t === naslov 
    // });

    //* ES6
    // const dupliraneBeleske = beleske.filter((beleska) => beleska.t === naslov); //! filter() ide kroz svaki element niza, iako nadje duplikat, on nastavlja dalje da srcuje, a nama treba cim nadje jedan duplikat da stopira srcovanje, da bzvz ne trosi resurse na dalju potraznju, jer nam je jedan dovoljno da znamo da li da dodamo belesku sa tim i tim nazivom ili ne, zato cemo ovo odraditi sa find() metodom koji cim nadje prvi duplirani element niza, stopira dalju potraznju
    const dupliranaBeleska = beleske.find((beleska) => beleska.t === naslov);

    // if (dupliraneBeleske.length === 0) {
    if (!dupliranaBeleska) { // ili if (dupliranaBeleska === undefined)
        beleske.push({
            t: naslov,
            b: sadrzaj
        });
        sacuvajBeleske(beleske);
        console.log(chalk.green.inverse("Nova beleska dodata!"));
    } else {
        console.log(chalk.red.inverse("Naslov beleske vec postoji!"));
    }

}


//? REMOVE - UKLONI BELESKU
const ukloniBelesku = (naslov) => {
    const beleske = ucitajBeleske();
    // const beleskeZaKeep = beleske.filter(function (value, index, arr) {
    //     return value.t !== naslov
    // });
    const beleskeZaKeep = beleske.filter((beleska) => beleska.t !== naslov);

    if (beleske.length > beleskeZaKeep.length) {
        console.log(chalk.green.inverse("Beleska je obrisana"));

        sacuvajBeleske(beleskeZaKeep);
    } else {
        console.log(chalk.red.inverse("Nema beleske za brisanje"));
    }
}


//? LISTAJ BELESKE
const listajBeleske = () => {
    const beleske = ucitajBeleske();

    console.log(chalk.inverse('Your notes'));

    beleske.forEach(beleska => {
        console.log(beleska.t);
    });
}


//? CITANJE BELESKI
const citajBeleske = (naslov) => {
    const beleske = ucitajBeleske();
    const matchingBeleska = beleske.find(beleska => beleska.t === naslov);

    if(matchingBeleskanode) {
        console.log(chalk.green.bold(`Naslov: ${matchingBeleska.t}, sadrzaj: ${matchingBeleska.b}`));
    } else {
        console.log(chalk.red.bold("Nema trazene beleske!"));
    }
    // console.log(naslov);
    
}


//? SACUVATI BELESKE
const sacuvajBeleske = (notes) => { //! da sacuvamo podatke tj beleske u niz ili objekat za json fajl
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('beleske.json', dataJSON);
}


//? UCITAVANJE BELESKI
const ucitajBeleske = () => { //* ne prima nikakve argumente vec ce da vraca niz belezaka.
   try {
        const dataBuffer = fs.readFileSync('beleske.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);

        //! ovaj kod nece f-nisati ako ne postoji fajl beleske.json, i/ili ako taj fajl postoji ali NEMA sadrzaj zato smo stavili u try-catch ako fejluje
   } catch (err) { //! dakle catch se odradi kada fajl ne postoji ili ako postoji, a prazan je, i zato mozemo vratiti prazan niz, nemamo sta da overvritujemo
       return []; 
   }
}


//? EXPORTOVANJE F-JA 
module.exports = {
    addNote: dodajBelesku,
    removeNote: ukloniBelesku,
    listNotes: listajBeleske,
    readNote: citajBeleske
};