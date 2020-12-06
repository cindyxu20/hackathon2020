let yPos;
let athena;
let cindy;
let eric;
let ian;
let joey;

let homeImage;
let devi
function preload() {
  song = loadSound('assets/lucky_dragons_-_power_melody.mp3');
  img = loadImage('https://images-ext-1.discordapp.net/external/3_xsgwmNfxiCswVE0QhjzncbsJUzk3vAf2E6pCmHQ7M/http/duke-re.appspot.com/img/mascot.gif?width=526&height=702');
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  yPos = windowHeight;
  athena = new Credit("Athena Yao", "character designer / Devi's mother and goddess of wisdom", 200);
  cindy = new Credit("Cindy Xu", "script writer, terrific tracer, and not-so-sketchy artist ", 400);
  eric = new Credit("Eric Quan", "sorcerer of sounds and special effects and resident Pokemon correspondent", 600);
  ian = new Credit("Ian Walston", "engineering programming and ultimate source of knowedge", 800);
    joey = new Credit("Joseph Scarpa", "design programming and somehow last alphabetically", 1000);
    homeImage = new Attribution("Home Screen Image", "Duke Brand Portal", 1400)
  imageMode(CENTER);
  
  song.play();
   
}


function draw() {
  background(1, 33, 105);
  textAlign(CENTER);
  textFont('EB Garamond');
  textSize(100);
  text("Credits" , windowWidth/2, yPos);
  athena.display();
  cindy.display();
    eric.display();
      ian.display();
        joey.display();
        image(img, windowWidth/2, yPos+1200, 300, 350);
        homeImage.display();
yPos--;

  
}


class Credit {
  constructor(c, description, diff) {
    this.c = c;
    this.description = description;
    this.diff = diff;
  }
  display() {
    fill(255, 255, 255);
  textSize(75)
  text(this.c, width/2, yPos + this.diff);
  textSize(50)
  text(this.description, width/2, yPos + this.diff + 50);

  }
 

}
class Attribution{
    constructor(c, description, diff) {
        this.c = c;
        this.description = description;
        this.diff = diff;
      }
      display() {
        fill(255, 255, 255);
      textSize(50)
      text(this.c, width/2, yPos + this.diff);
      textSize(30)
      text(this.description, width/2, yPos + this.diff + 40);

  }
}