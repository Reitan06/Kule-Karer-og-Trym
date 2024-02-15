//TIMER-FUNKSJON I HEADER//

let display = document.getElementById('timer');
let seconds = 0;
let minutes = 0;

function startTimer() {
    setInterval(function () {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
        let formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
        let formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = formattedMinutes + ":" + formattedSeconds;
    }, 1000);
}
function summonJohan() {
    const johan = document.createElement("img");
    johan.src = "bilder/johan_walking.png";
    johan.alt = "Johan"; 
    johan.classList.add("Johan");
    johan.style.left = "80px"; 
    johan.style.top = "600px"; 
    document.body.appendChild(johan);
    let position = parseInt(johan.style.left); 
        let windowWidth = window.innerWidth;
        if (position < windowWidth) {
            position += 5; 
            johan.style.left = position + "px"; 
            setTimeout(moveJohan, 50);
        }
}