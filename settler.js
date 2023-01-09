class Settler{
    constructor(
        x,
        y,
        width,
        height,
        frameX,
        frameY,
        speed,
        moving,
        sprite,
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
    drawSettler(){
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
    moveSettler(){
        if(this.y > 300){
            this.y -= this.speed;
            this.moving = true;
        }else settler.splice(0,1);    
    };
    changeSettlerFrame(){
        if(this.frameX < 3 && this.moving) this.frameX++;
        else this.frameX = 0;
    }
};

//Erstellen der SpriteSource für die Image Methode
const SettlerSprite = new Image();
SettlerSprite.src = `src/settler/Female 03-1.png`;

//Array für die vorhandenen Siedler
const settler = [];

function spawnSettler (){
    setInterval(() => {
        const y = 1000;
        const x = Math.floor(Math.random() * (270 - 0) + 0);
        const width = 32;
        const height = 32;
        const frameX = 0;
        const frameY = 3;
        const speed = 1;
        const moving = false;
        const sprite = SettlerSprite;
        settler.push(new Settler(x, y, width, height, frameX, frameY, speed, moving, sprite));
        console.log(settler);
    }, 1000);
}; 
