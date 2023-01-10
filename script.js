const canvas = document.querySelector(`canvas`);
const ctx = canvas.getContext(`2d`);
canvas.width = 1000;
canvas.height = 1000;

//Array, in dem die gedrückten Keys gespeichert werden.
//werden gelöscht, sobald die Taste weider losgelassen wird
const keys = [];

const audioMusic = new Audio(`src/Heroic Demise (New).mp3`);
const audioDisappearEnemy = new Audio(`src/erase.wav`);

const background = new Image();


function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH){
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
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
    window.requestAnimationFrame(animate);
    
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
        //enemies.forEach(en => en.collisionWithHero());
        //enemies.forEach(en => en.changeEnemyFrame());

        //player.collisionWithEnemy();


        settler.forEach(en => en.drawSettler());
        settler.forEach(en => en.moveSettler());
        //settler.forEach(en => en.changeSettlerFrame());


        window.requestAnimationFrame(animate);
    };
};

spawnEnemies();
spawnSettler();
startAnimating(60);


//KOLLISION
//Wenn x und y + Player. height und player.width = x und y von Enemy
//dann delete enemy, wo x und y = Player width und palyer hight aus dem array
//Am ende: Animation Boom, tot!
// var playerHitbox = {};
// var enemyHitbox = ;
// if(player.x === e){
//     enemies.
// }
//enemies.forEach(n => n.drawSprite);