// Primitive
    // immutable

        let name2 = "Princess"
        name2[1] = "f" //This will either throw an error , or just will have no effect on the string
        console.log(name2)

        let numOne = 23;
        let numTwo = 23;
        console.log(numOne === numTwo)

        let str1 = "String 1"
        let str2 = "String 2"
        console.log(str1  === str2)

        let lightOn = true
        let lightOff = false
        console.log(lightOn === lightOff)


// Non - primitive
    // Modifiable

        let nums = [1,2,4,73,32];
        nums[0] = 24332; //Modification is allowed
        console.log(nums)
    // Non Comparable

        let num1 = [1,2,3]
        let num2 = [1,2,3]
        console.log(num1 == num2) //prints false

        let userOne = {
            name:"Brian",
            role:"Developer",
            age:22
        }

        let userTwo = {
            name:"Brian",
            role:"Developer",
            age:22
        }


        console.log(userOne == userTwo)

//Number
    // Math Object


        const PI = Math.PI                      // PI value using Math
        console.log(PI)                         

        console.log(Math.floor(2.43))           // Rounding 
        console.log(Math.ceil(2.43))            
        console.log(Math.round(3.43))           
        console.log(Math.round(3.53))          

        console.log(Math.min(2,3,2,4,5))        // Minimum and Maximum
        console.log(Math.max(2,1,34,43))        

        const randNum  = Math.random()          // Random Numbers between any range
        console.log(randNum)                   
        console.log(Math.floor(Math.random()*11)) 

        console.log(Math.abs(-23))              // Absolute values
        console.log(Math.abs(543))

        console.log(Math.sqrt(100))             // Square - root
        
        console.log(Math.pow(23,2))             // power 

        console.log(Math.LN2)                   // Natural logarithmic
        console.log(Math.LN10)
        
        console.log(Math.sin(0))                // 0        
        console.log(Math.sin(60))               // 0        
    

//String 
    // concatination
        let fName1 = "Abhishek" , lName1 = "Gupta" , space = " ";
        let FullName = fName1 + space + lName1;
        console.log(FullName)
    
    // Template literals (Template strings) -> Its is implemented using backticks

        let intro = `Hey! my name is ${fName1}`
        console.log(intro);