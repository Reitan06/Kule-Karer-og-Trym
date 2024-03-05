let display = document.getElementById('timer');
let seconds = 0;
let minutes = 0;
let ataler = 100000;
let totemHealth = 50000;






function startSpill() {
    startSound();
    startTimer();
    soldatKnapp();
    drawTotem();
}

function soldatKnapp() {
    document.getElementById('soldat_knapp_container').style.display = "flex"

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
        document.querySelector('.penger p').textContent = "Antall Ataler: " + ataler + "α";
    }, 1000);

}

let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
let Trym = new Image();
Trym.src = "bilder/WalkingTrym.png";
let Johan = new Image();
Johan.src = "bilder/johan_walking.png";
let Per = new Image();
Per.src = "bilder/MovingPer.png";
let Jokkis = new Image();
Jokkis.src = "bilder/MovingJokkis.png";
let x = 0;
let images = [];
let positions = [];
let sizes = [];








function drawTotem() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //lager healthscore-tekst til totem
    ctx.font = "16px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("Totem Health: " + totemHealth, canvas.width - 100, 25);



    // Check if the totem's health points reach zero
    if (totemHealth <= 0) {
        document.getElementById('totem').style.display = 'none'; // Remove the totem
        console.log("Totem destroyed!");
    }
    else {
        document.getElementById('totem').textContent = "Totem Health: " + totemHealth;
        document.getElementById('totem').style.display = 'block';
    }
}

function damageTotem(amount) {
    totemHealth -= amount;
}



let trymCost = 100

//lager ny trym karakter
function summonTrym() {
    if (ataler >= trymCost) {
        ataler -= trymCost;


        let newTrym = new Image();
        newTrym.src = "bilder/WalkingTrym.png"
        images.push(newTrym);
        newTrym.health = 7500;
        newTrym.damage = 80
        positions.push({ x: 0, y: 90, velocity: 3 });
        sizes.push({ x: 180, y: 350 });
        newTrym.onload = function () {
            if (images.length === 1) {
                moveCharacters();
            }
        };
        console.log(newTrym.health)

    }
}

let JohanCost = 50

function summonJohan() {
    if (ataler >= JohanCost) {
        ataler -= JohanCost;


        let newJohan = new Image();
        newJohan.src = "bilder/johan_walking.png";
        images.push(newJohan);
        newJohan.health = 10000
        newJohan.damage = 30
        positions.push({ x: 0, y: 200, velocity: 2 });
        sizes.push({ x: 180, y: 200 });
        newJohan.onload = function () {
            if (images.length === 1) {
                moveCharacters();
            }
        };
        console.log(newJohan.health)
    }
}

let perCost = 20

function summonPer() {
    if (ataler >= perCost) {
        ataler -= perCost;


        let newPer = new Image();
        newPer.src = "bilder/MovingPer.png";
        images.push(newPer);
        newPer.health = 5000
        newPer.damage = 20
        positions.push({ x: 0, y: 260, velocity: 4 });
        sizes.push({ x: 180, y: 180 });
        newPer.onload = function () {
            if (images.length === 1) {
                moveCharacters();
            }
        };
        console.log(newPer.health)
    }
}


let jokkisCost = 10

function summonJokkis() {
    if (ataler >= jokkisCost) {
        ataler -= jokkisCost;


        let newJokkis = new Image();
        newJokkis.src = "bilder/MovingJokkis.png";
        images.push(newJokkis);
        newJokkis.health = 2500
        newJokkis.damage = 15
        positions.push({ x: 0, y: 300, velocity: 7 });
        sizes.push({ x: 100, y: 100 });
        newJokkis.onload = function () {
            if (images.length === 1) {
                moveCharacters();
            }
        };
        console.log(newJokkis.health)
    }
}


function moveCharacters() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawTotem();
    let imagesToRemove = [];
    for (var i = 0; i < images.length; i++) {
        positions[i].x += positions[i].velocity;
        ctx.drawImage(images[i], positions[i].x, positions[i].y, sizes[i].x, sizes[i].y);
        ctx.font = "16px Arial";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("Liv: " + images[i].health, positions[i].x, positions[i].y);

        //endrer livene til trym når han treffer et visst x-coordinat
        if (positions[i].x >= canvas.width - 250) {
            damageTotem(images[i].damage); // Adjust the damage amount as needed
            images[i].health -= 50;
            positions[i].x -= positions[i].velocity;
        }

        //fjerner trym når han når null liv
        if (images[i].health <= 0) {
            imagesToRemove.push(i);
            console.log("Remaining totem health: " + totemHealth);
        }

        for (let j = imagesToRemove.length - 1; j >= 0; j--) {
            let indexToRemove = imagesToRemove[j];
            images.splice(indexToRemove, 1);
            positions.splice(indexToRemove, 1);
            sizes.splice(indexToRemove, 1);
        }
    }
    requestAnimationFrame(moveCharacters);
}



function startSound() {
    let themesong = document.getElementById("introimpact");
    themesong = document.getElementById("themesong");

    // Check if the audio is paused or not
    if (themesong.paused) {
        themesong.play(); // If paused, play the audio
        introimpact.play();
    } else {
        themesong.pause();
        introimpact.pause(); // If playing, pause the audio
    }
}

