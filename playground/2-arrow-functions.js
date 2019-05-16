//* es5
// const square = function (x) {
//     return x * x;
// }

//* es6 I
// const square = (x) => {
//     return x * x;
// }

//* es6 II ako je samo jedna linija koda sa return moze i ovako
// const square = (x) => x * x;

// console.log(square(9));

//* I
// const event = {
//     name: 'Bithday Party',
//     printGuestList: function () {
//         console.log('Guest list for ' + this.name);
//     }
// }

//* II - SA ARROW F-ON, greska
// const event = {
//     name: 'Bithday Party',
//     printGuestList: () => {
//         console.log('Guest list for ' + this.name); //! greska, THIS u ovom slucaju kada koristim o ARROW F. ne moze da se odnosi na propertije u eventu, vec se odnosi na ovu printGuestList f-ju (valjda) tj Guest list for undefined
//         //! arrow f. dont bind their own THIS value tj ne mozemo da pristupimo preko this-a u event object propertije tj this ovde nije referenca na ovaj event objekat
//         //! Tako da je u ovim slucajevima kao najbolje koristiti standardnu f-ju sa rec function, ali mozemo da koristimo i es6 skracenicu: (primer III)
//     }
// }

//* III
// const event = {
//     name: 'Bithday Party',
//     printGuestList() {
//         console.log('Guest list for ' + this.name);
//     }
// }


//* IV
// const event = {
//     name: 'Bithday Party',
//     guestList: ['Marta', 'Marija', 'Pavle'],
//     printGuestList() {
//         console.log('Guest list for ' + this.name); // Guest list for Bithday Party

//         // self = this;

//         this.guestList.forEach(function (guest) {
//             console.log(guest + ' is attending ' + this.name); // Marta is attending undefined // Marija is attending undefined // Pavle is attending undefined
//             //! ovo smo ranije resavali sa that = this ili self = this. Standardne f-je imaju SVOJ LICNI BINDING, dakle THIS koji se koristi u okviru njih se odnosi na njih, ne na recimo parenta kao sto je ovde printGuestList() jer je u okvitu printGuestList mogao da pristupi propertijima objecta event
//             //! zato ovde treba koristiti ARROW F.
//         });
//     }
// }

//* V - najbolje resenje za IV
const event = {
    name: 'Bithday Party',
    guestList: ['Marta', 'Marija', 'Pavle'],
    printGuestList() {
        console.log('Guest list for ' + this.name); // Guest list for Bithday Party

        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name);
        });
    }
}



event.printGuestList();