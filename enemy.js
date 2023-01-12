class Enemy{
    constructor(
        id_enemy,
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
        this.id_enemy = id_enemy;
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
        drawSprite(
            this.sprite,
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
            enemies = enemies.filter(en => en.id_enemy !== this.id_enemy);            

            //für jeden getroffenen Gegner wird eine Instanz der Klasse
            //Explosion dem Array explosions hinzugefügt
            explosions.push(new Explosion(this.x, this.y));
        };
    };

    // changeEnemyFrame(){
    //     if(this.frameX < 1 && this.moving) this.frameX++;
    //     else this.frameX = 0;
    // };
};

const EnemySprite = new Image();
EnemySprite.src = `src/enemy/Enemy 17-5.png`;

//Array für die vorhandenen Gegner muss let sein, da wir es überschreiben
//in MoveEnemy
let enemies = [];

function spawnEnemies(){
    setInterval(() => {
        const id = new Date()
        const y = Math.floor(Math.random() * ((canvas.height - 15) - 100) + 100);
        const x = 1000;
        const width = 32;
        const height = 32;
        const frameX = 0;
        const frameY = 1;
        const speed = 1;
        const moving = false;
        const sprite = EnemySprite;
        enemies.push(new Enemy(id, x, y, width, height, frameX, frameY, speed, moving, sprite));
    }, 1000);
};
