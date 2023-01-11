const canvas = document.querySelector(`canvas`);
const ctx = canvas.getContext(`2d`);
canvas.width = 1000;
canvas.height = 1000;

//Array, in dem die gedrückten Keys gespeichert werden.
//werden gelöscht, sobald die Taste weider losgelassen wird
const keys = [];

const background = new Image();


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

let fps, fpsInterval, startTime, now, then, elapsed;

function startAnimating(fps){
    //1 Sekunde hat 1000 Millisekunden
    fpsInterval = 1000/fps;
    then = Date.now();
    startTime = then;
    animate();
}

function animate(){

    //audioMusic.play();
    
    now = Date.now();
    elapsed = now - then;
    if(elapsed > fpsInterval) {
        then = now - (elapsed % fpsInterval);

        //Damit die bewegten Objekte keine "spuren" ziehen.
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        //ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        hero.drawHero();
        hero.moveHero();
        hero.changeHeroFrame();

        enemies.forEach(en => en.drawEnemy());
        enemies.forEach(en => en.moveEnemy());
        //enemies.forEach(en => en.changeEnemyFrame());

        settler.forEach(en => en.drawSettler());
        settler.forEach(en => en.moveSettler());
        //settler.forEach(en => en.changeSettlerFrame());

        explosions.forEach(ex => ex.update());
        explosions.forEach(ex => ex.draw());
    };

    window.requestAnimationFrame(animate);
};

spawnEnemies();
spawnSettler();
startAnimating(60);