// Regular Expression
        // *A regular expression takes two parameters . One required search pattern and an optional flag.

        // Pattern 
            // A pattern can be some sort of text or any kind of pattern which some sort of similarity.For instance the word spam in an email could be a pattern we are
            // interested to look for in an email or a phone number format number might be our interest to look for.


        // Flag
            // Flags are optional parameters in a regular expression which determine the types of searching .Let us see some of the flags:
            // g: a global flag which means looking for a pattern in whole text
            // i: case insensitive flag(it searches for both lowercase and uppercase)
            // m: multiline

        // Creating a pattern with RegExp
            // without any flags
            let pattern = 'love';
            let regEx = new RegExp(pattern)

            // with flags
            let pattern1 = 'love'
            let flag= 'gi'
            let regEx2 = new RegExp(pattern1,flag)

            // Declaring a regex pattern using RegExp Object
            let regEx3 = new RegExp('love' , 'gi');

            // Creating a pattern without RegExp constructor
            let regex4 = /love/


            let sentence = "Hey their i love u soo ve much"
            if(sentence.match(regex4)) {
                console.log(sentence.match(regex4))
            }else {
                console.log("Not found")
            }

            let sentence2 = "I love javascript and will do programming in it and will become a good developer";
            let changeSentence = sentence2.replace(/javascript/,"python").replace(/good/i,"Expert")
            console.log(changeSentence)

            const pattern5 = /[Aa]pple/g    // A or a
            const sentence5 = "Apple is a healthy fruit.I prefer having apple in the morning";
            console.log(sentence5.match(pattern5));

            const pattern6 = /[Aa]pple|[Bb]anana/g // this square bracket mean either A or a
            const txt1 = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. Banana is easy to eat too.'
            const matches = txt1.match(pattern6)

            console.log(matches)  

            // for digits
            const pattern7 = /\d/g
            const sentence11 = "My name is Abhishek Gupta and i live in noida sector 49 barola .I was born on 11 january 2003.";
            console.log(sentence11.match(pattern7));