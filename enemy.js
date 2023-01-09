
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
        moving,
        sprite
    ){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.frameX = frameX;
        this.frameY = frameY;
        this.speed = speed;
        this.moving = moving;
        this.sprite = sprite;
    };
    drawEnemy(){
        drawSprite(this.sprite, this.width * this.frameX, this.height * this.frameY, this.width, this.height, this.x, this.y, this.width, this.height);
    };
    moveEnemy(){
        this.x -= this.speed;
    };
};

const EnemySprite = new Image();
EnemySprite.src = `src/hero/Enemy 17-5.png`;

// //Erstelle neuen Enemy
// const enemy = new Enemy(700, 700, 32, 32, 0, 1, 5, false, EnemySprite);
// console.log(enemy);


//Array für die vorhandenen Gegner
const enemies = [];

function spawnEnemies(){
    setInterval(() => {
        //x und y bei jedem Aufruf random ändern
        const y = Math.floor(Math.random() * (1400 - 100) + 100);
        //Später noch außerhalb des Canvas, damit sie reinlaufen
        const x = 1000;
        const width = 32;
        const height = 32;
        const frameX = 0;
        const frameY = 1;
        const speed = 1;
        const moving = false;
        const sprite = EnemySprite;
        enemies.push(new Enemy(x, y, width, height, frameX, frameY, speed, moving, sprite));
        console.log(enemies)
    }, 1000);
};