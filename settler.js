////////////////////////////////////////////////////||
              //SETTLER-CLASS                       ||
////////////////////////////////////////////////////||

class Settler{
    constructor(
        id_settler,
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
        this.id_settler = id_settler;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.frameX = frameX;
        this.frameY = frameY;
        this.speed = speed;
        this.moving = moving;
        this.sprite = sprite;
        this.timer = 0;
    };
    drawSettler(){
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
    moveSettler(){
        for(let i = 0; i < enemies.length; i++){
        if(
            this.x < enemies[i].x + enemies[i].width &&
            this.x + this.width > enemies[i].x &&
            this.y < enemies[i].y + enemies[i].height &&
            this.height + this.y > enemies[i].y
            ){
            settlerDeaths++;
            settler = settler.filter(se => se.id_settler != this.id_settler);
            enemySettlerCollision.push(new EnemySettlerCollision(this.x, this.y));   
            };
        if(
            this.x < hero.x + hero.width &&
            this.x + this.width > hero.x &&
            this.y < hero.y + hero.height &&
            this.height + this.y > hero.y
        ){
            this.speed = 3;
            SettlerSpeedBuff.play();
        };        
        };


        if(this.y < 310 && this.y > 300){
            this.frameY = 0; 
            this.y -= this.speed;
            this.moving = true;
        }else if(this.y > 300){
            this.y -= this.speed;
            this.moving = true;
        }else{
            settlerSaves++;
            settler.splice(0,1);   
        };
    };
    changeSettlerFrame(){
        this.timer++
        if(this.timer % 10 === 0){
            if(this.frameX < 2){
                this.frameX++;
            }else{
                this.frameX = 0;
            };
        };
    };
};

//Array für die vorhandenen Siedler muss let sein, da ich es später
//durch .filter überschreibe
let settler = [];
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

////////////////////////////////////////////////////||
                //SETTLER-SPAWN-FUNCTION//          ||
////////////////////////////////////////////////////||

function spawnSettler (){
    setInterval(() => {
        const id = new Date();
        const y = 1000;
        const x = Math.floor(Math.random() * (270 - 0) + 0);
        const width = 32;
        const height = 32;
        const frameX = 0;
        const frameY = 3;
        const speed = 1;
        const moving = true;
        const sprite = new Image();
        sprite.src = settlerSprites[Math.floor(Math.random() * settlerSprites.length)];
        settler.push(new Settler(id, x, y, width, height, frameX, frameY, speed, moving, sprite));
    }, 1000);
}; 
