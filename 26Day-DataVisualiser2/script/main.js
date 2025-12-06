import { countries } from "../Data/countries.js";

// console.log(countries)
const strtWord = document.querySelector('.startWith')
const sortBtn = document.querySelector('.sortBtn')
const strtWordBtn = document.querySelector('.strtWordBtn')
const anyWord = document.querySelector('.anyWord')
const srchBar = document.querySelector('input')
const srchBtn = document.querySelector('.searchBtn')
const result = document.querySelector('.container2');

let temp3 = ""
countries.forEach((con)=> {
    temp3 += `<div>${con}</div>`
})

result.innerHTML = temp3;
let stw = false;
let sw = false;
let st = false;
strtWordBtn.addEventListener('click',(e)=> {
    stw = !stw
    console.log(stw);
}) 

anyWord.addEventListener('click',(e)=> {
    sw = !sw
    console.log(sw);
}) 

const arr = [];
countries.forEach((con,index)=> {
    const subEle = document.createElement('div');
    subEle.innerText = con;
    arr.push(subEle);
})

srchBtn.addEventListener('click',(e)=> {
    const srchStr = srchBar.value;
    let srchRes = countries
    let filterWord = ``;
    if(stw) {
       srchRes = countries.filter((country)=>
       country.toLowerCase().startsWith(srchStr.toLowerCase()))
       filterWord = `Countries start with <span style="color:red">${srchStr}</span> are <span style="color:red">${srchRes.length}</span>`;
    }else if(sw) {
        srchRes = countries.filter((country)=>
        country.toLowerCase().includes(srchStr.toLowerCase()))
        filterWord = `Countries containing ${srchStr} are ${srchRes.length}`;
    }
    let tempEle = "";
    srchRes.forEach(sr=>{
        tempEle += `<div>${sr}</div>`
    })

    strtWord.innerHTML = filterWord

    result.innerHTML = tempEle
})

sortBtn.addEventListener('click', (e)=> {
    const srchStr = srchBar.value;
    let srchRes = countries

    
    if(stw) {
        srchRes = countries.filter((country)=>
            country.toLowerCase().startsWith(srchStr.toLowerCase())
    )}else if(sw) {
        srchRes = countries.filter((country)=>
            country.toLowerCase().includes(srchStr.toLowerCase())
    )
}
    let tempEle = "";
    if(st) {
        srchRes.sort();
        st = !st;
    }else{
        srchRes.sort();
        srchRes.reverse();
        st = !st;
    }
    srchRes.forEach(sr=>{
        tempEle += `<div>${sr}</div>`
    })
    result.innerHTML = tempEle
    
})