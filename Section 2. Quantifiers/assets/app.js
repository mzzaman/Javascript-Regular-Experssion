// Regular Expression: Quantifiers
let str = "ECMAScript 2020";

let find = /\d{4}/;
let result = str.match(find);
console.log(result);

let strRange = "The official name of ES11 is ES2020";
let findRange = /\d{2,4}/g;
let resultRange = strRange.match(findRange);
console.log(resultRange);

// Shorthands;
let phone = "+1-(408)-555-0105";
let resultS = phone.match(/\d+/g);
console.log(resultS);

let strQ = "Is this color or colour?";
let resultQ = strQ.match(/colou?r/g);

console.log(resultQ);

let strAst = "Javascript is not Java";
let reAst = /Java\w*/g;
let resultAst = strAst.match(reAst);
console.log(resultAst);

// Regular Expression: Non-Greedy Quantifiers

const s = '<button type="submit" class="btn">Send</button>';
const pattern = /".+?"/g;

const resultNon = s.match(pattern);
console.log(resultNon);
