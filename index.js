//TIMER-FUNKSJON I HEADER//

let display = document.getElementById('timer');
let seconds = 0;
let minutes = 0;
let ataler = 50;

function startSpill() {
    startSound();
    startTimer();
}
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
    document.getElementById('startknapp').style.display = 'none'

    setInterval(function () {
        ataler += 2;
        console.log("Antall tellere: " + ataler);
        document.querySelector('.penger p').textContent = "Antall Ataler: " + ataler + "α";
    }, 1000);

}

let trymCost = 100

function summonTrym() {
    if (ataler >= trymCost) {
        ataler -= trymCost;
        const trym = document.createElement("img");
        trym.src = "bilder/WalkingTrym.png";
        trym.alt = "trym";
        trym.classList.add("trym");
        trym.style.left = "80px";
        trym.style.top = "400px";
        document.body.appendChild(trym);
    }
}


var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var img = new Image();
img.src = "bilder/johan_walking.png";
var x = 0;
var y = 220;
var images = [];
var positions = [];

let JohanCost = 50

function summonJohan() {
    if (ataler >= JohanCost) {
        ataler -= JohanCost;
        ataler -= 50
 }

    var newImg = new Image();
    newImg.src = "bilder/johan_walking.png";
    images.push(newImg);
    positions.push({ x: 0, y: 0 });
    newImg.onload = function() {
    moveJohan();
}
}

function moveJohan() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < images.length; i++) {
        positions[i].x += 1;
        positions[i].y = 220;
        ctx.drawImage(images[i], positions[i].x, positions[i].y, 184, 184);
    }
    requestAnimationFrame(moveJohan);
}


let perCost = 20

function summonPer() {
    if (ataler >= perCost) {
        ataler -= perCost;
    const per = document.createElement("img");
    per.src = "bilder/MovingPer.png";
    per.alt = "Per";
    per.classList.add("per");
    per.style.left = "80px";
    per.style.top = "600px";
    document.body.appendChild(per);
    moveCharacterRight(per); // Start moving Per right after summoning
    }
}

let jokkisCost = 10

function summonJokkis() {
    if (ataler >= jokkisCost) {
        ataler -= jokkisCost;
    const jokkis = document.createElement("img");
    jokkis.src = "bilder/MovingJokkis.png";
    jokkis.alt = "Jokkis";
    jokkis.classList.add("jokkis");
    jokkis.style.left = "80px";
    jokkis.style.top = "600px";
    document.body.appendChild(jokkis);
    moveCharacterRight(jokkis); // Start moving Jokkis right after summoning
    }
}

function startSound() {
    var themesong = document.getElementById("themesong");

    // Check if the audio is paused or not
    if (themesong.paused) {
        themesong.play(); // If paused, play the audio
    } else {
        themesong.pause(); // If playing, pause the audio
    }
}

