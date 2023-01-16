class Hero{
    constructor(
        id_hero,
        x,
        y,
        width,
        height,
        frameX,
        frameY,
        speed,
        moving,
        timer,
        sprite,
    ){
        this.id_hero = id_hero;
        this.spriteWidth = 200;
        this.spriteHeight = 200;
        this.width = this.spriteWidth * 0.4;
        this.height = this.spriteHeight * 0.4;
        this.x = 500;
        this.y = 500;
        this.frameX = 0;
        this.frameY = 0;
        this.speed = speed;
        this.moving = moving;
        this.timerhero = 0;
        this.sprite = sprite;

    };
    drawHero(){
        drawSprite(
            this.sprite,
            this.frameX * this.spriteWidth,
            this.frameY * this.spriteHeight,
            this.spriteWidth,
            this.spriteHeight,
            this.x,
            this.y,
            this.width,
            this.height);
    };
    moveHero(){

    };
    changeHeroFrame(){
        timerhero++;
        console.log(titimerheromer);
        if(this.timerhero % 10 === 0 && this.moving){
            if(this.frameX < 30 && this.moving){
                this.frameX++;
            }else this.frameX = 0;            
        };

    };
};

const heroSprite = new Image();
heroSprite.src = `src/hero/owlbear/owlbear.png`;

const hero_id = new Date();
let timerhero = 0;

//neue Spielerinstanz erstellen
const hero = new Hero(hero_id, 500, 500, 200, 200, 1, 0, 4, true, heroSprite,timerhero);
