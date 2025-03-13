// Lookahead
const s = "1 car is 15 feet long";
const pattern = /\d+(?=\s*feet)/;

const match = s.match(pattern);
console.log(match);

// JavaScript Regex Lookbehind

const sentence = "1 computer costs $900";
const patternBehind = /(?<=\$)\d+/;

const matchBehind = sentence.match(patternBehind);
console.log(matchBehind);

// Negative lookbehind

const sNegative = "1 computer costs $900";
const patternNegative = /(?<!\$)\d+/;

const matchNegative = s.match(patternNegative);
console.log(matchNegative);
