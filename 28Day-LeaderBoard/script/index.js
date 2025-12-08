const heading = document.querySelector('.container1');
const fname = document.querySelector('.fname');
const lname = document.querySelector('.lname');
const country = document.querySelector('.country');
const pScore = document.querySelector('.pScore');
const addPlayer = document.querySelector('.addPlayer');
const warning = document.querySelector('.warningSign');
const Leaderboard = document.querySelector('.Leaderboard');
const monthName = ['Jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];

addPlayer.addEventListener('click', (e)=> {
    const fullName_Date = document.createElement('div')
    const fullName = document.createElement('div');
    const dat = document.createElement('div');
    const con = document.createElement('div');
    const score = document.createElement('div');
    const modify = document.createElement('div');
    const del = document.createElement('button');
    const inc = document.createElement('button');
    const dec = document.createElement('button');
    const newAdd = document.createElement('div');
    const date = new Date();
    modify.className = 'modify';
    del.className = 'del';
    dec.className = 'dec';
    inc.className = 'inc';
    dat.className = 'dat';
    newAdd.className = 'newAdd';
    fullName_Date.className = 'fullName_Date';
    del.textContent = '🗑️';
    dec.textContent = '-5';
    inc.textContent = '+5';
    fullName.textContent = `${fname.value.toUpperCase()} ${lname.value.toUpperCase()}`;
    dat.textContent = `${monthName[date.getMonth()-1].toUpperCase()} ${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()} , ${date.getFullYear()} ${date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}`; 
    con.textContent = country.value.toUpperCase();
    score.textContent = pScore.value;
    console.log(dat.textContent);

    modify.appendChild(del);
    modify.appendChild(inc);
    modify.appendChild(dec);
    fullName_Date.appendChild(fullName);
    fullName_Date.appendChild(dat);
    newAdd.appendChild(fullName_Date)
    newAdd.appendChild(con);
    newAdd.appendChild(score);
    newAdd.appendChild(modify);
    Leaderboard.appendChild(newAdd);


    // functionality of buttons
    del.addEventListener('click',()=> {
        newAdd.remove();
        sortLeaderboard();
    })

    inc.addEventListener('click', ()=> {
        score.textContent = Number(score.textContent)+5;
        sortLeaderboard()
    })

    dec.addEventListener('click', ()=> {
        score.textContent = Number(score.textContent)-5;
        sortLeaderboard()
    })


    sortLeaderboard()
})


function sortLeaderboard() {
    const players = Array.from(Leaderboard.children);

    players.sort((a, b) => {
        const scoreA = Number(a.children[2].textContent);
        const scoreB = Number(b.children[2].textContent);
        return scoreB - scoreA; // DESCENDING (highest first)
    });

    players.forEach(player => Leaderboard.appendChild(player));
}
