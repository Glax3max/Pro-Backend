// Destructuring and Spread 
    // Destructuring Arrays

    const arr = [1,2,3]
    let [a,b,c] = arr;
    console.log(a , b , c);

    const name1 = ['Abhishek' , 'HistoryCreater' ,'GuyStrong','Brave','Strong','Intelligent','Hardworking'];
    const [a1,b1,c1] = name1;

    console.log(a1,b1,c1);

    const  users = [{name:"Abhishek",age:21},{name:"Raj",age:23},{name:"Pallav",age:22}];
    const [user1,user2,user3] = users;
    
    console.log(user1,user2,user3);
    
        // Destructuring during iteration

            const countries = [['Finland','Helsinki'],['Sweden','Stockholm'],['Norway','Oslo']];

            for(const [co,ci] of countries) {
                console.log(co,ci);
            }
            
        // Destructuring Objects

            const fullStack = {
                frontEnd:['Html','Css','Javascript'],
                backEnd:['Express','Nodejs'],
                dataBase:['MongoDb','SQL']
            };

            const fullStack2 = {
                frontEnd:'Html',
                backEnd:'Javascript',
                dataBase:'MongoDb'
            };

            let {frontEnd,backEnd,dataBase} = fullStack;

            console.log(frontEnd);
            console.log(backEnd);
            console.log(dataBase);

            const rectangle = {
                width:23,
                height:34
            }

            const calculateParameter = ({width,height}) => {
                return 2*(width,height);
            }

            console.log(calculateParameter(rectangle))


            // big object
            const person = {
                firstName:"Abhsihek",
                lastName:"Gupta",
                age:23,
                country:"India",
                job:"revolutionary industrialist imphasis on quality on scale for the globe",
                skills:['Leadership','Promotion and sales','Development','Operation','Strategiest'],
                language:['English','Hindi','Sanskrit']
            };


            const getPersonInfo = ({
                firstName,
                lastName,
                age,
                country,
                job,
                skills,
                language
            }) => {
                const formattedSkills = skills.slice(0).join(',');
                const formattedLanguages = language.slice(0).join(',');

                let personInfo = `${firstName} ${lastName} lives in ${country}. He is ${age} years old.He is an ${job}. He teaches ${formattedSkills.length} .He speaks ${formattedLanguages} and a little bit of ${language[2]}.`

                return personInfo;
            }
            console.log(getPersonInfo(person));

            // Spread Operator
            const arr1 = [1,2,3,4,5];
            const arr1Copy = [...arr1];
            const arr2 = [5,4,2,53,1];
            const arr2Copy = [...arr2];
            const arr3 = [...arr1,...arr2];
            console.log(arr3)