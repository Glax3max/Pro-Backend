const prompt = require('prompt-sync')({ sigint: true }); 
// Error_Handling
    // Javascript is a loosely - typed language and we can get run time error while accessing an undefined variable or function
        try{
            // code that may throw an error
        } catch(err) {
            // code to be executed if an error occurs
        } finally {
            // code that will be executed regardless of error occured or not
        }



        // Using throw keyword
        const throwErrorExampleFul = () => {
            let message;
           let x = prompt('Enter a number: ')
            try{
                if(x == '') throw 'empty';
                if(isNaN(x)) throw 'Not a number';
                x = Number(x)
                if(x < 5) {
                    throw 'too low';
                }
                if(x > 10) {
                    throw 'too high';
                }
            }catch(err) {
                console.log(err);
            }
        }

        throwErrorExampleFul();