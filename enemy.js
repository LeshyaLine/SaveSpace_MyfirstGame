
//EnemyClass erstellen
class Enemy{
    constructor(
        x,
        y,
        width,
        height,
        frameX,
        frameY,
        speed,
        moving
        //src?
    ){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.frameX = frameX;
        this.frameY = frameY;
        this.speed = speed;
        this.moving = moving;
    };
    // drawSprite(EnemySprite, width, height, frameX, frameY, speed, moving);
};

const EnemySprite = new Image();
EnemySprite.src = `src/hero/Enemy 17-5.png`



//Array für die vorhandenen Gegner
const enemies = [];

function spawnEnemies(){
    setInterval(() => {
        const x = 100;
        const y = 100;
        const width = 32;
        const height = 32;
        const frameX = 0;
        const frameY = 0;
        const speed = 5;
        const moving = true;
        // const sry = random
        enemies.push(new Enemy(x, y, width, height, frameX, frameY, speed, moving));
        console.log(enemies)
    }, 1000);
};

//enemies.forEach(n => n.drawSprite);

