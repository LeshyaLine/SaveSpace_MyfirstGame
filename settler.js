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

//Array für die vorhandenen Siedler
const settler = [];
const settlerSprites = [
    "src/settler/Female 01-1.png",
    "src/settler/Female 01-2.png", 
    "src/settler/Female 01-3.png",
    "src/settler/Female 01-4.png", 
    "src/settler/Female 02-1.png", 
    "src/settler/Female 02-2.png", 
    "src/settler/Female 02-3.png", 
    "src/settler/Female 02-4.png", 
    "src/settler/Female 03-1.png", 
    "src/settler/Female 03-2.png", 
    "src/settler/Female 03-3.png", 
    "src/settler/Female 03-4.png", 
    "src/settler/Female 04-1.png", 
    "src/settler/Female 04-2.png", 
    "src/settler/Female 04-3.png", 
    "src/settler/Female 04-4.png", 
    "src/settler/Female 05-1.png", 
    "src/settler/Female 05-2.png", 
    "src/settler/Female 05-3.png", 
    "src/settler/Female 05-4.png", 
    "src/settler/Female 06-1.png", 
    "src/settler/Female 06-2.png", 
    "src/settler/Female 06-3.png", 
    "src/settler/Female 06-4.png", 
    "src/settler/Female 07-1.png", 
    "src/settler/Female 08-1.png", 
    "src/settler/Female 08-2.png", 
    "src/settler/Female 08-3.png", 
    "src/settler/Female 08-4.png", 
    "src/settler/Female 09-1.png", 
    "src/settler/Female 09-2.png", 
    "src/settler/Female 09-3.png", 
    "src/settler/Female 09-4.png", 
    "src/settler/Female 10-1.png", 
    "src/settler/Female 11-1.png", 
    "src/settler/Female 11-2.png", 
    "src/settler/Female 11-3.png", 
    "src/settler/Female 11-4.png", 
    "src/settler/Female 12-1.png", 
    "src/settler/Female 12-2.png", 
    "src/settler/Female 12-3.png", 
    "src/settler/Female 12-4.png", 
    "src/settler/Female 13-1.png", 
    "src/settler/Female 13-2.png", 
    "src/settler/Female 13-3.png", 
    "src/settler/Female 13-4.png", 
    "src/settler/Female 14-1.png",
    "src/settler/Female 14-2.png",
    "src/settler/Female 14-3.png", 
    "src/settler/Female 14-4.png", 
    "src/settler/Female 15-1.png", 
    "src/settler/Female 16-1.png", 
    "src/settler/Female 17-1.png", 
    "src/settler/Female 17-2.png", 
    "src/settler/Female 17-3.png", 
    "src/settler/Female 17-4.png", 
    "src/settler/Female 18-1.png", 
    "src/settler/Female 18-2.png", 
    "src/settler/Female 18-3.png", 
    "src/settler/Female 18-4.png", 
    "src/settler/Female 19-1.png", 
    "src/settler/Female 19-2.png", 
    "src/settler/Female 19-3.png", 
    "src/settler/Female 19-4.png", 
    "src/settler/Female 20-1.png", 
    "src/settler/Female 20-2.png", 
    "src/settler/Female 20-3.png", 
    "src/settler/Female 20-4.png", 
    "src/settler/Female 21-1.png", 
    "src/settler/Female 21-2.png", 
    "src/settler/Female 21-3.png", 
    "src/settler/Female 21-4.png", 
    "src/settler/Female 22-1.png", 
    "src/settler/Female 22-2.png", 
    "src/settler/Female 22-3.png", 
    "src/settler/Female 22-4.png", 
    "src/settler/Female 23-1.png", 
    "src/settler/Female 24-1.png", 
    "src/settler/Female 25-1.png",
    "src/settler/Male 01-1.png", 
    "src/settler/Male 01-2.png", 
    "src/settler/Male 01-3.png", 
    "src/settler/Male 01-4.png", 
    "src/settler/Male 02-1.png", 
    "src/settler/Male 02-2.png", 
    "src/settler/Male 02-3.png", 
    "src/settler/Male 02-4.png", 
    "src/settler/Male 03-1.png", 
    "src/settler/Male 03-2.png", 
    "src/settler/Male 03-3.png", 
    "src/settler/Male 03-4.png", 
    "src/settler/Male 04-1.png", 
    "src/settler/Male 04-2.png", 
    "src/settler/Male 04-3.png", 
    "src/settler/Male 04-4.png", 
    "src/settler/Male 05-1.png", 
    "src/settler/Male 05-2.png", 
    "src/settler/Male 05-3.png", 
    "src/settler/Male 05-4.png", 
    "src/settler/Male 08-1.png", 
    "src/settler/Male 08-2.png", 
    "src/settler/Male 08-3.png", 
    "src/settler/Male 08-4.png", 
    "src/settler/Male 09-1.png", 
    "src/settler/Male 09-2.png", 
    "src/settler/Male 09-3.png", 
    "src/settler/Male 09-4.png", 
    "src/settler/Male 10-1.png", 
    "src/settler/Male 10-2.png", 
    "src/settler/Male 10-3.png", 
    "src/settler/Male 10-4.png", 
    "src/settler/Male 11-1.png", 
    "src/settler/Male 11-2.png", 
    "src/settler/Male 11-3.png", 
    "src/settler/Male 11-4.png", 
    "src/settler/Male 12-1.png", 
    "src/settler/Male 12-2.png", 
    "src/settler/Male 12-3.png", 
    "src/settler/Male 12-4.png", 
    "src/settler/Male 13-1.png", 
    "src/settler/Male 13-2.png", 
    "src/settler/Male 13-3.png", 
    "src/settler/Male 13-4.png", 
    "src/settler/Male 14-1.png", 
    "src/settler/Male 14-2.png", 
    "src/settler/Male 14-3.png",
    "src/settler/Male 14-4.png", 
    "src/settler/Male 16-1.png", 
    "src/settler/Male 16-2.png", 
    "src/settler/Male 16-3.png", 
    "src/settler/Male 16-4.png", 
    "src/settler/Male 17-1.png", 
    "src/settler/Male 17-2.png", 
    "src/settler/Male 17-3.png", 
    "src/settler/Male 17-4.png", 
    "src/settler/Male 18-1.png"
];

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
        const sprite = new Image();
        sprite.src = settlerSprites[Math.floor(Math.random() * settlerSprites.length)];
        settler.push(new Settler(x, y, width, height, frameX, frameY, speed, moving, sprite));
        console.log(settler);
    }, 1000);
}; 
