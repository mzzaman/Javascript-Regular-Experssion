// Regular Expression: Sets and Ranges;
let str = "How cats, rats, and bats became Halloween animals";
let re = /[cbr]ats/g;
let results = str.match(re);

console.log(results);

let result = "It is 🍎".match(/[🍎🍅🍓]/);
console.log(result);

let str2 = "🍎🍅🍓";

for (let i = 0; i < str2.length; i++) {
  console.log(str2.charCodeAt(i));
}

let result2 = "It is 🍎".match(/[🍎🍅🍓]/u);
console.log(result2);
