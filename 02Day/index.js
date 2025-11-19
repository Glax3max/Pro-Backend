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
    
    // substr(startIndex,length)  &  substring(startIndex,endIndex)
        let str11 = "HelloMello";
        let str11_Substr = str11.substr(2,4);
        let str11_Substring = str11.substring(2,4);
        console.log(str11_Substr);
        console.log(str11_Substring);
    
    // split() -> It takes argument on the basis of the fact that what is going to be our splitting point 
        let str12 = "Going for 4 crore package in hand";
        console.log(str12.split()); //split method without any parameter converts the whole string to an array of size 1.
        console.log(str12.split(" ")); //split method with an argument (" ") converts the string to an array of size no. of space +1;
    
    // trim() -> removes space from the beginning and the end of the string
        let str13 = "   Hello  kill af      ";
        console.log(str13);
        console.log(str13.trim(' '));

    // includes() -> It takes an argument of string and checks if it is present in the given string
        let str14 = "My name is Abhishek and i am going to change the world for good."
        console.log(str14.includes("change"))

    // replace() -> Takes as a parameter the old substring and a new substring
        let str15 = "My name is Abhishek and sooner i will become a grand master on codeforces."
        console.log(str15.replace("sooner","very soon"));
    
    // concat() -> Takes many string and join them 
        let str16 = "";
        str16 = str16.concat(str11,str12,str13,str14);
        console.log(str16);
    
    // startsWith -> It takes a substring as an argument and it checks if the string starts with that specific substring 
        let str17 = "@gmail.com";
        console.log(str17.startsWith("@"));

    // endsWith -> Takes a substring as an argument and it checks if the string ends with that specific substring
        let str18 = "abhishekspps825406@gmail.com"
        console.log(str18.endsWith(".com"))

    // match -> Takes a
        let str19 = "MY ac name is abc abbbbc";
        let re = /ab*c/d
        console.log(str19.match(re));



// Changing the data types
    // String to Int
        let str20 = "123";
        console.log(typeof(str20))
        console.log(typeof(parseInt(str20)))         // parsing method 1.
        console.log(typeof(+str20))                  // parsing method 2.
        console.log(typeof(Number(str20)))           // parsing method 3.
    
    // String to Float
        let str21 = "123.321";
        console.log(typeof str21);
        console.log(typeof parseFloat(str21));       // Parsing method 1.
        console.log(typeof +str21);                  // Parsing method 2.
        console.log(typeof Number(str21));           // Parsing method 3.
    
    // Float to Int
        let num = 9.81;
        console.log(num)
        console.log(parseInt(num))