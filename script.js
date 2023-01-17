////////////////////////////////////////////////////||
                 //MAIN-SCRIPT//                    ||
////////////////////////////////////////////////////||

const canvas = document.getElementById(`canvasgame`);
const ctx = canvas.getContext(`2d`);
canvas.width = 1000;
canvas.height = 1000;

const drawBackground = () => {
    const img = new Image();
    img.src = `src/SaveSpace.jpg`;
    ctx.drawImage(img, 0, 0, 1000, 1000);
};

//Array für gedrückte Tasten auf der Tastatur
const keys = [];

// getötete Gegner
let score = 0;

// getötete Siedler
let settlerDeaths = 0;

//gerettete Siedler
let settlerSaves = 0;

//Score wird aufs Canvas "gemalt"
const drawScore = () => {
    ctx.font = `bold 40px serif`;
    ctx.fillStyle = `black`;
    ctx.fillText(`Score: ` + score, 800, 120);
    ctx.font = `bold 40px serif`;
    ctx.fillStyle = `white`;
    ctx.fillText(`Score: ` + score, 805, 122);
};

//getötete Siedler werden aufs Canvas "gemalt"
const drawSettlerDeaths = () => {
    ctx.font = `bold 40px serif`;
    ctx.fillStyle = `black`;
    ctx.fillText(`verlorene Siedler: ` + settlerDeaths, 10, 100); 
    ctx.font = `40px serif`;
    ctx.font = `bold 40px serif`;
    ctx.fillStyle = `white`;
    ctx.fillText(`verlorene Siedler: ` + settlerDeaths, 15, 102);
};

//gerettete Siedler werden aufs Canvas "gemalt"
const drawSettlerSaves = () => {
    ctx.font = `bold 40px serif`;
    ctx.fillStyle = `black`;
    ctx.fillText(`gerettete Siedler: ` + settlerSaves, 10, 50); 
    ctx.font = `bold 40px serif`;
    ctx.fillStyle = `white`;
    ctx.fillText(`gerettete Siedler: ` + settlerSaves, 15, 52);
};

//allgemeine Sprite Draw Function
function drawSprite(id_enemy, img, sX, sY, sW, sH, dX, dY, dW, dH){
    ctx.drawImage(id_enemy, img, sX, sY, sW, sH, dX, dY, dW, dH);
};

//Wenn ein key gedrückt wird, wird er zum Array keys hinzugefügt
//moving wird auf true gesetzt für die "Schritte"
window.addEventListener(`keydown`, function(e){
    keys[e.keyCode] = true;
    hero.moving = true;
});

//wenn key losgelassen, dann aus array rausgelöscht
window.addEventListener(`keyup`, function(e){
    delete keys[e.keyCode];
    hero.moving = false;
});


////////////////////////////////////////////////////||
                    //TIMER//                       ||
////////////////////////////////////////////////////||

const startMinutes = 30;
let time = startMinutes * 60;

function updateTimer() {

    const timer = document.getElementById(`countdown`);
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    timer.innerHTML = `${minutes}`;
    time--;
};

////////////////////////////////////////////////////||
                    //ANIMATE-FUNKTION//            ||
////////////////////////////////////////////////////||

function animate(){    

    //Damit die bewegten Objekte keine "spuren" ziehen wird das Canvas gecleart
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //Wenn mehr als 10 Spieler tot, dann SpiritMode aufrufen
    if(settlerDeaths >= 10){
        updateTimer();
        spiritWorld();                        
        SpiritMusic.play();
        audioMusic.pause();
    }else{
        drawBackground();
        audioMusic.play();

        //function für die getöteten Gegner
        drawScore();

        //function für die getöteten Siedler
        drawSettlerDeaths();

        //function fir die geretteten Siedler
        drawSettlerSaves();

        //jeder vorhandene Gegner wird gemalt und bewegt
        enemies.forEach(en => en.drawEnemy());
        enemies.forEach(en => en.moveEnemy());
  
        //jeder vorhandene Siedler wird gemalt und bewegt und Frames geändert
        settler.forEach(en => en.drawSettler());
        settler.forEach(en => en.moveSettler());
        settler.forEach(en => en.changeSettlerFrame());
    
        //jede vorhandene Explosion wird gemalt und geupdatet
        explosions.forEach(ex => ex.update());
        explosions.forEach(ex => ex.draw());
    
        //jede vorhandene Explosion für Gegner wird gemalt und geupdatet
        enemySettlerCollision.forEach(ex => ex.update());
        enemySettlerCollision.forEach(ex => ex.draw());
    };
    
    //der Spieler wir gemalt, bewegt und das Frame wird aktualisiert
    hero.drawHero();
    hero.moveHero();
    hero.changeHeroFrame();


    window.requestAnimationFrame(animate);
};

//Gegner und Siedler werden erschaffen und im Array gespeichert. 
spawnEnemies();
spawnSettler();

animate();



