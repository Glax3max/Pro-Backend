// CallBack

const doSomething = callback => {

    setTimeout(()=> {
        const skill = ["Html","java"];
        callback(false,skill);
    },2000)
}

const callback = (err,result) => {
    if(err) {
        console.log(err)
    }else{
        console.log(result);
    }
}

doSomething(callback);

// Promise
    const doSomething2 = new Promise((resolve,reject)=> {
        
        setTimeout(() => {
            const skills = ["Speaker","Leader ship skills","Problem solver"];
            if(skills.length > 4) {
                resolve(skills);
            }else{
                reject("Not skills");
            }
        }, 2000);
    })

    doSomething2.then((result)=> {
        console.log(result);
    })
    .catch((err)=> {
        console.log(err)
    })

// Fetch api
    const url = "https://jsonplaceholder.typicode.com/posts";
    // fetch(url)
    //     .then(respnse => 
    //          respnse.json()
    //     ).then(data=>
    //         // console.log(data)
    //     ).catch(err=> 
    //         console.log(err)
    //     )


// Async and await 
    const square2  = async function(n) {
        return n*n;
    }

    const value2 = await square2(3);
    console.log(value2);

// fetch with async and await
    const fetchData = async () => {
    try {
        const response = await fetch(url)
        const countries = await response.json()
        console.log(countries)
    } catch (err) {
        console.error(err)
    }
    }
    console.log('===== async and await')
    fetchData()
    