const fs = require('fs');
const chalk = require('chalk');


const dohvatiBeleske = function () { 
    return 'Tvoje beleske...'
}


//? ADD - DODAJ BELESKU
const dodajBelesku = function (naslov, sadrzaj) {
    const beleske = ucitajBeleske();
    const dupliraneBeleske = beleske.filter(function (beleska) { 
        //* ako vratimo true filter ce da ostavi dupliranu belesku u nizu, a ako stavimo false, nece je sadrzati, recice da NIJE dupliat WTF
        //* ovaj niz dupliraneBeleske ce biti prazan ako ne nadjemo duplirane beleske, a ako nadjemo
        return beleska.t === naslov 
    });

    if (dupliraneBeleske.length === 0) {
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
const ukloniBelesku = function(naslov) {
    const beleske = ucitajBeleske();
    const beleskeZaKeep = beleske.filter(function (value, index, arr) {
        return value.t !== naslov
    });

    if (beleske.length > beleskeZaKeep.length) {
        console.log(chalk.green.inverse("Beleska je obrisana"));

        sacuvajBeleske(beleskeZaKeep);
    } else {
        console.log(chalk.red.inverse("Nema beleske za brisanje"));
    }

}


//? SACUVATI BELESKE
const sacuvajBeleske = function (notes) { //! da sacuvamo podatke tj beleske u niz ili objekat za json fajl
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('beleske.json', dataJSON);
}


//? UCITAVANJE BELESKI
const ucitajBeleske = function () { //* ne prima nikakve argumente vec ce da vraca niz belezaka.
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
    getNotes: dohvatiBeleske,
    addNote: dodajBelesku,
    removeNote: ukloniBelesku
};