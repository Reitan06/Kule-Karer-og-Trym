let display = document.getElementById('timer');
let seconds = 0;
let minutes = 0;
let ataler = 100;
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
        ataler += 15;
        document.querySelector('.penger p').textContent = "Antall Ataler: " + ataler + "α";
    }, 1000);
    let enemyInterval = setInterval(function () {
        summonEnemy();
    }, 4000);

    let tripleEnemyInterval = setInterval(function () {
        summonEnemy();
        summonEnemy();
        summonEnemy()
    }, 30000);


    if (totemHealth <= 0) {
        clearInterval(enemyInterval);
        clearInterval(tripleEnemyIntervalInterval);
    }

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

    ctx.font = "16px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("Totem Health: " + totemHealth, canvas.width - 100, 25);



    if (totemHealth <= 0) {
        document.getElementById('totem').style.display = 'none';
        canvas.style.display = 'none';
        document.getElementById('startknapp').style.display = 'flex'
        document.getElementById('startknapp').innerHTML = 'Play Again'
        document.getElementById('startknapp').addEventListener('click', function () {
            location.reload();
        });

        let victorySound = new Audio("lyder/victorysound.mp3");

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


function summonTrym() {
    if (ataler >= trymCost) {
        ataler -= trymCost;


        let newTrym = new Image();
        newTrym.src = "bilder/WalkingTrym.png"
        newTrym.type = "character";
        newTrym.health = 7500;
        newTrym.damage = 80
        images.push(newTrym);
        positions.push({ x: 0, y: 90, velocity: 2 });
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
        newJohan.type = "character";
        newJohan.health = 20000
        newJohan.damage = 5
        images.push(newJohan);
        positions.push({ x: 0, y: 200, velocity: 1 });
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
        newPer.type = "character";
        newPer.health = 3000
        newPer.damage = 20
        images.push(newPer);
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
        newJokkis.type = "character";
        newJokkis.health = 2500
        newJokkis.damage = 15
        images.push(newJokkis);
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

function summonEnemy() {
    let newEnemy = new Image();
    let imageUrls = ["bilder/MovingAlex.png", "bilder/MovingReitan.png", "bilder/MovingOle.png"];
    let randomIndex = Math.floor(Math.random() * imageUrls.length);
    newEnemy.src = imageUrls[randomIndex];
    newEnemy.type = "enemy";
    newEnemy.health = 5000;
    newEnemy.damage = 30;
    images.push(newEnemy);
    positions.push({ x: 1100, y: 90, velocity: -4 });
    sizes.push({ x: 400, y: 400 });
    newEnemy.onload = function () {
        if (images.length === 1) {
            moveCharacters();
        }
    };
}

function moveCharacters() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawTotem();

    let totemZoneStart = canvas.width - 250;

    images.forEach((img, index) => {

        let isNearEnemy = false;

        for (let j = 0; j < images.length; j++) {
            if (index !== j && images[j].type !== img.type && Math.abs(positions[index].x - positions[j].x) < 100) {
                isNearEnemy = true;

                images[j].health -= img.damage;
                img.health -= images[j].damage;
                img.engaged = images[j].engaged = true;


                if (images[j].health <= 0) {
                    images[j].engaged = false;
                }
            }
        }


        if (!isNearEnemy && !img.engaged) {
            positions[index].x += positions[index].velocity;
        } else if (img.engaged && images.findIndex(enemy => enemy.type !== img.type && enemy.engaged) === -1) {

            img.engaged = false;
        }


        if (positions[index].x >= totemZoneStart && img.type === "character") {
            img.engaged = true;
            damageTotem(img.damage);
            img.health -= 50;
            positions[index].x = totemZoneStart;
        }
    });


    for (let i = images.length - 1; i >= 0; i--) {
        if (images[i].health <= 0) {
            images.splice(i, 1);
            positions.splice(i, 1);
            sizes.splice(i, 1);
        }
    }

    drawAndCheckHealth();

    requestAnimationFrame(moveCharacters);
}

function drawAndCheckHealth() {
    for (let i = images.length - 1; i >= 0; i--) {
        const img = images[i];
        const position = positions[i];
        const size = sizes[i];


        if (img.health > 0) {
            ctx.drawImage(img, position.x, position.y, size.x, size.y);
            ctx.font = "16px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("Health: " + img.health, position.x + size.x / 2, position.y - 10);
        } else {

            images.splice(i, 1);
            positions.splice(i, 1);
            sizes.splice(i, 1);
        }
    }
}

function startSound() {
    let themesong = document.getElementById("introimpact");
    themesong = document.getElementById("themesong");


    if (themesong.paused) {
        themesong.play();
        introimpact.play();
    } else {
        themesong.pause();
        introimpact.pause();

    }
}
