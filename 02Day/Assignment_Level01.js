// 1.
let challenge = "30 Days of JavaScript";

// 2.
console.log(challenge)

// 3.
console.log(challenge.length)

// 4.
console.log(challenge.toUpperCase());

// 5.
console.log(challenge.toLowerCase());

// 6.
console.log(challenge.split(" ")[0]);
console.log(challenge.substr(0,2));
console.log(challenge.substring(0,2));

// 7.
console.log(challenge.slice(2));

// 8.
console.log(challenge.includes("Script"));

// 9.
console.log(challenge.split());

// 10.
console.log(challenge.split(" "));

// 11.
let companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"
console.log(companies.split(","));

// 12.
console.log(challenge.replace("JavaScript","Python"))

// 13.
console.log(challenge.charAt(15))

// 14.
console.log(challenge.charCodeAt('J'));

// 15.
console.log(challenge.indexOf('a'));

// 16.
console.log(challenge.lastIndexOf('a'))

// 17.
let challenge2 = 'You cannot end a sentence with because because because is a conjunction'
console.log(challenge2.indexOf("because"));

// 18.
console.log(challenge2.lastIndexOf("because"));

// 19.
console.log(challenge2.search("because"));

// 20.
console.log(challenge.trim());

// 21.
console.log(challenge.startsWith("30"))

// 22.
console.log(challenge.endsWith("script"))

// 23.
console.log(challenge.match(/a/gi))

// 24.
let challenge3 = "";
challenge3 = challenge3.concat("30 Days of","Javacript");
console.log(challenge3);

// 25.
console.log(challenge.repeat(2))