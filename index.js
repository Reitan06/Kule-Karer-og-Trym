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
}
function moveJohan() {
    let position = parseInt(johan.style.left); // Get the current position
    const screenWidth = window.innerWidth; // Get the width of the screen
    const johanWidth = johan.offsetWidth; // Get the width of the johan image
    if (position + johanWidth < screenWidth) {
        position += 5; // Adjust the speed of movement by changing the value
        johan.style.left = position + "px"; // Update the position
        setTimeout(moveJohan, 50); // Call the function again after a short delay
    }
}
