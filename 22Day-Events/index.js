// Event Listner
// Click
const mass = document.querySelector('#mass');
const height = document.querySelector('#height');
const btn = document.querySelector('button');

        // Single Click
        // btn.addEventListener('click',e=> {
        //     console.log('e gives the event Listener object :',e)
        //     console.log('e.target gives the target element: ',e.target)
        //     console.log('e.target.textContent gives the test content of the target element :  ',e.target.textContent);
        // })

        // Double click
        btn.addEventListener('dblclick', e=> {
            console.log('This time its clicked 2 times : ',e.target)
        })

        // Mouse Enter
        btn.addEventListener('mouseenter',e=> {
            console.log('e gives  the event listener object:',e.target.textContent);
        })

        // Event Listener for input field
        let bmi
        btn.addEventListener('click', ()=> {
            bmi = mass.value / height.value ** 2
            alert(`your bmi is ${bmi.toFixed(2)}`)
            console.log(bmi);   
        })

        // Change content on mouseup
        const paraTag = document.querySelector('p');
        const chngVal = document.querySelector('#chngVal')

        chngVal.addEventListener('mouseup',e=> {
            paraTag.textContent = e.target.value
            paraTag.style.color = 'red';
        })

        // Blur event
        chngVal.addEventListener('blur',e=> {
            paraTag.textContent = e.target.value
            paraTag.style.color = 'red';
        })

        document.body.addEventListener('keypress', e=> {
            alert(e.keyCode);
        })