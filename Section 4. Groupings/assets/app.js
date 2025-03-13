// JavaScript Regex: Capturing groups
const path = "posts/10";
const pattern = /\w+\/\d+/;

const match = path.match(pattern);
console.log(match);

const path2 = "posts/10";
const pattern2 = /(\w+)\/(\d+)/;

const match2 = path2.match(pattern2);
console.log(match2[0]);

console.log(match2[1]);

console.log(match2[2]);

const path3 = "posts/10";
const pattern3 = /(?<resource>\w+)\/(?<id>\d+)/;

const match3 = path3.match(pattern3);
console.log(match3);

for (const name in match3.groups) {
  console.log(name);
}

const pathFull = "posts/2025/02/18";
const patternFull =
  /(?<resource>\w+)\/(?<year>\d{4})\/(?<month>\d{2})\/(?<day>\d{2})/;

const matchFull = pathFull.match(patternFull);
console.log(matchFull.groups);

const { day, month, resource, year } = matchFull.groups;
console.log(day);
console.log(month);
console.log(resource);
console.log(year);

// Backreferences

const s = "JavaScript JavaScript is awesome";
const patt = /(\w+)\s+\1/;
const resultBack = s.replace(patt, "$1");
console.log(resultBack);

const words = ["apple", "orange", "strawberry"];
const patte = /\b\w*(\w)\1\w*\b/;

for (const word of words) {
  const result = word.match(patte);
  if (result) {
    console.log(result[0], "->", result[1]);
  }
}

// Regex Alternation
const time = "05:30 31:62 23:45 26:99";
const pattern4 = /([01]\d|2[0-3]):[0-5]\d/g;
const match4 = time.match(pattern4);

console.log(match4);
