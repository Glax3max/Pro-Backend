import { countries_data } from '../data/countries_data.js';
const pBtn = document.querySelector('.population');
const lBtn = document.querySelector('.languages');
const visArea = document.querySelector('.graph-wrapper');

const conLan = new Map();
const conPop = new Map();

for(let i = 0;i<countries_data.length;i++) {
    conPop.set(countries_data[i].population,countries_data[i].name);
    for(let j = 0;j<countries_data[i].languages.length;j++) {
        if(conLan.has(countries_data[i].languages[j])) {
            conLan.set(countries_data[i].languages[j],conLan.get(countries_data[i].languages[j])+1);
        }else{
            conLan.set(countries_data[i].languages[j],1);
        }
    }
}

const lanArr = [];
const popArr = [];
let cnt = 0;
const sortedMap = new Map([...conPop].sort((a,b) => b[0]-a[0]));
const sortedMap2 = new Map([...conLan].sort((a,b)=> b[1]-a[1]));

for (const key of sortedMap2.keys()) {
    lanArr.push(key);
    cnt++;
    if(cnt == 10) break
}
cnt = 0;
for(const value of sortedMap.values()) {
    popArr.push(value)
    cnt++;
    if(cnt == 10) break;
}


console.log(lanArr);
console.log(popArr);
pBtn.addEventListener('click',(e)=> {
    visArea.textContent = popArr;
})


lBtn.addEventListener('click',(e)=> {
    visArea.textContent = lanArr;

})

