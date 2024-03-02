//TIMER-FUNKSJON I HEADER//

let display = document.getElementById('timer');
let seconds = 0;
let minutes = 0;
let ataler = 100000;


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

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var Trym = new Image();
Trym.src = "bilder/WalkingTrym.png";
var Johan = new Image();
Johan.src = "bilder/johan_walking.png";
var Per = new Image();
Per.src = "bilder/MovingPer.png";
var Jokkis = new Image();
Jokkis.src = "bilder/MovingJokkis.png";
var x = 0;
var images = [];
var positions = [];








let trymCost = 100

function summonTrym() {
    if (ataler >= trymCost) {
        ataler -= trymCost;
    

    var newTrym = new Image();
    newTrym.src = "bilder/WalkingTrym.png"
    images.push(newTrym);
    newTrym.health = 10000;
    positions.push({ x: 0, y: 0 });
    newTrym.onload = function() {
        if (images.length === 1) {
            moveTrym();
        }
    };
    console.log(newTrym.health)
    }
}

function moveTrym() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < images.length; i++) {
        positions[i].x += 1;
        positions[i].y = 220;
        ctx.drawImage(images[i], positions[i].x, positions[i].y, 158, 158);
        ctx.font = "16px Arial";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("left-aligned", x, 40);
        ctx.fillText("Liv: " + images[i].health, positions[i].x, positions[i].y);

        //endrer livene til trym når han treffer et visst x-coordinat
        if (positions[i].x >= canvas.width- 150) {
            images[i].health -= 1;
            positions[i].x -= 1;
        }

        //fjerner trym når han når null liv
        if (images[i].health <= 0) {
            images.splice(i, 1);
            positions.splice(i, 1);
            console.log(i.health)
        }
    }
    requestAnimationFrame(moveTrym);
}


let JohanCost = 50

function summonJohan() {
    if (ataler >= JohanCost) {
        ataler -= JohanCost;
 

    var newJohan = new Image();
    newJohan.src = "bilder/johan_walking.png";
    images.push(newJohan);
    positions.push({ x: 0, y: 0 });
    newJohan.onload = function() {
    if (images.length === 1) {
        moveJohan();
        }
    };
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
    

    var newPer = new Image();
    newPer.src = "bilder/MovingPer.png";
    images.push(newPer);
    positions.push({ x: 0, y: 0 });
    newPer.onload = function() {
        if (images.length === 1) {
            movePer();
        }
    };
}
}

function movePer() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < images.length; i++) {
        positions[i].x += 1;
        positions[i].y = 220;
        ctx.drawImage(images[i], positions[i].x, positions[i].y, 184, 184);
    }
    requestAnimationFrame(movePer);
}

let jokkisCost = 10

function summonJokkis() {
    if (ataler >= jokkisCost) {
        ataler -= jokkisCost;
    

    var newJokkis = new Image();
    newJokkis.src = "bilder/MovingJokkis.png";
    images.push(newJokkis);
    positions.push({ x: 0, y: 0 });
    newJokkis.onload = function() {
        if (images.length === 1) {
            moveJokkis();
        }
    };
    }
}

function moveJokkis() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < images.length; i++) {
        positions[i].x += 1;
        positions[i].y = 220;
        ctx.drawImage(images[i], positions[i].x, positions[i].y, 184, 184);
    }
    requestAnimationFrame(moveJokkis);
}

function startSound() {
    var themesong = document.getElementById("introimpact");
    var themesong = document.getElementById("themesong");

    // Check if the audio is paused or not
    if (themesong.paused) {
        themesong.play(); // If paused, play the audio
        introimpact.play();
    } else {
        themesong.pause();
        introimpact.pause(); // If playing, pause the audio
    }
}

