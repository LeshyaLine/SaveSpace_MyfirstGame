class Enemy{
    constructor(
        // id,
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
        if(
            hero.x < this.x + this.width &&
            hero.x + hero.width > this.x &&
            hero.y < this.y + this.height &&
            hero.height + hero.y > this.y
        ){
            console.log(`Collision detected!`);
            //delete where enemy x = hero x und y 0 hero y
            // console.log(enemies.indexOf(enemy));
            // console.log(this);
            // console.log(indexOf(this))
            // // console.log(enemies.indexOf(en => en.y === hero.y)); 
            // console.log(enemies.filter(enemy => enemy.id === this.id))         
            //enemies.splice(enemies[this],1);

            //sound
            // audioDisappearEnemy.play();
        }
    };

    // changeEnemyFrame(){
    //     if(this.frameX < 1 && this.moving) this.frameX++;
    //     else this.frameX = 0;
    // };
};

const EnemySprite = new Image();
EnemySprite.src = `src/enemy/Enemy 17-5.png`;

//Array für die vorhandenen Gegner
const enemies = [];

function spawnEnemies(){
    setInterval(() => {
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
    }, 1000);
};
