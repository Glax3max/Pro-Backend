const allOptions = document.querySelector('select');
const inp = document.querySelector('#mass');
const res = document.querySelector('#res');
const btn = document.querySelector('button');
let changeVal = 1;
allOptions.addEventListener('change', (e)=> {
    switch (allOptions.selectedIndex) {
        case 1:
            changeVal = 0.4;
           break;
        case 2:
            changeVal = 0.4;
           break;
        case 3:
            changeVal = 1;
            break;
        case 4:
            changeVal = 0.4;
            break;
        case 5:
            changeVal = 2.5;
            break;
        case 6:
            changeVal = 1.1;
            break;
        case 7:
            changeVal = 0.8;
            break;
        case 8:
            changeVal = 1.2;
            break;
        default:
            break;
    }
})

btn.addEventListener('click',(e)=> {
    console.log(inp.value*changeVal);
})

