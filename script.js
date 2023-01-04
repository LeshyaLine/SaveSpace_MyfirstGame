const canvas = document.querySelector(`canvas`);
const ctx = canvas.getContext(`2d`);
canvas.width = 1000;
canvas.height = 1000;

const keys = [];

const player = {
    x: 500,
    y: 500,
    //SpriteShet Höhe und Breite durch rows und colums auf dem Sheet
    width: 32,
    height: 32,
    frameX: 0,
    frameY: 1,
    speed: 5,
    moving: false,
};

const playerSprite = new Image();
playerSprite.src = `src/hero/Enemy 15-5.png`;
const background = new Image();

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH){
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
};

//Wenn ein key gedrückt wird, wird er zum Array hinzugefügt
window.addEventListener(`keydown`, function(e){
    keys[e.keyCode] = true;
    player.moving = true;
});

//wenn key losgelassen, dann aus array rausgelöscht
window.addEventListener(`keyup`, function(e){
    delete keys[e.keyCode];
    player.moving = false;
});

function movePlayer(){
    if(keys[38] && player.y > 100){
        player.y -= player.speed;
        player.frameY = 3;
        player.moving = true;
    }
    if(keys[37] && player.x > 0){
        player.x -= player.speed;
        player.frameY = 1;
        player.moving = true;
    }
    if(keys[40] && player.y < canvas.height - player.height){
        player.y += player.speed;
        player.frameY = 0;
        player.moving = true;
    }
    if(keys[39] && player.x < canvas.width - player.width){
        player.x += player.speed;
        player.frameY = 2;
        player.moving = true;
    }
}
function changePlayerFrame(){
    if(player.frameX < 3 && player.moving) player.frameX++;
    else player.frameX = 0;
}

// function animate(){
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
//     drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width, player.height);
//     movePlayer();
//     changePlayerFrame();
//     requestAnimationFrame(animate);
// }

// animate();

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
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width, player.height);
        movePlayer();
        changePlayerFrame();
        requestAnimationFrame(animate);
    };
};

startAnimating(1000);