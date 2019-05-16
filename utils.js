console.log('utils.js');

const name = 'Mike';

const add = function (a, b) {
    return a+b;
}

// module.exports = name; //* ovim exportom omogucili smo da promenljiva name bude dostupna drugim fajlovima u kojima cemo je prozvati, tj kao da smo returnovali vrednost iz fajla koji smo requirali

module.exports = add;
