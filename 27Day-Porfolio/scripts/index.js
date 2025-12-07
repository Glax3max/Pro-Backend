const name1 = document.querySelector('.name1');
const skills = document.querySelector('.skills');
const emoji = document.querySelector('.emoji');
const textSkill = document.querySelector('.textSkill');
const about = document.querySelector('.about');
const skillCards = document.querySelector('.skillCards');
const tSkill = document.querySelector('.tSkill');

const skillArr = ["Speaker","Leader","Techie","Traveller","Beautiful Soul"];
const skillEmogi = ["🫨","🥷","⭐","🚞","🎈"];
const tSkillArr = ['MONGODB','REACT',"EXPRESS","NODEJS","PYTHON"];
// Styling my name
console.log(name1.style)
name1.style.fontSize = "64px";
name1.style.color = "#444";
// name1.style.textAlign = "center";
name1.style.padding = "54px ";
name1.style.fontFamily = "Verdana, sans-serif";

// Changing the skills again on a time interval of 1 s

setInterval(()=> {
    let idx = Math.floor(Math.random()*5);
    console.log(idx)
    emoji.textContent = skillEmogi[idx];
    textSkill.textContent = skillArr[idx];
    tSkill.textContent = tSkillArr[idx];
    textSkill.style.transform = "translate(50px,0)";
    textSkill.style.color = "black";
    textSkill.style.transition = "1s";
    // tSkill.style.visibility = "visible";
    tSkill.style.color = "black";
    tSkill.style.transition = "1s";
    setTimeout(()=> {
        textSkill.style.color = "white";
        textSkill.style.transform = "translate(0px,0)";
        textSkill.style.transition = "0.2s";
        tSkill.style.color = "white";
    },1000)
},1500)


// Styling about section
    about.style.paddingTop = "13px";
    about.style.marginLeft = "54px";
    about.style.fontSize = "large";
    about.style.lineHeight = "27px";
    


// techie edit
    