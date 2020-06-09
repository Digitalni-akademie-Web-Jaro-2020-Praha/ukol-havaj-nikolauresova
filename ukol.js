'use strict'

let osoba1 = {
    jmeno: 'Alena',
    uspory: 100000
};
let osoba2 = {
    jmeno: 'Karolína',
    uspory: 1000
};

const holiday = () => {
    if (osoba1.uspory + osoba2.uspory >= 100000) {
        if (osoba1.uspory >= 50000 && osoba2.uspory >= 50000) {
            return 'Holky mohou jet na Havaj, mají naspořeno dost peněz.';
        } if (osoba1.uspory >= 50000 && osoba2.uspory <= 50000) {
            return `${osoba1.jmeno} má našetřeno dostatek peněz. ${osoba2.jmeno} ještě chybí našetřit ${50000 - osoba2.uspory} Kč. `;
        } if (osoba2.uspory >= 50000 && osoba1.uspory <= 50000) {
            return `${osoba2.jmeno} má našetřeno dostatek peněz. ${osoba1.jmeno} ještě chybí našetřit ${50000 - osoba1.uspory} Kč.`;
        }
    }
    return `Holky musí našetřit ${100000 - osoba1.uspory - osoba2.uspory} Kč. ${osoba1.jmeno} ještě chybí našetřit ${50000 - osoba1.uspory} Kč, ${osoba2.jmeno} ještě chybí našetřit ${50000 - osoba1.uspory} Kč.`;
};

console.log(holiday());