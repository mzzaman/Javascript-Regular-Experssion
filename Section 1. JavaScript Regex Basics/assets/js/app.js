// JavaScript Regular Expression;

let re = new RegExp("hi");
console.log(re);

let re2 = /hi/;
let result = re2.test("hi John");

console.log(result);

// 1) The ignore flag (i)
const ignoreFlag = /hi/i;
const show = ignoreFlag.test("Hi John");
console.log(show); // true;

let reIgnore = new RegExp("hi", "i");
let ignoreShow = reIgnore.test("Hi John");
console.log(ignoreShow); // true;

// 2) The global flag (g)
let message = "Hi, are you there? hi, HI...";
let element = /hi/gi;
let matches = [];
let match;
do {
  match = element.exec(message);
  if (match) {
    matches.push(match);
  }
} while (match != null);
console.dir(matches);

// Searching strings

let str = "Are you Ok? Yes, I'm Ok";
let resultOk = str.match(/Ok/gi);
console.log(resultOk);

// Replacing strings;
let replaceResult = str.replace(/Ok/gi, "Fine");
console.log(replaceResult);

// Regular Expression: Character Classes

let phone = "+1-(408)-555-0105";
let res = /\d/;

console.log(phone.match(res));

let res2 = /\d/g;
let number = phone.match(res2);
let phoneNumber = number.join("");
console.log(phoneNumber);

let strTwo = "02 is oxygen";
let reTwo = /\w\d/g;
console.log(strTwo.match(reTwo));

let strThree = "ES6 Tutorial";
let reThree = /ES\d/g;
console.log(strThree.match(reThree));

// Regular Expression: Anchors;
let language = "Javascript";
console.log(/^J/.test(language)); // matches the first character;
console.log(/t$/.test(language)); // matches the last character;

// Regular Expression: Word Boundaries

console.log("Hello, JS!".match(/\bJS\b/));
console.log("Hello, JSscript!".match(/JS/));

console.log("ES 2015".match(/\b\d\d\d\d\b/));

let strFour = "I start coding JS at 05:30 AM";
console.log(strFour.match(/\b\d\d:\d\d\b/));
