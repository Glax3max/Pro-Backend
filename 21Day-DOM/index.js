// Document Object Model (DOM)

// Getting element by tag name
const allTitles = document.getElementsByTagName("h1");
// console.log(allTitles)

// for(const ele of allTitles) {
//     console.log(ele);
// }

// Getting elements by class name
const allTitleByClass = document.getElementsByClassName("title");
// console.log(allTitleByClass)

// Getting elements by class name
const allTitleById = document.getElementById("first-title");
// console.log(allTitleById);

// Getting element by querySelector methods - querySelector
let firstTitle = document.querySelector("h1"); //Using tag name - first element
let firstTitle2 = document.querySelector("#first-title"); //Using id - first element 
let firstTitle3 = document.querySelector(".title"); //Using class name - first element

// Getting elements by querySelectorAll method - querySelectorAll
// const allTitles2 = document.querySelectorAll('h1') // selecting all h1 elements
const allTitles3 = document.querySelectorAll('.title') // selecting all class(title) elements
const allTitles2 = document.querySelectorAll('h1') // selecting all h1 elements

// Adding attributes
const titles2 = document.querySelectorAll('h1')
titles2[3].className  = 'title'
titles2[3].id = 'fourth-title'

    // Using setAttributes
        const titles = document.querySelectorAll('h1')
        titles[3].setAttribute('id','fourth-title4')
        titles[3].setAttribute('class','title')

    // Adding class using classList - adding extra class without overlapping
        titles[3].classList.add('title','header-title')
    
    // Removing class using classList - removeing the classes passed as a parameter
        titles[3].classList.remove('title','header-title');


// Adding text to HTML elements
    // Adding text content using textContent
        titles[3].textContent= 'Fourth title';
        console.log(titles[3]);


// Adding styles

    // Adding style color
        titles.forEach((title,i)=> {
            title.style.fontSize = '24px';
            if(i%2 === 0) {
                title.style.color = 'green'
            }else{
                title.style.color = 'yellow'
            }
        })
    
    // Adding background color
        titles.forEach((title,i) => {
            if(i%2 == 0) {
                title.style.backgroundColor = 'yellow';
            }else{
                title.style.backgroundColor = 'green';
            }
        })