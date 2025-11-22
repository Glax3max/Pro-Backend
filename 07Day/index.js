// Functions

// normal function
 function CallMyName(name) {
    console.log(`My name is ${name}`)
 }

 CallMyName("Abhishek")

// arrow function

const CallMyName2 = ( name2) =>{
    console.log(name2)
}

CallMyName2("Raj")

// Function with unlimited argument
function sumAllNumbers() {
    console.log(arguments.length)
    let sum = 0;
    for(let i = 0;i<arguments.length;i++) {
        sum += arguments[i];
    }

    console.log(sum)
}

sumAllNumbers(1,2,3,4,5,7);