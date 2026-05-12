// 1. returnOnlyOddPeople(people)
// Shkruani një funksion që pranon një listë personash, ku secili person ka një ID, 
// dhe kthen vetëm ata që kanë ID tek (odd number).
// Shpjegimi:
// Numrat tek janë ata që kur i pjestojmë me 2, mbetja (remainder) është 1.
// Kështu kontrollojmë id % 2 !== 0.

const people = [
  { id: 1, name: "Arta" },
  { id: 2, name: "Blerim" },
  { id: 3, name: "Doni" },
  { id: 4, name: "Elira" }
];

function returnOnlyOddPeople(people) {
  return people.filter(person => person.id % 2 !== 0);
}

console.log(returnOnlyOddPeople(people));


// 2. maxNr(a, b)
// Shkruani një funksion maxNr(a, b) që kthen numrin më të madh mes dy numrave.

function maxNr(a, b) {
  return a > b ? a : b;
}

console.log(maxNr(30, 20));


// 3. isLandscape(width, height)
// Shkruani një funksion që kthen true nëse gjerësia është më e madhe se lartësia.
// Shpjegimi:
// Nëse width është më i madh se height, fotoja është në pozicion landscape.

function isLandscape(width, height){
  return width > height;
}
console.log(isLandscape(20,5))


// 4. fizzBuzz(input)
// Shkruani funksionin fizzBuzz që bën këto gjëra:
// Nëse numri pjestohen me 3 → “Fizz”
// Me 5 → “Buzz”
// Me 3 dhe 5 → “FizzBuzz”
// Nëse nuk është numër → “not a number”

function fizzBuzz (input) {
  if (input % 3 === 0){
    return `Fizz`
  } else if (input % 5 === 0){
    return `FizzBuzz`
  } else if (typeof input != 'number'){
    return 'nuk eshte number'
  }else {
    return `Error`
  }
}
console.log(fizzBuzz('5'))


// 5. checkSpeed(speed)
// Shkruani funksionin checkSpeed që:
// nëse speed ≤ 70 → “Ok”
// çdo 5 km/h mbi limit → 1 pikë
// nëse pikët ≥ 12 → “License suspended”

// Shpjegimi:
// Çdo 5 km/h mbi 70 jep 1 pikë; nëse pikët arrijnë 12, shoferi humb patentën.
// Bonus: Math.floor() -> përdoret për te rrumbullaksuar nje numer dhjetor

function checkSpeed (speed) {
  const shpejtesia = 70;
  const limiti = 5;

  if (speed <= shpejtesia){
    return 'Ok'
  }

  const piket = Math.floor((speed - shpejtesia) / limiti);

  if (piket >= 12){
    return `Shoferi humbi paten pasi ka marre ${piket} pike negative per arsye te 
    kalimit te shpejtesise prej ${shpejtesia}km/h.`
  } else if (piket <=12){
    return `Shoferi ka marre ${piket} pike negative per arsye 
    te kalimit te shpejtesise prej ${shpejtesia}km/h.`
  }

}
console.log(checkSpeed(75))


// 6. countTruthy(array)
// Shkruani funksion që numëron sa elemente të array-it janë “truthy”.
// 📌 Shembull array:
// [0, null, undefined, 2, 3] → rezultati duhet të jetë 2
// Shpjegimi:
// Truthy janë vlerat që JavaScript i konsideron të vërteta, 
// si numrat pozitivë, stringjet jo bosh, etj

let variabla = [0, null, undefined, 2, 3];
let counti = 0;

for (let i = 0; i < variabla.length; i++) {
  if (variabla[i]) {
    counti++;
  }
}
console.log(counti)


// 7. sum(limit)
// Shkruani një funksion që merr një array me numra dhe gjen shumën e të 
// gjithë numrave që pjestohen me 3 ose me 5.
// const numbers = [1, 3, 5, 6, 7, 9, 10];
// Shpjegimi:
// Shikojmë çdo numër tek array-i. Nëse një numër pjestohen me 3 ose me 5,
// e shtojmë në shuma. Në fund kthejmë shumën

function sum() {
    const numbers = [1, 3, 5, 6, 7, 9, 10];
    let shuma = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 3 === 0 || numbers[i] % 5 === 0) {
            shuma += numbers[i];
        }
    }

    return shuma;
}

console.log(sum());


// 8. Krijo një listë notash [9, 8, 5, 10] dhe gjej mesataren duke përdorur forEach.
const grades = [9, 8, 5, 10];
let totalGrades = 0;

grades.forEach(grade => {
  totalGrades += grade;
});
const average = totalGrades / grades.length;
console.log("Mesatarja:", average);


// 9. Krijo një funksion getNumbersGreaterThan10(numbers) që kthen vetëm 
// numrat më të mëdhenj se 10.

function getNumbersGreaterThan10(numbers) {
  return numbers.filter(number => number > 10);
}
console.log(getNumbersGreaterThan10([5, 12, 8, 20, 3, 15]));


// 10. Krijo një funksion formatProductNames(products) që kthen një 
// array të ri ku çdo emër ka tekstin:
// "Product: " përpara emrit.
// Psh:
// ["Product: Laptop", "Product: Mouse", "Product: Keyboard"]

const products = ["Laptop", "Mouse", "Keyboard"];
function formatProductNames(products) {
  return products.map(product => `Produkti: ${product}`);
}
console.log(formatProductNames(products));