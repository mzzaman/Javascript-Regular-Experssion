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
