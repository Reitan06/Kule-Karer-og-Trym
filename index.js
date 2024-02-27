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
function summonTrym() {
    const trym = document.createElement("img");
    trym.src = "bilder/WalkingTrym.png";
    trym.alt = "trym"; 
    trym.classList.add("trym");
    trym.style.left = "80px"; 
    trym.style.top = "400px"; 
    document.body.appendChild(trym);
}

function summonJohan() {
    const johan = document.createElement("img");
    johan.src = "bilder/johan_walking.png";
    johan.alt = "Johan"; 
    johan.classList.add("Johan");
    johan.style.left = "80px"; 
    johan.style.top = "600px"; 
    document.body.appendChild(johan);
}

function summonPer() {
    const johan = document.createElement("img");
    johan.src = "bilder/johan_walking.png";
    johan.alt = "Johan"; 
    johan.classList.add("Johan");
    johan.style.left = "80px"; 
    johan.style.top = "600px"; 
    document.body.appendChild(johan);
}

function summonJokkis() {
    const jokkis = document.createElement("img");
    jokkis.src = "bilder/MovingJokkis.png";
    jokkis.alt = "Jokkis"; 
    jokkis.classList.add("jokkis");
    jokkis.style.left = "80px"; 
    jokkis.style.top = "600px"; 
    document.body.appendChild(jokkis);
}