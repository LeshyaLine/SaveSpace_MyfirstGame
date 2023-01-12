class EnemySettlerCollision{
    constructor(
        x,
        y,
    ){
        this.spriteWidth = 512;
        this.spriteHeight = 512;
        this.width = this.spriteWidth * 0.5;
        this.height = this.spriteHeight * 0.5;
        this.x = x - this.width/2;
        this.y = y - this.height/2;
        this.image = new Image();
        this.image.src = `src/0.png`;
        this.frameX = 0;
        this.frameY = 0;
        this.timer = 0;
        this.sound = new Audio();
        this.sound.src = `src/sounds/Goblin Death.wav`;
    };
    update(){
        this.timer++;
        if(this.timer % 5 === 0){
            if(this.frameX < 3){
                this.frameX++;
            }else{
                this.frameX = 0;
                this.frameY++;
            };
        };
        if(this. frameY === 0) this.sound.play();
    };
    draw(){
        ctx.drawImage(
            this.image,
            this.spriteWidth * this.frameX,
            this.spriteHeight * this.frameY,
            this.spriteWidth,
            this.spriteHeight,
            this.x,
            this.y,
            this.width,
            this.height,
        );
    };
};

const enemySettlerCollision = [];