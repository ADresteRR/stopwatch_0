//selectors
const buttonRow = document.querySelector('.buttons');
const hour = document.querySelector('.hours');
const minute = document.querySelector('.minutes');
const second = document.querySelector('.seconds');


//variable
let sec = 0;
let min = 0;
let hr = 0;
let start = false;

//evenlisteners
buttonRow.addEventListener('click', buttonAction);


//functions
function buttonAction(event) {
    const button = event.target;

    if (button.classList.contains('start-button')) {
        start = true;
    }
    else if (button.classList.contains('stop-button')) {
        start = false;
    }
    else if (button.classList.contains('reset-button')) {
        min = 0;
        sec = 0;
        hr = 0;
        update();
    }
}

var interval = setInterval(() => {
    if (start) {
        sec++;
        if (sec === 60) {
            min++;
            sec = 0;
        }
        if (min === 60) {
            hr++;
            min = 0;
        }
        if (hr === 24) {
            hr = 0;
        }
        update();
    }
}, 1000);



function update() {
    hour.innerHTML = hr;
    minute.innerHTML = min;
    second.innerHTML = sec;
}

