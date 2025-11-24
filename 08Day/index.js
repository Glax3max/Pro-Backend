// Objects

    const person = {} //Empty object

    const rectangle = {
        length:20,
        breadth:20,
        area:function (){
            console.log(this.length*this.breadth)
        }
    }

    console.log(rectangle['length']);

    // Object with variable , array and function

    const person2 = {
        firstName:"Abhishek",
        lastName:"Gupta",
        age:23,
        country:"India",
        city:"Noida",
        skills:[
            'web development',
            'Backend',
            'c++',
            'react',
            'nodejs',
            'react',
            'SQL'
        ],
        getFullName:function () {
            return `${this.firstName} ${this.lastName}`;
        },
        number:"+917034524234"
    }

    console.log(person2.getFullName());

    // Getting object keys 
    const keys = Object.keys(person2);
    const values = Object.values(person2);
    console.log("keys: " , keys,"\n","Values :",values);


// Checking for own property
    console.log(person2.hasOwnProperty('name'))
    console.log(person2.hasOwnProperty("firstName"))