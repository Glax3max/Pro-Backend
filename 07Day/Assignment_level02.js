const prompt = require('prompt-sync')({ sigint: true });


// 1. Equation for a linear equation where (a,b,c,x is given and we have to give the corresponding y value)
function solveLinEquation(a,b,c,x) {
        let y = (a*x +c)/b;
        console.log(y);
        return -1*y;
}


// 2.Function calculate the roots of the quadratic equation

function solveQuadEquation(a=0,b=0,c=0) {
    let root1 = -1*b + Math.sqrt(Math.pow(b,2) - 4*a*c);
    let root2 = -1*b - Math.sqrt(Math.pow(b,2) - 4*a*c);

    if(root1/2 == root2/2) {
        return {result:root1/2};
    }else{
        return {result1:root1/2,result2:root2/2};
    }
}

// console.log(solveQuadEquation(1, -1, 0));

// 3.Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArr(arr) {
    for(a of arr) {
        console.log(a)
    }
}

// printArr([1,2,3,4,5,6])


//4. Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object

function showDateTime() {
    let date = new Date();
    console.log(`${date.getMonth()}/${date.getDate()}/${date.getFullYear()} ${((String)(date.getHours()).length == 1)?'0'+date.getHours():date.getHours()}:${((String)(date.getMinutes()).length == 1)?'0'+date.getMinutes():date.getMinutes()}`);
}

// showDateTime();

//5. Declare a function name swapValues. This function swaps value of x to y.

function swapValues(x = 0 , y = 0) {
    let temp  = x;
    x = y;
    y = temp;
    console.log(`x is ${x} ${'\n'}y is ${y}`);
}

// swapValues(4,2);

// 6. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

function reverseArray(arr) {
    let arrSize = arr.length;
    for(let i = 0;i<arrSize/2;i++) {
        let temp = arr[i];
        arr[i] = arr[arrSize-1-i];
        arr[arrSize-1-i] = temp; 
    }
    return arr;
}

// console.log(reverseArray([1,2,3,4,5,6]));

// 7. Write a function which takes any number of arguments and return the sum of the arguments

function sumOfArguments() {
    let sum = 0;
    for(a of arguments) {
        sum += a;
    }
    return sum;
}


console.log(sumOfArguments(1,2,3,4));
