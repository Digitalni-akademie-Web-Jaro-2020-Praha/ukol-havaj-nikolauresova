'use strict'

let osoba1 = {
  jmeno: 'Alena',
  uspory: 43000
};
let osoba2 = {
  jmeno: 'Karolína',
  uspory: 68000
};

const holiday = () => {
  if (osoba1.uspory + osoba2.uspory <= 100000) {
      console.log('Kamarádky nemají dost peněz, nikam nepojedou.');
      console.log(`Kamarádky musí našetřit ${100000 - osoba1.uspory - osoba2.uspory} Kč.`)
      if (osoba1.uspory < 50000) {
          console.log(`${osoba1.jmeno} musí ušetřit ${50000 - osoba1.uspory}, aby mohla jet na dovolenou.`)
      };
      if (osoba2.uspory < 50000) {
          console.log(`${osoba2.jmeno} musí ještě ušetřit ${50000 - osoba2.uspory}, aby mohla jet na dovolenou.`)
      };
  } else if (osoba1.uspory <= 50000 && osoba2.uspory >= 500000) {
      console.log('Kamarádky mají dost peněz, mohou odjet.');
  } else {
      if (osoba1.uspory <= 500000) {
          console.log(`${osoba1.jmeno} musí ještě zaplatit ${50000 - osoba1.uspory} Kč.`)
      } else {
          console.log(`${osoba2.jmeno} musí ještě zaplatit ${50000 - osoba2.uspory} Kč.`)
      }
  }
}

holiday();