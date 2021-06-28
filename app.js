// set initial count
let count = 0 

// select valur and buttons

const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')

// check every .btn and add an event llstener to it
btns.forEach(function (btn) {
    btn.addEventListener('click', function(e) {
        const pressed = e.currentTarget.classList

        if (pressed.contains('decrease')) count--;
          else if (pressed.contains('increase')) count++;
            else count = 0;
        

        if (count > 0) value.style.color = 'green';
         else if (count < 0) value.style.color = 'red';
            else value.style.color = 'black';

        value.textContent = count
    })
})
