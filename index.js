let display = document.querySelector('#timer');
let seconds = 0;
let timerInterval;

function startTimer() {
    timerInterval = setInterval(function () {
        let minutes = parseInt(seconds / 60, 10);
        let remainingSeconds = parseInt(seconds % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        remainingSeconds = remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;

        display.textContent = minutes + ":" + remainingSeconds;

        seconds++;
    }, 1000);
}