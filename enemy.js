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
        drawSprite(this.sprite,
             this.width * this.frameX,
             this.height * this.frameY,
             this.width,
             this.height,
             this.x,
             this.y,
             this.width,
             this.height);
    };
    moveEnemy(){
        if(this.x > 1){
            this.x -= this.speed;
            this.moving = true;
        }else enemies.splice(0,1);
    };
    // changeEnemyFrame(){
    //     if(this.frameX < 1 && this.moving) this.frameX++;
    //     else this.frameX = 0;
    // };

    // collisionWithHero(){
    //     if(
    //         hero.x > this.x + this.width ||
    //         hero.x + hero.width < this.x ||
    //         hero.y > this.y + this.height ||
    //         hero.y + hero.height < this.y
    //     ){
    //         console.log(`no boom`);
    //     }else{
        //Wie lösche ich den einzelnen Gegner jetzt?
    //         console.log(`BOOOOOM`);
    //     };
    // };
};

const EnemySprite = new Image();
EnemySprite.src = `src/enemy/Enemy 17-5.png`;

//Array für die vorhandenen Gegner
const enemies = [];

function spawnEnemies(){
    setInterval(() => {
        //x und y bei jedem Aufruf random ändern
        const y = Math.floor(Math.random() * (1400 - 100) + 100);
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
