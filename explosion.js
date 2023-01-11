class Explosion{
    constructor(
        x,
        y,
    ){
        this.spriteWidth = 200;
        this.spriteHeight = 179;
        this.width = this.spriteWidth/2;
        this.height = this.spriteHeight/2;
        this.x = x - this.width/2;
        this.y = y - this.width/2;
        this.image = new Image();
        this.image.src = `src/enemy/boom.png`;
        this.frame = 0;
        this.timer = 0;
        this.sound = new Audio();
        this.sound.src = `src/sounds/erase.wav`;
    };
    update(){
        if(this.frame === 0) this.sound.play();
        this.timer++;
        if(this.timer % 10 ===0){
            this.frame++;
        };        
    };
    draw(){
        ctx.drawImage(
             this.image,
             this.spriteWidth * this.frame,
             0,
             this.spriteWidth,
             this.spriteHeight,
             this.x,
             this.y, 
             this.width, 
             this.height
             );
    };
};

//Array, in dem die gerade aktiven Explosionen gespeichert werden
const explosions = [];