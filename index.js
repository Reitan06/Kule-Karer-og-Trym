    let  display = document.getElementById('timer');
    let  seconds = 0;
    let  minutes = 0;
    let  ataler = 100000;
    let  totemHealth = 50000;






    function startSpill() {
        startSound();
        startTimer();
        drawTotem();
    }
    function startTimer() {
        setInterval(function () {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            let  formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
            let  formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
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
            document.getElementById('totemHealth').textContent = "Totem Health: " + totemHealth;
            document.getElementById('totem').style.display = 'block';
        }
    }

    function damageTotem(amount) {
        totemHealth -= amount;
        console.log("Totem health reduced by " + amount + ". Remaining health: " + totemHealth);
        
    }



    let  trymCost = 100

    //lager ny trym karakter
    function summonTrym() {
        if (ataler >= trymCost) {
            ataler -= trymCost;
        

       let newTrym = new Image();
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










    //flytter trym mot høyre
    function moveTrym() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawTotem();
        for (var i = 0; i < images.length; i++) {
            positions[i].x += 2;
            positions[i].y = 220;
            ctx.drawImage(images[i], positions[i].x, positions[i].y, 158, 158);
            ctx.font = "16px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("left-aligned", x, 40);
            ctx.fillText("Liv: " + images[i].health, positions[i].x, positions[i].y);

            //endrer livene til trym når han treffer et visst x-coordinat
        if (positions[i].x >= canvas.width - 200) {
            damageTotem(10); // Adjust the damage amount as needed
            images[i].health -= 1;
            positions[i].x -= 1;
        }


            //fjerner trym når han når null liv
            if (images[i].health <= 0) {
                images.splice(i, 1);
                positions.splice(i, 1);
                console.log(i.health)
                console.log(totemHealth)
            }
        }
        requestAnimationFrame(moveTrym);
    }






























































    let  JohanCost = 50

    function summonJohan() {
        if (ataler >= JohanCost) {
            ataler -= JohanCost;
    

       let newJohan = new Image();
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
        for (let  i = 0; i < images.length; i++) {
            positions[i].x += 1;
            positions[i].y = 220;
            ctx.drawImage(images[i], positions[i].x, positions[i].y, 184, 184);
        }
        requestAnimationFrame(moveJohan);
    }


    let  perCost = 20

    function summonPer() {
        if (ataler >= perCost) {
            ataler -= perCost;
        

       let newPer = new Image();
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
            positions[i].x += 2;
            positions[i].y = 220;
            ctx.drawImage(images[i], positions[i].x, positions[i].y, 184, 184);
        }
        requestAnimationFrame(movePer);
    }

    let  jokkisCost = 10

    function summonJokkis() {
        if (ataler >= jokkisCost) {
            ataler -= jokkisCost;
        

       let newJokkis = new Image();
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
            positions[i].x += 4;
            positions[i].y = 220;
            ctx.drawImage(images[i], positions[i].x, positions[i].y, 184, 184);
        }
        requestAnimationFrame(moveJokkis);
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

