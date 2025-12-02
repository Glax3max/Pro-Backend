const YearElement = document.querySelector('h1') //got the first h1 element in our html
const liveDate = document.querySelector('h2');
const year = document.createElement('h1');
const liveDateElement = document.createElement('p');
const ulElmt = document.querySelector('ul');
const liElmt = document.querySelectorAll('li');

const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const generatehexaValues = () => {
    let hexa = '#';
    const str=  "123456abcdef";
    for(let i = 0;i<6;i++) {
        hexa +=str[Math.floor(Math.random()*13)] 
    }
    // console.log(hexa);
    return hexa;
}
YearElement.textContent = "30DaysOfJavaScript Challenge"


console.log();

year.textContent = '2020';
year.style.display = 'inline';
setInterval(()=> {
    let date = new Date();
    let curr_Date = ''
        curr_Date +=months[date.getMonth()]+' '
        curr_Date +=(date.getDate()<10?'0'+date.getDate():date.getDate())+ ','
        curr_Date +=date.getFullYear() + ' '
        curr_Date +=(date.getHours()<10?'0'+date.getHours():date.getHours()) + ':'
        curr_Date += (date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes()) +':'
        curr_Date += (date.getSeconds()<10?'0'+date.getSeconds():date.getSeconds())

    console.log(curr_Date)
    year.style.color = generatehexaValues()
    liveDateElement.textContent = curr_Date
    liveDateElement.style.color = generatehexaValues()
},1000);

liveDate.appendChild(liveDateElement);
YearElement.appendChild(year);

// Styling the ul element
ulElmt.style.listStyleType = "none";
liElmt.forEach((li,idx) => {
    li.style.padding = "15px"
    li.style.width = "40vw"
    li.style.background ='steelblue'
    li.style.margin = "1px auto"
})