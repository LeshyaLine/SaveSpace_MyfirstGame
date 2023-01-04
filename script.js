const canvas = document.querySelector(`canvas`);
const ctx = canvas.getContext(`2d`);
canvas.width = 1000;
canvas.height = 1000;

//Array, in dem die gedrückten Keys gespeichert werden.
//werden gelöscht, sobald die Taste weider losgelassen wird
const keys = [];

class Player {
    constructor(x, y, width, height, frameX, frameY, speed, moving, sprite){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.frameX = frameX;
        this.frameY = frameY;
        this.speed = speed;
        this.moving = moving;
        this.sprite = sprite
    };
    drawPlayer(){
        drawSprite(this.sprite, this.width * this.frameX, this.height * this.frameY, this.width, this.height, this.x, this.y, this.width, this.height);
    };
    movePlayer(){
        if(keys[38] && this.y > 100){
            this.y -= this.speed;
            this.frameY = 3;
            this.moving = true;
        }
        if(keys[37] && this.x > 0){
            this.x -= this.speed;
            this.frameY = 1;
            this.moving = true;
        }
        if(keys[40] && this.y < canvas.height - this.height){
            this.y += this.speed;
            this.frameY = 0;
            this.moving = true;
        }
        if(keys[39] && this.x < canvas.width - this.width){
            this.x += this.speed;
            this.frameY = 2;
            this.moving = true;
        }
    };
    changePlayerFrame(){
        if(this.frameX < 3 && this.moving) this.frameX++;
        else this.frameX = 0;
    };
};

const playerSprite = new Image();
playerSprite.src = `src/hero/Enemy 15-5.png`;

//erstelle neuen Spieler(Instanz der Klasse Player)
const player = new Player(500, 500, 32, 32, 0, 1, 5, false, playerSprite);
console.log(player);

const background = new Image();


function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH){
    console.log(`drawSprite aufgerufen`);
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
};

//Wenn ein key gedrückt wird, wird er zum Array keys hinzugefügt
//moving wird auf true gesetzt für die "Schritte"
window.addEventListener(`keydown`, function(e){
    keys[e.keyCode] = true;
    player.moving = true;
});

//wenn key losgelassen, dann aus array rausgelöscht
window.addEventListener(`keyup`, function(e){
    delete keys[e.keyCode];
    player.moving = false;
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
    requestAnimationFrame(animate);
    now = Date.now();
    elapsed = now - then;
    if(elapsed > fpsInterval) {
        then = now - (elapsed % fpsInterval);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        //ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        player.drawPlayer();
        player.movePlayer();
        player.changePlayerFrame();
        requestAnimationFrame(animate);
    };
};

startAnimating(1000);
// spawnEnemies();