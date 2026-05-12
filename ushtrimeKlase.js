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



