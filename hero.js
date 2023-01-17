////////////////////////////////////////////////////||
                //HERO-CLASS//                      ||
////////////////////////////////////////////////////||

class Hero{
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
    drawHero(){
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
   moveHero(){
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
    changeHeroFrame(){
        if(this.frameX < 1 && this.moving) this.frameX++;
        else this.frameX = 0;
    };
};

const heroSprite = new Image();

//die gepickte Color aus dem LocalStorage ziehen
let pickedColor = localStorage.getItem("pickedColor");

if(pickedColor == `grey`){
    heroSprite.src = `src/hero/Enemy 15-1.png`;
}else if(pickedColor == `blue`){
    heroSprite.src = `src/hero/Enemy 15-2.png`;
}else if(pickedColor == `red`){
    heroSprite.src = `src/hero/Enemy 15-3.png`;
}else if(pickedColor == `green`){
    heroSprite.src = `src/hero/Enemy 15-4.png`;
}else if(pickedColor == `yellow`){
    heroSprite.src = `src/hero/Enemy 15-5.png`;
}else if( pickedColor == `purple`){
    heroSprite.src = `src/hero/Enemy 15-6.png`;
}else{
    heroSprite.src = `src/hero/Enemy 15-6.png`;
};

////////////////////////////////////////////////////||
                //HERO-SPAWN-FUNCTION//             ||
////////////////////////////////////////////////////||

//Neue SpielerInstanz erstellen
const hero = new Hero(500, 500, 32, 32, 0, 1, 4, false, heroSprite);




