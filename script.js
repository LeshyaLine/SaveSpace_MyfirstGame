const canvas = document.querySelector(`canvas`);
const ctx = canvas.getContext(`2d`);

canvas.width = 1000;
canvas.height = 1000;

//Array, in dem die gedrückten Keys gespeichert werden.
//werden gelöscht, sobald die Taste weider losgelassen wird
const keys = [];

//zum Speichern des Timestamps in der animate()
let lasttime = 0;
let timeToNext = 0;
let SpawnIntervall = 500;

// getötete Gegner
let score = 0;

// getötete Siedler
let settlerDeaths = 0;

//gerettete Siedler
let settlerSaves = 0;

const background = new Image();


const drawScore = () => {
    ctx.font = `bold 40px serif`;
    ctx.fillStyle = `black`;
    ctx.fillText(`Score: ` + score, 800, 120);
    ctx.font = `bold 40px serif`;
    ctx.fillStyle = `white`;
    ctx.fillText(`Score: ` + score, 805, 122);
}

const drawSettlerDeaths = () => {
    ctx.font = `bold 40px serif`;
    ctx.fillStyle = `black`;
    ctx.fillText(`verlorene Siedler: ` + settlerDeaths, 10, 100);    ctx.font = `40px serif`;
    ctx.font = `bold 40px serif`;
    ctx.fillStyle = `white`;
    ctx.fillText(`verlorene Siedler: ` + settlerDeaths, 15, 102);
};

const drawSettlerSaves = () => {
    ctx.font = `bold 40px serif`;
    ctx.fillStyle = `black`;
    ctx.fillText(`gerettete Siedler: ` + settlerSaves, 10, 50);    ctx.font = `40px serif`;
    ctx.font = `bold 40px serif`;
    ctx.fillStyle = `white`;
    ctx.fillText(`gerettete Siedler: ` + settlerSaves, 15, 52);
};

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

function animate(timestamp){


    //Damit die bewegten Objekte keine "spuren" ziehen.
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //Für die Zeitanzeige und Levelberechnung 
    let deltatime = timestamp - lasttime;
    lasttime = timestamp;   
    timeToNext += deltatime;
    
    // audioMusic.play();
    
    hero.drawHero();
    hero.moveHero();
    hero.changeHeroFrame();
    enemies.forEach(en => en.drawEnemy());
    enemies.forEach(en => en.moveEnemy());
    //enemies.forEach(en => en.changeEnemyFrame());
    settler.forEach(en => en.drawSettler());
    settler.forEach(en => en.moveSettler());
    settler.forEach(en => en.changeSettlerFrame());

    explosions.forEach(ex => ex.update());
    explosions.forEach(ex => ex.draw());

    enemySettlerCollision.forEach(ex => ex.update());
    enemySettlerCollision.forEach(ex => ex.draw());

    //function für die getöteten Gegner
    drawScore();
    //function für die getöteten Spieler
    drawSettlerDeaths();

    //function fir die geretteten Siedler
    drawSettlerSaves();

    window.requestAnimationFrame(animate);
};

spawnEnemies();
spawnSettler();
animate();