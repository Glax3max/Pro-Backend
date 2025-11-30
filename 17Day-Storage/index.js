    const { LocalStorage } = require('node-localstorage');
    const localStorage = new LocalStorage('./scratch'); // './scratch' is the directory to store data

    localStorage.setItem('myKey', 'myValue');
    localStorage.setItem('myKe1y', 'myValue');
    localStorage.setItem('myKe2y', 'myValue');
    const value = localStorage.getItem('myKey');
    console.log(value); // Output: myValue
    localStorage.removeItem('myKey');
    localStorage.clear();



    // Important function


    // localStorage - to display the localStorage object
    // localStorage.clear() - to remove everything in the local storage
    // localStorage.setItem() - to store data in the localStorage. It takes a key and a value parameters.
    // localStorage.getItem() - to display data stored in the localStorage. It takes a key as a parameter.
    // localStorage.removeItem() - to remove stored item form a localStorage. It takes key as a parameter.
    // localStorage.key() - to display a data stored in a localStorage. It takes index as a parameter.