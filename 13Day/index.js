// Console Object method
    // console.log
    console.log('30 Days of javascript')
    console.log('%d %s of javascript',30,'Days');

    console.log('%cHere i am happy','color:green');

    // console.warn
    console.warn("This is a wrong practice"); //Used to give warning about the version deprecation and bad practices

    // console.error
    console.error("This is an error message"); //Used to show an error message

    // console.table
    const users = ['Abhishek','Rahul','Raj']; //User to table out of a given set of data in the console
    console.table(users);

    // console.time
    const countries = [ //Starts a timer you can use to track how long an operation takes.
        ['Finland', 'Helsinki'],
        ['Sweden', 'Stockholm'],
        ['Norway', 'Oslo']
        ]

        console.time('Regular for loop')
        for (let i = 0; i < countries.length; i++) {
        console.log(countries[i][0], countries[i][1])
        }
        console.timeEnd('Regular for loop')

        console.time('for of loop')
        for (const [name, city] of countries) {
        console.log(name, city)
        }
        console.timeEnd('for of loop')

        console.time('forEach loop')
        countries.forEach(([name, city]) => {
        console.log(name, city)
        })
        console.timeEnd('forEach loop')  
    
        // console.info
        console.info('30 Days Of JavaScript challenge is trending on Github')
        console.info('30 Days Of fullStack challenge might be released')
        console.info('30 Days Of HTML and CSS challenge might be released')

        // console.assert
        console.assert(4 > 3, '4 is greater than 3') // no result
        console.assert(3 > 4, '3 is not greater than 4') // Assertion failed: 3 is not greater than 4

        // console.group
        const names = ['Asabeneh', 'Brook', 'David', 'John']
        const countries2 = [
        ['Finland', 'Helsinki'],
        ['Sweden', 'Stockholm'],
        ['Norway', 'Oslo']
        ]
        const user = {
        name: 'Asabeneh',
        title: 'Programmer',
        country: 'Finland',
        city: 'Helsinki',
        age: 250
        }
        const users2 = [
        {
            name: 'Asabeneh',
            title: 'Programmer',
            country: 'Finland',
            city: 'Helsinki',
            age: 250
        },
        {
            name: 'Eyob',
            title: 'Teacher',
            country: 'Sweden',
            city: 'London',
            age: 25
        },
        {
            name: 'Asab',
            title: 'Instructor',
            country: 'Norway',
            city: 'Oslo',
            age: 22
        },
        {
            name: 'Matias',
            title: 'Developer',
            country: 'Denmark',
            city: 'Copenhagen',
            age: 28
        }
        ]

        console.group('Names')
        console.log(names)
        console.groupEnd()

        console.group('Countries')
        console.log(countries2)
        console.groupEnd()

        console.group('Users')
        console.log(user)
        console.log(users2)
        console.groupEnd()

        // console.count()
        const func = () => {
        console.count('Function has been called')
        }
        func()
        func()
        func()// It prints the number of times the console.count() is called.

        // console.clear
        // The console.clear() cleans the browser console.

