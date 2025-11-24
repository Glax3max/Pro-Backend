const prompt = require('prompt-sync')({ sigint: true });

let numberOfIds  = Number(prompt("Type in the Number of Ids u would like to generate : "));
let numberOfChars  = Number(prompt("Type in the Number of characters each Id must have : "));

let chars = "abcdefghijklmnopqrstuvwxyz";
let numbs = "1234567890"
let charsArray = chars.split('')
let numbsArray = numbs.split('')

function userIdGeneratedByUser(numberOfIds,numberOfChars) {
    for(let j = 0;j<numberOfIds;j++) {
        let id = "";
        for(let i = 0;i<numberOfChars;i++) {
            if(Math.floor(Math.random()*2)) {
                id += charsArray[Math.floor(Math.random()*26)];
            }else{
                id += numbsArray[Math.floor(Math.random()*10)];
            }
        }
        console.log(id);
    }
}

userIdGeneratedByUser(numberOfIds,numberOfChars);