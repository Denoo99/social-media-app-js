//Test comment
console.log('Hello Java!!!')



// Array Listat []
//      Kuti me ndarje, mund te ruash ne te njejten kohe vlera te ndryshme te cilat
//      aksesohen me index

// example below
// let emri = [vlera1, vlera2, vlera3];

let numrat  = [10, 30, 40]
let emrat = ['Olti', 'Valmira', 'Denisi', 'Arti', 'Flamuri'];
let bosh = []

// indeksimi

console.log(emrat[0]);
console.log(emrat[2]);
console.log(emrat);

// gjatesia array - .length

console.log(emrat.length);


// qasja e ele. te fundit 
console.log(emrat[emrat.length -1])

// qka mund te permbaj nje array list
// stringje/tekste/emrat, numra, boolean, funksione
let statuset = [true, false, true];
console.log(statuset);

let veprimet = [
    function() {return 'Hello'}
]
console.log(veprimet[0]());


let mix = [true, 'Denis', [1,2,3]]
console.log(mix)
console.log(mix[2][1])

// nested arrays - ose array brenda array

let notat = [
    ['Flamuri', 10, 8, 9],
    ['Arti', 7, 7, 8],
    ['Valmira', 10, 8, 10]
]

// noten e pare te flamurit
console.log(notat[0][1])

// note e trete te artit
console.log(notat[1][3])

// emrin e studentit te trete
console.log(notat[2][0])

// metoday e array; push shton nje ele. ne fund push()
let frutat = ['molle', 'banane'];
frutat.push('qershi');
console.log(frutat)

// me e hek ele. e fundit pop()
frutat.pop()
console.log(frutat)

// shift e hek ele. e pare
frutat.shift()
console.log(frutat)

let i_pari = frutat.shift();
console.log('I pari eshte: ', i_pari)
console.log(frutat)

// unshift shton nje ele. ne fillim te array
frutat.unshift('kiwi');
console.log(frutat)

// concat array; nuk e ndryshon array origjinal, vetem e kthen nje array te ri
let perime = ['patate', 'domate'];
let teGjitha = frutat.concat(perime)
console.log('teGjitha ', teGjitha)
console.log('Frutat pas concat: ', frutat)

// sort - sipas alfabetit
emrat.sort();
console.log(emrat)

// slice - kopjon nje pjese te array dhe kthen nje array tjeter
console.log(emrat.slice(1,4))

// splice heq ose eliminon nje ele. brenda nje array
console.log(emrat)
emrat.splice(1,1) // 1sh i par, shko te 1 edhe heke 1, nese osht 1,2 shkon te 1sh edhe i hek 2
console.log('emrat pas splice: ', emrat)

emrat.splice(1, 0, 'Artii')
console.log('emri i shtuar: ', emrat)

// indexOf psh me e kqyr nje vler ku gjendet, if no result then -1
console.log(emrat.indexOf('Artii'))

// includes - kthen true nese ele. eshte aty, false nese jo
console.log(emrat.includes('Denisi')) // kthen false



// ushtrime ne klass, say hello x2
function sayHello2() {
    console.log('Hello')
    console.log('Hello')
}

sayHello2()

//sing song
// function kenga() {
   // let muzika = prompt('Vendos nje muzike')
  //  return muzika
//}
//alert(kenga())


// multiply
//function multiply() {
    //let a = prompt('Numri i pare per shumezim')
  //  let b = prompt('Numri i dyte per shumezim')
//return a * b;
//}
//alert(multiply());


// multiply me > 10
//function multiplyNew() {
//if (multiply() > 10) {
//return "bon";
//}
//return "sbon";
//}
//alert(multiplyNew())


// name
function getName() {
return "Denis";
}
function greetUser(nameFn) {
console.log("Hello, " + nameFn());
}
greetUser(getName);


// mesatarja
//function average() {
    //let numri1 = prompt('Vendos numrin e pare per mesatare')
   // let numri2 = prompt('Vendos numrin e dyte')
   // let numri3 = prompt('Vendos numrin e trete')
 // return (numri1 + numri2 + numri3);
//}
//alert(average())


// qift ose tek
//function isEven() {
    //let test = prompt('Vendos nje numer?')
  //return test % 2 === 0 ? "qift" : "tek";
//}
//alert(isEven())


// me shkronja te medha
//function meTmdhaja () {
    //let stringu = prompt('Vendos nje fjali')
  //  return stringu.toUpperCase()
//}
//alert(meTmdhaja())


// me e marr nje emer dhe moshe
//function intro() {
  //  let name = prompt('Emri yt?')
    //let age = prompt('Mosha juaj?')
    //let emrimosha = `My name is ${name} and I am ${age} years old`;
    //return emrimosha
//}
// alert(intro())

function fullName (name, age) {
    return `My name is ${name} and I am ${age} years old`
}
console.log(fullName('Skender', 30))



let fruta = ["molle", "banane", "qershi"];
console.log(fruta[1]);
console.log(fruta[2]);

fruta.push('portokall');
console.log(fruta.pop())

let frutat1 = ["banane", "qershi", "portokall"];
let i_parii = frutat1.shift();
console.log(i_parii)
frutat1.unshift('molle');
console.log(frutat1);

let frutat2 = ["molle", "banane"];
let perimet = ["patate", "domate"];
let ushqimet = frutat2.concat(perimet);
console.log(ushqimet);
console.log(frutat2);
console.log(perimet);

let kafshët = ["tigri", "macja", "ariu", "ujku"]
console.log(kafshët.includes("ariu"));
console.log(kafshët.indexOf('macja'));

let numrat1 = [10, 20, 30, 40, 50, 60];
let mesatarja1 = numrat1.slice(2,4)
console.log(mesatarja1);
console.log(numrat1);


let notat1 = [
  ['Denisi', 9, 8, 10],
  ['Flamur', 7, 9, 8],
  ['Nesa', 10, 10, 9]
];
console.log(notat1[0][2]);


// Cili gjendet indeksi i parë?
// me [0]

// Si aksesohet elementin e fundit?
// me -1

// Çfarë bën pop()?
// largon ele. e fundit

// Çfarë bën shift()?
// largon ele. e pare

// Çfarë bën sort()?
// ben renditjen sipas alfabetit

// Si bashkoj dy array-t?
// me concat

// A ndryshon concat() origjinalin?
// jo

// Si te kopjoj pjesë të array-t?
// permes slice

// Si te gjej pozicionin e elementit?
// permes index0f

// Si te shoh nëse elementi ekziston?
// permes metodes includes




// Objektet

let student = {
  name: 'Arti' // property

  // key-value:
  // key=> name
  // value=> 'Arti'
}

// qasja ne objekte realizohet si me poshte
student.name; // dot notation
console.log(student.name);
student['name'] // bracket notation
console.log(student['name']);

let selection = 'name';
student[selection]; // ok DHE SHERBEN PER DINAMIKE
console.log(student[selection]);

student.selection; // error
console.log(student.selection); // qet undefined

console.log(student);

student.age = 20;
console.log(student);

let studentja = {};
studentja.name = 'Arta';
console.log(studentja);

// arrays brenda objektit
let studenti = {
  name: 'Flamuri',
  age : 22,
  subjects: ['Fizike', 'Kimi']
}

console.log('Studenti:', studenti);

console.log('Lenda e pare:', studenti.subjects[0]);

studenti.subjects[2] = 'Matematike'
console.log(studenti.subjects)

// objektet brenda listave

let cart = [
  {item: 'Laptop', price: 1000},
  {item: 'Mouse', price: 5},
  {item: 'Keyboard', price: 40}
]

console.log(cart);
console.log('Cmimi i',cart[1].item, 'eshte', cart[1].price, 'euro');


let classlist = [
  {name: 'Arti', grade: 9},
  {name: 'Valmira', grade: 10},
  {name: 'Denisi', grade: 8}
]

console.log(classlist)
// shtimi i nje studenti
classlist.push({name: 'Denis', grade: 7});
console.log(classlist);
/// ose
// classlist[3] = {name: 'Denis', grade:7}

//gjeje mesataren
let mesatarja = classlist[0].grade + classlist[1].grade + classlist[2].grade + 
classlist[3].grade / classlist.length
console.log(mesatarja);

// funksionet brenda objekteve (methods)

let makina = {
  brand: 'Tesla',
  drive: function(){
    console.log('The car is driving')
  }
}
makina.drive()

let myConsole = {
  log: function(message) {
    console.log(message)
  }
}


// metoda introduce, qe priton 'Hey I am [name], and I love ['Fizike']'
let studenti1 = {
  name: 'Flamuri',
  age: 22,
  subjects: ['Fizike', 'Kimi'],
  introduce: function(){
    console.log('Hey I am', studenti1.name,', and I love', studenti1.subjects[0])
  }
}
studenti1.introduce()




let book = {
  title: 'Denisi ne JavaScript',
  author: 'Naim Frasheri',
  genres: ['Aventure', 'Mister', 'Komedi'],
  info: function(){
    console.log('Titulli i librit', book.title,'dhe autori', book.author)
  },
  genresMethod: function(){
    return book.genres.length
  }
};

let book2 = {
  title: 'Test',
  author: 'Sami Frasheri',
  genres: ['Aventure', 'Mister', 'Komedi'],
  info: function(){
    console.log('Titulli i librit', book2.title,'dhe autori', book2.author)
  }
};

let book3 = {
  title: '24 ore ne dite',
  author: 'Gjon Buzuku',
  genres: ['Aventure', 'Mister', 'Komedi'],
  info: function(){
    console.log('Titulli i librit', book3.title,'dhe autori', book3.author)
  },
  genresMethod: function(){
    return book.genres.length
  }
};

let library = [book, book2, book3]

// detyra 1 -> Krijo nje array “names” - printoj te gjitha me uppercase dhe sipas alfabetit
let names = ['Denis', 'Eri', 'Erjon', 'Ben', 'Ardit'];
names.sort();
console.log(names);
// function meTmdhaja() {
//   let string = names;
//   return string.toUpperCase()
// }
// console.log(meTmdhaja())

// detyra 2 -> Kontrollo nese ekziston emri “Ben” ne arrayin lart
console.log(names.includes('Ben'));

// detyra 3 ->Krijo nje array me objekte students qe permbane vetite: name dhe age. 
// - llogariti sa nxenes jane komplet dhe cili nxenes e ka moshen me te madhe
let students = [
  {name: 'Flamuri', age : 21,},
  {name: 'Denis', age : 25,},
  {name: 'Eri', age : 27,},
  {name: 'Erjon', age : 19,},
  {name: 'Ardit', age : 30,},
]
console.log(students.length);
let oldest = students.reduce((a, b) => a.age > b.age ? a : b);
console.log(oldest);

// detyra 4 -> Shtoje edhe nje student dhe printo moshen mesatare
students.push({name: 'Egion', age: 22});
console.log(students)
let mesatarja = students[0].age + students[1].age + students[2].age + 
students[3].age + students[4].age + students[5].age / students.length
console.log(mesatarja);

// detyra 5 -> Shkruaj dy arrays “emrat” dhe “surnames” 
// dhe bashkoji keta arrays me nje metode.
let emrat = ['Denis', 'Filon', 'Arsim', 'Brilant'];
let surnames = ['Berisha', 'Fisteku', 'Bora', 'Spahija']
let bashkimi = emrat.concat(surnames);
console.log(bashkimi)

// detyra 6 -> 6.  Nderto nje fjali (string) = Javascript is fun nga ky array
let words = ["JavaScript", "is", "fun"];
let string1 = words[0] + ' ' + words[1] + ' ' + words[2]
console.log(string1)

// detyra 7 -> Printo totalin e cmimeve
let products = [
 { name: "Phone", price: 100 },
 { name: "Laptop", price: 1000 },
 { name: "Mouse", price: 20 }
];
let totali = products[0].price +  products[1].price + products[2].price
console.log(totali)

// detyra 8 -> Rrit cmimin e cdo produkti me +10 dhe printo arrayin
// let shtimi = ((products[0].price+10), (products[1].price+10), (products[2].price+10))
// console.log(products)








let condition = true;
if (condition) {
  // kodi vetem nese plotesohet kushti
} else if(anotherCondition){
  // nese nuk plotesohet kushti i pare, atehere kontrollon kete
} else {
  // nese as if ose else if not plotesohen, vjen ketu
}

// shembull -> nese ora mes 6 dhe 12 - miremengjesi, 12 dhe 18 - miredita else mirembrema
let ora = 12;
if (ora >= 6 && ora < 12 ) {
  console.log('Miremengjesi')
} else if (ora >= 12 && ora < 18) {
  console.log('Miredita')
} else {
  console.log('Mirembrema')
}

// switch-i
let vlera = 10;
switch (vlera) {
  case '5':
    // ekzekuto kodin
    break;
  case '10':
    // ekzekuto kodin
    break;
  default:
    // nese asnjera nuk plotesohet
}

let roliAdmin = 'admin'; //admin, editor, viewer
let roliViewer = 'viewer'

// let isLoggedIn = false;
// function getRoli() {
//         if(isLoggedIn){
//           return 'admin'
//         }
// }
let isLoggedIn = true;
function getRoli() {
 return isLoggedIn ? roliAdmin : roliViewer
}


switch (getRoli()) {
  case 'admin':
    console.log('Mire se erdhe Admin. Ke akses te plote.');
      break;
  case 'editor':
    console.log('Mund te modifikosh kontent')
      break;
  case 'viewer':
    console.log('Mund te shikosh kontent')
      break;
  default:
    console.log('Rol i panjohur. Identifikohu')
    
}




// dallimi mes VAR / LET / CONST

// 1) SCOPE -> percakton ku jeton variabla dhe ku mund te perdoret ajo

// var -> function scope
if (true) {
  var emri = 'Arti';
}
// console.log(emri) // arti


// let & const -> blocked scope {}
let mbiemri = 'Gashi';
if (true) {
    let mbiemri = 'Gashi2'

  }
console.log(mbiemri)

// 2) hositing
console.log(x)
var x = 5; // vetem undefined

// console.log(y)
let y = 3; // paraqet error

// 3) redeclaration

// var -> lejon te redeclare shume here ne te njejtin vend
var drita = 'e kuqe';
var drita = 'e gjelber';
console.log(drita)

// let & const nuk lejon redeclare
// let ngjyra = 'e zeze'
let ngjyra = 'e bardhe'


// 4) reassignments

// let studenti = 'Arti';
// studenti = 'Denisi';

// const studenti = 'Arti';
// studenti = 'Denisi'

const studenti = {
  name: 'Arti'
}
studenti.name = 'Denisi'




// 1) b; 2) error?; 3) error?; 4) Leo; 5) 5; 6) 5?; 7) 5; 8) 10; 9) 2; 10) 1;




// detyra 1
const user = {name: 'Arti', role: 'admin'}
const user2 = {name: 'Arta', role: 'viewer'}
const user3 = {name: 'Olti', role: 'editor'}
const user4  = {name: 'Mbresa', role: 'studente'}

function getUserAccess(user) {
    if(user.role == 'admin') {
        return `${user.name} ka akses te plote`
    }
    else if(user.role == 'editor') {
        return `${user.name} mund te editoj permbajtje`
    }
    else if(user.role == 'viewer') {
        return `${user.name} mund te shikoj permbajtje`
    }
    else {
        return  `${user.name} ka rol te panjohur`
    }
}

console.log(getUserAccess(user))
console.log(getUserAccess(user2))
console.log(getUserAccess(user3))
console.log(getUserAccess(user4))


// detyra 2
let weather = { city: 'Prishtina', temp: 20 };

function checkWeather(weather) {
  if (weather.temp > 30) {
    console.log('Nxehte');
  } else if (weather.temp <= 30 && weather.temp >= 20) {
    console.log('Ngrohte');
  } else {
    console.log('Ftofte');
  }
  return weather;
}
checkWeather(weather)



// detyra 3
function getPrice(productName) {
  return productName;
}

let productName = 'butter';

switch (getPrice(productName)) {
  case 'milk':
    console.log('1.20 EUR');
    break;
  case 'bread':
    console.log('0.80 EUR');
    break;
  case 'eggs':
    console.log('2.50 EUR');
    break;
  case 'butter':
    console.log('1.90 EUR');
    break;
  default:
    console.log('Produkt i pa njohur');
}



// detyra 4
const studenti = {name: 'Ana', grade: 75}

function checkGrade(student) {
  if (student.grade < 50){
    return '${student.name} ka note te dobet'
  } else if (student.grade >= 50 && student.grade < 80){
    return '${student.name ka note te mire}'
  } else {
    return '${student.name} ka note te shkelqyeshme'
  }
}
checkGrade(studenti)


// detyra 5
let car = { brand: "Tesla", fuel: "electric" }
function checkCar(car){
  if (car.fuel === 'electric'){
    console.log('Eco friendly car')
  } else {
    console.log('Uses fuel')
  }
}
checkCar(car)



// // Loops - cikle qe na lejojne perseritjen e nje cikli pa e shkru te njejtin kod

// // for
// // let i - inicializimi; i<5 - kushti; i++ - hapi i rradhes
// for (let i =0; i<5; i++){
//   console.log('Numri: ' + i)
// }

// for (let i =3; i>=1; i--){
//   console.log(i)
// }

// for (let i =0; i<=10; i+=2){
//   console.log('Numrat qift ' + i)
// }

// for (let i =0; i<50;i+=5){
//   console.log('Qdo 5 numra ' + i)
// }

// prej 1-15, printo vetem numrat tek
 for (let i=1; i<=15; i+=2){
  console.log('Numrat tek ' + i)
}


// Loops mbi arrays; 
const frutat =['molle', 'banane', 'portokall']
console.log(frutat[0])
console.log(frutat[1])
console.log(frutat[2])
console.log(frutat.length)

for (let i =0; i< frutat.length;i++){
  console.log(frutat[i])
}


// permes for loop - gjeje shumen e numrave prej 1 deri ne 10
let shuma = 0;
for (let i=1; i<=10;i++){
  shuma = shuma+i
}
console.log('Shuma ' + shuma)

// shuma e ele. te array-it
const numrat = [10, 25, 7, 13, 5];
let totali = 0;

for (let i=0; i<numrat.length; i++){
  totali = totali + numrat[i]
}
console.log(totali)


// gjej mesataren e notave
let notat = [8, 9, 10, 7, 5, 6];
let mesatarja = 0;
for (let i=0; i<notat.length; i++){
mesatarja = mesatarja + notat[i]
}
console.log(mesatarja/notat.length)


// gjeje nr me te madh ne array
const numbers = [3, 7, 2, 9, 5, 1, 8];
let maxi = numbers[0];

for (let i =0; i<numbers.length; i++){
  if (numbers[i]>maxi) {
      maxi = numbers[i];
  }
}
console.log('Numri me i madh ne array eshte ' + maxi)

const nr = [3, 7, 2, 9, 5, 1, 8]
let min = nr[0]

for (let i = 0; i<nr.length;i++){
  if (nr[i] < min) {
    min = nr[i];
  }
}
console.log('Numri me i vogel ne array eshte ' + min)


// numero sa nota jane mbi 7
let grades = [8, 9, 10, 7, 5, 6];
let numero = 0;
for (let i = 0; i<grades.length; i++){
  if (grades[i] > 7){
    numero++;
  }
}
console.log(numero)


// shumen e numrave qift
const numrat2 = [1,2,3,4,5,6,7,8,9,10]
let sum = 0;
for (let i =0; i<numrat2.length; i++){
  if (numrat2[i] % 2 ==0)
  sum = sum + numrat2[i];
}
console.log(sum)

// tabela e shumzimit me 7
const num = 7;

for (let i = 1; i<=10; i++){
    console.log(num + ' x ' + i + ' = ' + num * i)
}




// // Loops - cikle qe na lejojne perseritjen e nje cikli pa e shkru te njejtin kod

// // for
// // let i - inicializimi; i<5 - kushti; i++ - hapi i rradhes
// for (let i =0; i<5; i++){
//   console.log('Numri: ' + i)
// }

// for (let i =3; i>=1; i--){
//   console.log(i)
// }

// for (let i =0; i<=10; i+=2){
//   console.log('Numrat qift ' + i)
// }

// for (let i =0; i<50;i+=5){
//   console.log('Qdo 5 numra ' + i)
// }

// prej 1-15, printo vetem numrat tek
 for (let i=1; i<=15; i+=2){
  console.log('Numrat tek ' + i)
}


// Loops mbi arrays; 
const frutat =['molle', 'banane', 'portokall']
console.log(frutat[0])
console.log(frutat[1])
console.log(frutat[2])
console.log(frutat.length)

for (let i =0; i< frutat.length;i++){
  console.log(frutat[i])
}


// permes for loop - gjeje shumen e numrave prej 1 deri ne 10
let shuma = 0;
for (let i=1; i<=10;i++){
  shuma = shuma+i
}
console.log('Shuma ' + shuma)

// shuma e ele. te array-it
const numrat = [10, 25, 7, 13, 5];
let totali = 0;

for (let i=0; i<numrat.length; i++){
  totali = totali + numrat[i]
}
console.log(totali)


// gjej mesataren e notave
let notat = [8, 9, 10, 7, 5, 6];
let mesatarja = 0;
for (let i=0; i<notat.length; i++){
mesatarja = mesatarja + notat[i]
}
console.log(mesatarja/notat.length)


// gjeje nr me te madh ne array
const numbers = [3, 7, 2, 9, 5, 1, 8];
let maxi = numbers[0];

for (let i =0; i<numbers.length; i++){
  if (numbers[i]>maxi) {
      maxi = numbers[i];
  }
}
console.log('Numri me i madh ne array eshte ' + maxi)

const nr = [3, 7, 2, 9, 5, 1, 8]
let min = nr[0]

for (let i = 0; i<nr.length;i++){
  if (nr[i] < min) {
    min = nr[i];
  }
}
console.log('Numri me i vogel ne array eshte ' + min)


// numero sa nota jane mbi 7
let grades = [8, 9, 10, 7, 5, 6];
let numero = 0;
for (let i = 0; i<grades.length; i++){
  if (grades[i] > 7){
    numero++;
  }
}
console.log(numero)


// shumen e numrave qift
const numrat2 = [1,2,3,4,5,6,7,8,9,10]
let sum = 0;
for (let i =0; i<numrat2.length; i++){
  if (numrat2[i] % 2 ==0)
  sum = sum + numrat2[i];
}
console.log(sum)

// tabela e shumzimit me 7
const num = 7;

for (let i = 1; i<=10; i++){
    console.log(num + ' x ' + i + ' = ' + num * i)
}

// detyra 1
const notat = [8, 5, 10, 7, 9, 6];
let mesatarja = 0;
let maxi = notat[0];
let min = notat[0]
let totali = 0;

//mesatarja
for (let i=0; i<notat.length; i++){
mesatarja = mesatarja + notat[i]
}
console.log(mesatarja/notat.length)

// maximum
for (let i =0; i<notat.length; i++){
  if (notat[i]>maxi) {
      maxi = notat[i];
  }
}
console.log('Numri me i madh ne array eshte ' + maxi)

// minimumi
for (let i = 0; i<notat.length;i++){
  if (notat[i] < min) {
    min = notat[i];
  }
}
console.log('Numri me i vogel ne array eshte ' + min)

//shuma
for (let i=0; i<notat.length; i++){
  totali = totali + notat[i]
}
console.log(totali)


// detyra 2
function makina() {
    let makina = prompt('Vendosni moshen tuaj')
    if (makina < 18){
      alert('Më vjen keq, jeni shumë i ri për t’i dhënë kësaj makine. Po fiket.')
    } else if (makina == 18){
      alert ('Urime për vitin tuaj të parë të drejtimit të makinës. Shijojeni udhëtimin!')
    } else {
      alert('Duke u ndezur. Shijojeni udhëtimin!')
    }
}
makina()



// while - kontrollon vetem kushtin + duhet i++ or whatever

let i =0;
while (i<5) {
  console.log('Numri ' + i)
  i++;
}

let kuptova = false;
let tentativa = 0;

while (!kuptova) {
  tentativa++;

  console.log('Tentativa ' + tentativa)

  if (tentativa === 3){
    kuptova = true;
  }

}

let isAdmin = false;
let countLogin = 0;

while (!isAdmin){
  console.log('Provo prape ' + countLogin)
  
  countLogin++;

  if (countLogin === 3){
    isAdmin = true;
    console.log('Tani je admin')
  }

}

// do while
let count = 1;
do {
  console.log('Ekzekutohet kodi.... ' + count)
  count++;
} while (count < 5)


// let answer;
// do {
//   answer = prompt ('Your answer yes/no');
// } while (answer === 'yes')
// console.log ('Finish');


// let number;
// do {
//   number = prompt('Shkruaj nje numer mes 1 dhe 10');
// } while (number < 1 || number > 10);
// console.log('U kry')

// printo hello world tri here duke perdorur for loop, while loop dhe do while
let numro = 0;
for (i=0; i<3; i++){
  console.log('Hello World for loop ' + numro)
  numro++;
}

let numro2 = 0;
while (numro2<3){
  console.log('Hello World while loop ' + numro2)
  numro2++
}

let numro3 = 0;
do {
  console.log('Hello World do while loop ' + numro3)
  numro3++;
} while (numro3 < 3)




// numerim me while nga 1 deri ne 10
let j = 1;
while(j<=10) {
  console.log(j)
  j++;
}

// numerim zbrites nga 10 deri ne 1 me while
let x = 10;
while (x>=1){
  console.log(x)
  x--;
}

// shuma e ele. brenda nje array
let nums = [3, 7, 2, 8, 5];
let totali = 0;
let y = 0;
while (y < nums.length) {
  totali = totali + nums[y];
  y++;
}
console.log(totali);



// forEach - metode e array-it qe mundeson ekzekutimin e nje funksioni tek secili
// element i array-i
// eshte si nje lloj zevendesimi i for loop per array-s
let students = ['Besniku', 'Mbresa', 'Flamuri'];
students.forEach(function(item, index, array){
    console.log('item', item)
    //console.log('index', index)
    //console.log('array', array)
})


// printo numrat 10 20 39
let numbers = [10, 20, 30];
numbers.forEach(function(item, index, array){
  console.log(item)
})


// printo ele. dhe indeksin
const frutat = ['molle', 'dardhe', 'banane'];
frutat.forEach(function(item, index, array){
  console.log('', index, '', item)
})

// frutat.forEach(function(item, index, array){
//   console.log('item', item + ' eshte pjese e ', array)
// })


frutat.forEach(function(item, index, array){
    console.log(item + ' eshte pjese e ' + array)
})

let studentat = ['Besniku', 'Mbresa', 'Flamuri', 'Valmira'];
studentat.forEach(function(item, index, array){
  console.log('Tani', item)
  console.log('Pas tij', array[index+1])
})

studentat.forEach(function(item, index, array){
  const next = array[index + 1];

  if (next === undefined){
    console.log(item + ' eshte i fundit');
  } else {
    console.log('Pas ' + item + ' vjen ' + next);
  }
})

const products = [
  {name: 'laptop', price: 1000},
  {name: 'keyboard', price: 100},
  {name: 'TV', price: 500}
]

// printo laptopi, keyboard, tv
products.forEach(function(item, index, array){
  console.log(item.name + ' kushton ' + item.price + ' euro')

  const next1 = array[index + 1];

  if (next1 === undefined){
    console.log(item.name + ' eshte i fundit');
  } else {
    console.log('Pas ' + item.name + ' vjen ' + 'produkti me vlere ' + next1.price);
  }

})







// social media app
let database = [
  {
    username: "ari123",
    password: "1234",
    email: "ari@gmail.com",
    isAdmin: true,

    login: function () {
      console.log(`Welcome back, ${this.username}!`);
    }
  },

  {
    username: "elona_g",
    password: "abcd",
    email: "elona@gmail.com",
    isAdmin: false,
    //2) Welcome Message
    login: function () {
      console.log(`Welcome back, ${this.username}!`);
    }
  },

  {
    username: "benny",
    password: "pass123",
    email: "benny@gmail.com",
    isAdmin: false,

    login: function () {
      console.log(`Welcome back, ${this.username}!`);
    }
  }
];


const newsfeed = [
  {
    username: "ari123",
    timeline: "Dita e parë në kodim!",
    likes: 12,
    comments: ["Bravo!", "Suksese!"]
  },

  {
    username: "elona_g",
    timeline: "Pushimet në det...",
    likes: 45,
    comments: ["Shumë bukur"]
  },

  {
    username: "benny",
    timeline: "Kush luan futboll sot?",
    likes: 5,
    comments: ["Unë!", "Ku takohemi?"]
  },

  {
    username: "ari123",
    timeline: "Sapo mbarova projektin e ri.",
    likes: 30,
    comments: ["Super punë"]
  },

  {
    username: "tech_guy",
    timeline: "Lajmet e fundit nga teknologjia.",
    likes: 100,
    comments: ["Interesante"]
  }
];

const usernamePrompt = prompt("Shkruaj username:");
const passwordPrompt = prompt("Shkruaj password:");

//1) Login


//// 8) Admin Check Function
// function isUserAdmin (username) {
//   for (let i = 0; i<database.length; i++){
//     let dbUser = database[i];
//     if (dbUser.username === username){
//       if (dbUser.isAdmin){
//         console.log('Access Granted')
//       } else {
//         console.log('Access not Granted')
//       }
//     }
//   }
// }

const isUserAdmin = (username) => {
  for (let i = 0; i<database.length; i++){
    let dbUser = database[i];
    if (dbUser.username === username){
      if (dbUser.isAdmin){
        console.log('Access Granted')
      } else {
        console.log('Access not Granted')
      }
    }
  }
}

let currentUser = null;
database.forEach(function(user){
  
  if (user.username === usernamePrompt && user.password === passwordPrompt ) {
      currentUser = user;
      currentUser.login()
  }

})

// 3) Show all posts
if (currentUser !== null) {

    let option = prompt(
        "Choose an option:\n" +
        "1. Show all posts\n" +
        "2. Show my posts\n" +
        "3. Add post\n" +
        "4. Like first post\n" +
        "5. Check admin\n" +
        "6. Comment on first post"
    );

    switch(option){

        case '1':
    newsfeed.forEach(function(item){
    console.log('Postimi i :', item.username, '; Timeline i tyre eshte: ', item.timeline);
            });
            break;

        case '2':
            // Show only my posts
            for(let i = 0; i < newsfeed.length; i++){
                if (newsfeed[i].username === currentUser.username){
                    console.log(
                        'This is my newsfeed: ',
                        newsfeed[i].timeline
                    );
                }
            }
            break;
        case '3' :
          // 5) Add a new post
let newPost = prompt('New Post:');

let newObject = {
  username: 'New User',
  timeline: newPost,
  likes: 0,
  comments: []
}
newsfeed.push(newObject);
console.log(newsfeed);
        break;

        case '4':
          // 6) Like the first post
newsfeed[0].likes = newsfeed[0].likes + 1;
console.log(newsfeed[0]);
        break;

        case '5' :
          isUserAdmin(currentUser.username)
        break;

        case '6': 
        // 7) Add a comment to the first post
let newComment = prompt ('Shto nje comment');
newsfeed[0].comments.push(newComment)
console.log(newsfeed[0])
      break;
      default:
        console.log('exit')
    }
}

// git add . - add all
// git commit -m "" - push dhe koment



let database = [
  {
    username: "ari123",
    password: "1234",
    email: "ari@gmail.com",
    isAdmin: true,

    login: function () {
      console.log(`Welcome back, ${this.username}!`);
    }
  },

  {
    username: "elona_g",
    password: "abcd",
    email: "elona@gmail.com",
    isAdmin: false,
    //2) Welcome Message
    login: function () {
      console.log(`Welcome back, ${this.username}!`);
    }
  },

  {
    username: "benny",
    password: "pass123",
    email: "benny@gmail.com",
    isAdmin: false,

    login: function () {
      console.log(`Welcome back, ${this.username}!`);
    }
  }
];


const newsfeed = [
  {
    username: "ari123",
    timeline: "Dita e parë në kodim!",
    likes: 12,
    comments: ["Bravo!", "Suksese!"]
  },

  {
    username: "elona_g",
    timeline: "Pushimet në det...",
    likes: 45,
    comments: ["Shumë bukur"]
  },

  {
    username: "benny",
    timeline: "Kush luan futboll sot?",
    likes: 5,
    comments: ["Unë!", "Ku takohemi?"]
  },

  {
    username: "ari123",
    timeline: "Sapo mbarova projektin e ri.",
    likes: 30,
    comments: ["Super punë"]
  },

  {
    username: "tech_guy",
    timeline: "Lajmet e fundit nga teknologjia.",
    likes: 100,
    comments: ["Interesante"]
  }
];

const usernamePrompt = prompt("Shkruaj username:");
const passwordPrompt = prompt("Shkruaj password:");

//1) Login


//// 8) Admin Check Function
// function isUserAdmin (username) {
//   for (let i = 0; i<database.length; i++){
//     let dbUser = database[i];
//     if (dbUser.username === username){
//       if (dbUser.isAdmin){
//         console.log('Access Granted')
//       } else {
//         console.log('Access not Granted')
//       }
//     }
//   }
// }

const isUserAdmin = (username) => {
  for (let i = 0; i<database.length; i++){
    let dbUser = database[i];
    if (dbUser.username === username){
      if (dbUser.isAdmin){
        console.log('Access Granted')
      } else {
        console.log('Access not Granted')
      }
    }
  }
}

let currentUser = null;
database.forEach((user) => {
  
  if (user.username === usernamePrompt && user.password === passwordPrompt ) {
      currentUser = user;
      currentUser.login()
  }

})

// 3) Show all posts
if (currentUser !== null) {

    let option = prompt(
        "Choose an option:\n" +
        "1. Show all posts\n" +
        "2. Show my posts\n" +
        "3. Add post\n" +
        "4. Like first post\n" +
        "5. Check admin\n" +
        "6. Comment on first post"
    );

    switch(option){

        case '1':
    newsfeed.forEach((item) => {
      console.log('Postimi i :', item.username, '; Timeline i tyre eshte: ', item.timeline); });
            break;

        case '2':
            // Show only my posts
            for(let i = 0; i < newsfeed.length; i++){
                if (newsfeed[i].username === currentUser.username){
                    console.log(
                        'This is my newsfeed: ',
                        newsfeed[i].timeline
                    );
                }
            }
            break;
        case '3' :
          // 5) Add a new post
let newPost = prompt('New Post:');

let newObject = {
  username: 'New User',
  timeline: newPost,
  likes: 0,
  comments: []
}
newsfeed.push(newObject);
console.log(newsfeed);
        break;

        case '4':
          // 6) Like the first post
newsfeed[0].likes = newsfeed[0].likes + 1;
console.log(newsfeed[0]);
        break;

        case '5' :
          isUserAdmin(currentUser.username)
        break;

        case '6': 
        // 7) Add a comment to the first post
let newComment = prompt ('Shto nje comment');
newsfeed[0].comments.push(newComment)
console.log(newsfeed[0])
      break;
      default:
        console.log('exit')
    }
}

// git add . - add all
// git commit -m "" - push dhe koment



// declared functions

function greet(){
  return 'Hello World'
}
console.log(greet())

// function expression
const greet2 = function() {
  return 'Hello World2'
}

// arrow function
const greet3 = () => 'Hello Wolrd 3'
greet3()


const add = (a,b) => a * b

// so with parameters
const add1 = (a,b) => a * b

// no parameters
const greet4 = () => 'Hello Wolrd 3'

// one parameter
const hello = name => 'hello ${name}'

// multi line
const describe = (user) => {
  const greeting = 'hello ' + user.name
  const age = `hello ${user.age}`
  
  return greeting + age;
}


const sayHi = () => 'Hi!'

const add4 = (a,b) => a + b

const square = (n) => n * n

const isEven = (num) => num % 2 == 0

const repeat = (str) => str + str







// DOM
// gjej ele. ne id e dhene
document.getElementById('id e elementit');

// gjen te gjitha ele. me nje klase
document.getElementsByClassName('emri i klases');

// gjen ele me nje tag, si p, div, h1 etj/
document.getElementsByTagName('p')


// metodat e reja

//gjej ele. e pare qe perputhet me nje css selector
document.querySelector('.info') // i pari me klasen info; class="info"
document.querySelector('#title') // i pari me id title;
document.querySelector('p') // i pari <p> ne faqe
document.querySelector('div > p') // <p> te pare brenda


// console.log('Class info', document.querySelector('.info'))
// console.log(document.querySelector('p'))
// console.log(document.querySelector(`#paragrafi`))
// console.log(document.querySelector(`.paragrafi-class`))

// GJEN TE GJITHA ELE. QE PERPUTHEN ME ATA SELEKTOR
// console.log(document.querySelectorAll('.info'))

// document.querySelectorAll('.info').forEach((item) => (console.log(item)))




// manipulimi i elementeve
// console.log(document.querySelector('h1').innerHTML)

const h1 = document.querySelector('h1')
console.log(h1)
h1.textContent = 'Nuk eshte ora e 11te'

const p = document.querySelector(`p`)
p.innerHTML = '<strong> <em> Ky eshte paragraf bold the italic <em></strong>'



// stilet

p.style.color = 'red'
p.style.backgroundColor = 'black'

p.style.padding = '20px'

p.style.border = '3px solid'


// shto/hiq klasa

const div = document.querySelector('div');
// div.classList.add('div-class')
// div.classList.remove('div-class')
div.classList.toggle('div-class')


const otherImgUrl = 'data:image/jpeg;base64,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'

const img = document.querySelector('img')

console.log(img)
img.setAttribute('src', otherImgUrl)

console.log('Source of image: ', img.getAttribute('src'))
// img.removeAttribute('src')









// event listeners
const butoni = document.querySelector('button')
// butoni.addEventListener('click', () => 
//     console.log('Butoni u klikua'))
const imazhi2 = 'data:image/jpeg;base64,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'
butoni.addEventListener('click', () =>
 img.setAttribute('src', imazhi2))


// div.addEventListener('scroll', () => {
//    console.log('Heyyyyy!!!') 
// })

// button.addEventListener('click', (event) => {
//     console.log('Ku po klikojme', event.target)
//     console.log('qfare tipi te eventit kemi', event.type)
//     console.log('Kordinata e mausit', event.clientX)
// })


// const sayHi = () => console.log('Pershendetje');

// butoni.addEventListener('click', sayHi);


const inputEl = document.querySelector('input')
// inputEl.addEventListener('input', (event) => {
//     //  console.log(event.target.value)
//     let inputValue = event.target.value
//     butoni.textContent = inputValue;
// })


const paragraphEl = document.querySelector('paragrafi')

let inputValue;
inputEl.addEventListener('input', (event) => {
    inputValue = event.target.value
})

const changeContents = () => {
    paragraphEl.textContent = inputValue;
}
butoni.addEventListener('click', changeContents)




// // const buton2 = document.querySelector('#butoni');
// // const paragrafi = document.querySelector('p');

// // // let count = 0;
// // // buton2.addEventListener('click', () => {
// // //     count++
// // //     paragrafi.textContent = count;
// // // })


// // buton2.textContent = 'Dont click'
// // buton2.style.color = 'white'
// // buton2.style.backgroundColor = 'green'


// // const inputEl = document.querySelector('input')
// // inputEl.addEventListener('input', (event) => {
// //     let value = event.target.value
// //     paragrafi.textContent = value
// // })


// // buton2.addEventListener('click', (input) =>{
// //     buton2.textContent = inputEl.value;
// // })


// // 





// // krijimi i ele. ne menyre dinamike

// // createElement('Tagu i ele.');
// // textContent -> vendos textin brenda
// // appendChild -> e bashkangjit ne faqe, ne fund te body ose nje contejneri tjeter div/span etj.


// const newElement = document.createElement('p')
// newElement.textContent = 'paragrafi i ri'
// document.body.appendChild(newElement)


// const card = document.createElement('div')
// card.className = 'container'
// card.id = 'first-card'
// card.innerHTML = '<p>This is a card</p>'
// document.body.appendChild(card)


// // span ka nje tekst, hyn brenda card

// const spani = document.createElement('span')
// spani.className = 'span'
// spani.id = 'first-span'
// spani.innerHTML = '<p><b>Kjo hyn brenda card<b></p>'
// card.appendChild(spani)
// //card.prepend(spani) // e qet perpara
// //card.remove('p') //fshin paragrafet
// spani.remove() // fshin spanin


const addBtn = document.querySelector('#addBtn');
const removeBtn = document.querySelector('#removeBtn');

addBtn.addEventListener('click', () => {
    const newEl = document.createElement('p');
    newEl.textContent = 'Paragrafi nga butoni shto'
    newEl.id = 'newElement';
    document.querySelector('.btn-container'.appendChild())
});

removeBtn.addEventListener('click', () => {
    document.querySelector('.newElement'.remove())
})




