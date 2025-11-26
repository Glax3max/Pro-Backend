// Higher Order function
    // Takes other function as parameter (callback function)
    const callBack = (n) => {
        return n ** 2;
    }

    function cube(callback,n) {
        return callback(n)*n;
    }

    console.log(cube(callBack,4)); //"callBack" function is considered as  callback function

    // Returning a function -> function returning another function is also a higher order function
    const higherOrder = n => {
        const doSomething = m => {
            const doWhatEver = t => {
                return 2*n + 3*m + t;
            }
            return doWhatEver;
        }
        return doSomething;
    }

    console.log(higherOrder(2)(3)(10))

    // Using a callback function with forEach
    const numbers = [1,2,3,4,5];
    const sumArray = arr => {
        let sum = 0
        arr.forEach(element => {
            sum += element
        })
        return sum;
    }

    console.log(sumArray(numbers))


    // Setting time -> setInterval , setTimeout

        // Setting Interval using a setInterval function
        function callBackForSetInterval() {
            console.log("Hello")
        }

        // const periodicHello = setInterval(callBackForSetInterval,1000);

       // Setting Interval using a setTimeout function
        function callBackForSetTimeout() {
            console.log("Hello")
        }

        // setTimeout(()=>{
        //     clearInterval(periodicHello);
        //     console.log("Interval cleared after 10 seconds");
        // },1000)

    

    // BuiltIn methods that is used to make looping easy for us and takes a callBack function
        // forEach
        const numbers2 = [1,23,31,43,15]
        let sum = 0;
        const callBackForEach = element =>  {
            sum += element;
        }

        numbers2.forEach(callBackForEach);
        console.log(sum);

        numbers2.forEach(function (element,index,arr) {
            console.log(index,element,arr)
        })

        numbers2.forEach((element,index) => console.log(index+element));
    
        const countries = ['Indiana' , 'Chinana' , 'Japana' , 'Malasia','Korea'];
        countries.forEach(element=> console.log(element.toUpperCase()));

        // Map
        const numbers3 = numbers2.map((element)=>element *= 2);
        const UpperLetterCountry = countries.map((element)=> element.toUpperCase());
        console.log(UpperLetterCountry)
        const upperSlice = countries.map((country)=> country.toUpperCase().slice(0,3));
        console.log(upperSlice)

        // Filter
        const countriesWithana = countries.filter((country)=>country.includes('ana'));
        console.log(countriesWithana);
        const scores = [
            {name:'Abhishek' , score:95},
            {name:'Abhilasha' , score:100},
            {name:'Akansha' , score:15},
            {name:'Avinash' , score:85},
            {name:'sherya' , score:75},
            {name:'Preeti' , score:25},
            {name:'Rahul' , score:53},
            {name:'Dheeraj' , score:42},
        ]

        const scoreAbove80 = scores.filter(score=>score.score > 80);
        console.log(scoreAbove80)
    
    // Reduce
        const numbers5 = [1,2,3,4,5,6,7];
        const sum2 = numbers5.reduce((acc,curr)=>acc+curr,2);
        console.log(sum2)

    // every
        const number6 = [2,4,61,8,20];
        const CheckAllEven = number6.every((number) => number%2 == 0)
        console.log(CheckAllEven);

    // find
        const names12 = ['Shiv','Parwati','Lakshaman','Ram','Hanuman'];
        const firstRam = names12.find((name) => name === 'Ram')
        console.log(firstRam)