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

ctx.font = `bold 40px serif`;
const background = new Image();


const drawScore = () => {
    console.log(score);
    ctx.fillStyle = `black`;
    ctx.fillText(`Score: ` + score, 800, 120);
}

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
    // console.log(deltatime);
    
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

    drawScore();

    window.requestAnimationFrame(animate);
};

spawnEnemies();
spawnSettler();
animate();