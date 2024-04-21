let LeaveGame, StartAllOverAgain;
let score = 0;
let Player;
let x, y;
let scene =0;
let A_Scene=0;
let B_Scene=0;
let C_Scene=0;
let A_8=0;
let A1, B1, C1;
let A2, B2, C2; 
let bk1, b1, b2, b3;
let font;
let ThreeA, ThreeB1, ThreeB2, ThreeC1, ThreeC2;
let FourA, FourB1, FourB2, FourB3, FourC;
let PopNO, PopJo, BobWall;

function preload(){
  bk1= loadImage('Comp 1.gif');
  b1 = loadImage('Comp 1_2.gif');
  b2 = loadImage('Comp 1_1.gif');
  b3 = loadImage('Comp 1_3.gif');
  font= loadFont('AT.ttf');
  A1 = loadImage('Popsicle.png');
  B1= loadImage('Blob.png');
  C1 = loadImage('Umbrella.png');
  A2 = loadImage('TwoA.png');
  B2 = loadImage('TwoB.png');
  C2= loadImage('TwoC.png');
  ThreeA = loadImage('ThreeB1.png');
  ThreeB1 = loadImage('ThreeB1.png');
  ThreeB2 = loadImage('ThreeB2.png');
  ThreeC1 = loadImage('ThreeC1.png');
  ThreeC2 = loadImage('ThreeC2.png');
  FourA = loadImage('ThreeB1.png');
  FourB1 = loadImage('ThreeB1.png');
  FourB2 = loadImage('FourB2.png');
  FourB3 = loadImage('ThreeC2.png');
  FourC = loadImage('ThreeC2.png');
  PopNO = loadImage('PopNO.png');
  PopJo = loadImage('PopJo.png');
  BobWall = loadImage('BobWall.png');
  }

class Meee {
  constructor() {
    this.x = 0;
    this.y = 300;
    this.r=30;
    this.stat = 3;
    this.bk=[b1,b2,b3];
    this.colour=[[255,165,0],[222, 49, 99],[93, 63, 211]]
  }

    popsicleMe(){
      this.stat=1;
    }

    BlobMe(){
      this.stat=2;
    }

    UmbrellaMe(){
      this.stat=3;
    }

    ShowMe(){
      push();
      fill(this.colour[this.stat-1]);
      rect(10,10,50,50);
      pop();
    }

    checkY(){
      if(this.y<285)
      {this.y = 285;}
      else if(this.y>315)
      {this.y=315;}
    }


    
}

Player = new Meee();



function setup() {
  createCanvas(600, 600);
  background(220);
  LeaveGame = createButton("Leave Game");
  LeaveGame.position(width - 100, 30);
  LeaveGame.mousePressed(leaveGame);
  LeaveGame.style("font-family", "American Typewriter");
  StartAllOverAgain = createButton("Start Again");
  StartAllOverAgain.position(width - 100, 60);
  StartAllOverAgain.mousePressed(startAgain);
  StartAllOverAgain.style("font-family", "American Typewriter");
}

function leaveGame() {
  //push();
  image(bk1, 0, 0, 600,600);
  text(
    "Well, it's a pity you chose to leave the game.",
    20,
    height / 2
  );
  text(
    "You let life win :(",
    20,
    height / 2+40
  );
  text("Your score: " + score, width / 2 - 50, height / 2 + 120);
  scene=100;
  //pop();
}
function startAgain() {
  score = 0;
  scene=0;
  A_Scene=0;
  B_Scene=0;
  C_Scene=0;
  Player.x=0; 
  A_8 =0;
}
function New_Round(){
  A_Scene=0;
  B_Scene=0;
  C_Scene=0;
  Player.x=0; 
  A_8=0;
}


function Scene1(){
  image(bk1, 0, 0, 600,600); 
  text("Click on your avatar",190 , 150);
  push();
    fill(Player.colour[0]);
    //rect(10,180,180,180);
    image(A1, 60, 180, 87, 180);
  pop();
  push();
    fill(Player.colour[1]);
    // rect(210,180,180,180);
    image(B1, 210,180,180,180);
  pop();
  push();
    fill(Player.colour[2]);
    //rect(410,180,180,180);
    image(C1, 410, 180, 180, 180);
  pop();
  if(mouseIsPressed)
  {
    if(mouseX>10 && mouseX <190 && mouseY >180 && mouseY<360)
    {Player.popsicleMe();
    scene++;}
    else if(mouseX>210 && mouseX <390 && mouseY >180 && mouseY<360)
    {Player.BlobMe();
    scene++;}
    else if(mouseX>410 && mouseX <590 && mouseY >180 && mouseY<360)
    {Player.UmbrellaMe();
    scene++;}

    mouseIsPressed=false;
  }
}

function Scene2()//decide whether you're going to wake up
{
 // image(Player.bk[Player.stat-1],  0, 0, 600,600);
 background(220); 
 //Player.ShowMe();
  switch(Player.stat){
    case 1:
      image(b1, 0, 0, 600, 600);
      Scene2A();
      break;
    case 2: 
      image(b2, 0, 0, 600, 600);
      Scene2B();
      break;
    case 3:
      image(b3, 0, 0, 600, 600);
      Scene2C();
      break;
  }
  text("Okay.. so your alarm just went off.",120, 120);
  text(" Do you want to wake up?", 150, 150)

  
}

function Scene2C(){
  push();
    // fill(Player.colour[2]);
    // rect(210,180,180,180);
    image(C2, 150, 180, 300, 300);
  pop();
  if(mouseIsPressed)
  {
    if(mouseX>150 && mouseX <450 && mouseY >180 && mouseY<480)
    {Player.UmbrellaMe();
    scene++;}
    mouseIsPressed=false;
  }
}

function Scene2B(){
  push();
  //   fill(Player.colour[1]);
  //  rect(210,180,180,180);
   image(B2, 150, 180, 300, 300);
  pop();
  if(mouseIsPressed){
    if(mouseX>150 && mouseX <450 && mouseY >180 && mouseY<480)
    {Player.BlobMe();
    scene++;}
    mouseIsPressed=false;
  }
}

function Scene2A(){
  push();
    // fill(Player.colour[0]);
    // rect(210,180,180,180);
    image(A2, 150,180,300,300);
  pop();
  if(mouseIsPressed){
    if(mouseX>150 && mouseX <450 && mouseY >180 && mouseY<480)
    {Player.popsicleMe();
    scene++;}
    mouseIsPressed=false;
  }
}

function Scene3A(){
  push();
    // fill(Player.colour[0]);
    // rect(210,180,180,180);
    image(ThreeA, 150, 180, 300, 300);
  pop();
  text("Pick your clothes for the day? It's pretty",100, 120);
  text("hot today. Wear layers?",160, 150);
  if(mouseIsPressed){
    if((mouseX>150 && mouseX <450 && mouseY >180 && mouseY<480) )
    {Player.popsicleMe();
    scene++;}
    mouseIsPressed=false;
  }
}


function Scene3B(){
  push();
    // fill(Player.colour[0]); 
    // rect(110,180,180,180);
    image(ThreeB1, 110, 180, 180, 180);
    // fill(Player.colour[1]);
    // rect(310,180,180,180);
    image(ThreeB2, 310, 180, 180, 180);
  pop(); 
  text("Ughhhhh. Clothes. Nothing even fits a blob.",100, 120);
  text("Do you want to be put in a mold?",150, 150);
  if(mouseIsPressed){
    if((mouseX>110 && mouseX <290 && mouseY >180 && mouseY<360))
      {Player.popsicleMe();
       Scene3A();}
    else if((mouseX>310 && mouseX <490 && mouseY >180 && mouseY<360))
      {Player.BlobMe();
      scene++;
      }
    mouseIsPressed=false;
  }

}

function Scene3C(){
  push();
    // fill(Player.colour[1]);
    // rect(110,180,180,180);
    image(ThreeC1, 110, 180, 180, 180);
    // fill(Player.colour[2]);
    // rect(310,180,180,180);
    image(ThreeC2, 310, 180, 180, 180);
  pop();
  text("You're still sleeping. Do you feel guilty",100, 120);
  text("and hence want to wake up?",150, 150);
  if(mouseIsPressed)
  { if((mouseX>110 && mouseX <290 && mouseY >180 && mouseY<360) )
    {Player.BlobMe();
     Scene3B();}
    else if(mouseX>310 && mouseX <490 && mouseY >180 && mouseY<360)
    {Player.UmbrellaMe();
    scene++;}
    mouseIsPressed=false;
  }
}

function Scene3()//decide what to wear
{
  background(220);
  //Player.ShowMe();
  
  switch(Player.stat){
    case 1:
      image(b1, 0, 0, 600, 600);
      Scene3A();
      break;
    case 2:
      image(b2, 0, 0, 600, 600);
      Scene3B();
      break;
    case 3:
      image(b3, 0, 0, 600, 600);
      Scene3C();
      break;
  }

  
 
}

function Scene4A(){
  text("Do you want to have a nutritious",140, 120);
  text("and fulfilling breakfast?",180, 150);
  push();
    // fill(Player.colour[0]);
    // rect(210,180,180,180);
    image(FourA, 150, 180, 300, 300);
  pop();

  if(mouseIsPressed){
    if((mouseX>150 && mouseX <450 && mouseY >180 && mouseY<480))
    {Player.popsicleMe();
      scene++; }
    mouseIsPressed=false;
  }
}

function Scene4B(){
  text("Eat something, like food or straw?",135, 150);
  push();
    // fill(Player.colour[0]);
    // rect(10,180,180,180);
    image(FourB1, 10, 180, 180, 180);
    // fill(Player.colour[1]);
    // rect(210,180,180,180);
    image(FourB2, 210, 180, 180, 180);
    // fill(Player.colour[2]);
    // rect(410,180,180,180);
    image(FourB3, 410, 180, 180, 180);
  pop();

  if(mouseIsPressed){
    if((mouseX>10 && mouseX <190 && mouseY >180 && mouseY<360))
    {Player.popsicleMe();
    Scene4A();}
    else if((mouseX>210 && mouseX <390 && mouseY >180 && mouseY<360 ))
    {Player.BlobMe();
    scene++;}
    else if((mouseX>410 && mouseX <590 && mouseY >180 && mouseY<360))
    {Player.UmbrellaMe();
    Scene4C();}
    mouseIsPressed=false;
  }

}

function Scene4C(){
  text("Do you want to be a human today?",150, 150);
  push();
    // fill(Player.colour[2]);
    // rect(210,180,180,180);
    image(FourC, 150, 180, 300, 300);
  pop();
  if(mouseIsPressed)
  { if((mouseX>150 && mouseX <450 && mouseY >180 && mouseY<480))
    {Player.UmbrellaMe();
    scene++;}
    mouseIsPressed=false;
  }
}

function Scene4(){//eat food?
  background(220);
  //Player.ShowMe();
 
  switch(Player.stat){
    case 1:
      image(b1, 0, 0, 600, 600);
      Scene4A();
      break;
    case 2: 
      image(b2, 0, 0, 600, 600);
      Scene4B();
      break;
    case 3:
      image(b3, 0, 0, 600, 600);
      Scene4C();
      break;
  }
  
}

function IndividualGame(){
  // background(220);
  // Player.ShowMe();
  switch(Player.stat){
    case 1:
      GameA();
      break;
    case 2:
      GameB();
      break;
    case 3:
      GameC();
      break;
  }
}

function GameA(){
  
  image(b1, 0, 0, 600, 600);
  //text("Welcome to your brain! Not much is going to make sense. ", width/2-170, height/2);
  switch(A_Scene){
    case 0:
      UntimedMaze();
      break;
    case 1:
      //background(Player.colour[Player.stat-1]);
      push();
      textSize(50);
      text("You got to class!",100, 150);
      textSize(20);
      text(" Press the space bar to sit through class.", 100, 200);
      pop();
      if (keyIsPressed)
      {
        if(keyCode== 32)
        {A_Scene++;}
      }
      break;
    case 2:
      UntimedMaze();
      break;
    case 3:
      text("You finished your class! Press the space bar to sit through class.",150, 150);
      if (keyIsPressed)
      {
        if(keyCode== 32)
        {A_Scene++;}
        keyIsPressed = false;
      }
      break;
    case 4:
      A_Scene4();
      break;
    case 5:
      push();
      textSize(50);
      text("That was satisfying!",40, 150);
      textSize(20);
      text(" Press the space bar to go back home.", 100, 200);
      pop();
      if (keyIsPressed)
      {
        if(keyCode== 32)
        {A_Scene++;}
        keyIsPressed = false;
      }
      break;
    case 6:
      A_Scene6();
      break;
    case 7:
      push();
      textSize(50);
      text("A fully stocked pantry!",10, 150);
      textSize(20);
      text(" Press the space bar to continue back home.", 100, 200);
      pop();
      if (keyIsPressed)
      {
        if(keyCode== 32)
        {A_Scene++;}
        keyIsPressed = false;
      }
      break;
    case 8:
      A_Scene8();
      break;
    case 9:
      A_Scene9();
      break;

  }
}

function A_Scene9(){
  image(b1, 0, 0, 600, 600);
  text("What do you want to do?",170, 150);
  push();
    // fill(Player.colour[1]);
    // rect(110,180,180,180);
    image(BobWall, 110, 180, 180, 180);
  pop();
  push();
    // fill(Player.colour[0]);
    // rect(310,180,180,180);
    image(PopJo, 310, 180, 180, 180);
  pop();
  if(mouseIsPressed){
    if(mouseX>110 && mouseX<290 && mouseY >180 && mouseY<360)
    {New_Round();
     scene=3;
     Player.BlobMe();
     score--;}
    else if((mouseX>310 && mouseX <490 && mouseY >180 && mouseY<360))
    {New_Round();
      scene=3;
      Player.popsicleMe();
      score++;}
    mouseIspressed=false;
  }
}

function A_Scene8(){
  image(b1, 0, 0, 600, 600);
  switch(A_8){
    case 0:
      text("Your friends just texted, do you want to treat",80, 120);
      text("yourself by getting drinks with friends?", 120, 150);
      push();
        // fill(Player.colour[0]);
        // rect(110,180,180,180);
        image(ThreeB1, 110, 180, 180, 180);
      pop();
      push();
        // fill(Player.colour[0]);
        // rect(310,180,180,180);
        image(PopNO, 310, 180, 180, 180);
      pop();
      if(mouseIsPressed){
        if(mouseX>110 && mouseX<290 && mouseY >180 && mouseY<360)
        {A_8=1;}
        else if((mouseX>310 && mouseX <490 && mouseY >180 && mouseY<360))
        {A_8=2;}
        mouseIspressed=false;
      }
      console.log(A_8);
      break;
    case 1:
      background(220);
      image(b1, 0, 0, 600, 600);
      text("Congratulations, your bank balance is -$0.30.",50, 150);
      text(" Press the space bar to continue.", 120, 180);
      if (keyIsPressed)
        {
          if(keyCode== 32)
          {A_Scene++;}
        }
      break;
    case 2:
      background(220);
      image(b1, 0, 0, 600, 600);
      text("Congratulations, you now have bad FOMO and no friends.",10, 150);
      text(" Press the space bar to continue.", 120, 180);
      if (keyIsPressed)
        {
          if(keyCode== 32)
          {A_Scene++;}
        }
      break;
  }
}


function A_Scene6(){
  image(b1, 0, 0, 600, 600);
  text("Do you want to buy groceries?",150, 150);
  push();
    // fill(Player.colour[0]);
    // rect(110,180,180,180);
    image(ThreeB1, 110, 180, 180, 180);
  pop();
  push();
    // fill(Player.colour[0]);
    // rect(310,180,180,180);
    image(ThreeB1, 310, 180, 180, 180);
  pop();
  if(mouseIsPressed){
    if(mouseX>110 && mouseX<290 && mouseY >180 && mouseY<360)
    {A_Scene++;}
    else if((mouseX>310 && mouseX <490 && mouseY >180 && mouseY<360))
    {A_Scene++;}
    mouseIspressed=false;
  }
}

function A_Scene4(){
  image(b1, 0, 0, 600, 600);
  text("Wow, impressive. That was productive!",100, 120);
  text("Do you want to get lunch?",150, 150);
    push();
    // fill(Player.colour[0]);
    // rect(110,180,180,180);
    image(ThreeB1, 110, 180, 180, 180);
  pop();
  push();
    // fill(Player.colour[0]);
    // rect(310,180,180,180);
    image(ThreeB1, 310, 180, 180, 180);
  pop();
  if(mouseIsPressed){
    if(mouseX>110 && mouseX<290 && mouseY >180 && mouseY<360)
    {A_Scene++;}
    else if((mouseX>310 && mouseX <490 && mouseY >180 && mouseY<360))
    {A_Scene++;}
    mouseIspressed=false;
  }
}

function UntimedMaze(){
  image(b1, 0, 0, 600, 600);
  //rect(0,0,600,275);
  //rect(0,325,600,275);
  //rect(120,280,30,40);
  
  push();
  textSize(50);
  text("MOOOOOOOVE IT", 60, 150);
  textSize(20);
  text("(use arrow keys)", 200, 180);
    fill(Player.colour[Player.stat-1]);
  if(keyIsPressed)
    {
      if(keyCode==39)
        {Player.x+=5;}
      else if(keyCode==37)
        {Player.x-=5;}
      else if(keyCode == 38)
        {Player.y-=5;}
      else if(keyCode==40)
        {Player.y+=5;}

      Player.checkY(); 
        if(Player.x<0)
        {Player.x=0;}
        else if(Player.x>=600)
        { Player.x=600;
          A_Scene++;
        }
      
    }
  ellipse(Player.x, Player.y, Player.r, Player.r);
  pop();
}


function GameB(){
  switch(B_Scene){
    case 0:
      image(b2, 0, 0, 600, 600);
      push();
      textSize(40);
      text("You went to class, but what", 20, 220);
      text("is the point of class?", 100, 250);
      textSize(20);
      text("Press the space bar to continue",150, 400);
      pop();
      if (keyIsPressed)
      {
        if(keyCode== 32)
        {B_Scene++;}
        keyIsPressed=false;
      }
      break;
    case 1:
      image(b2, 0, 0, 600, 600);
      push();
      textSize(40);
      text("You forgot to have lunch :(", 20, 220);
      textSize(20);
      text("Press the space bar to continue",150, 400);
      pop();
      if (keyIsPressed)
      {
        if(keyCode== 32)
        {B_Scene++;}
        keyIsPressed=false;
      }
      break;
    case 2:
      image(b2, 0, 0, 600, 600);
      push();
      textSize(40);
      text("You go back home, but there", 20, 220);
      text(" is no food at home either.", 50, 250);
      textSize(20);
      text("Press the space bar to continue",150, 400);
      pop();
      if (keyIsPressed)
      {
        if(keyCode== 32)
        {B_Scene++;}
        keyIsPressed=false;
      }
      break;
    case 3:
      image(b2, 0, 0, 600, 600);
      push();
      textSize(40);
      text("Give up on the day?", 90, 220);
      textSize(20);
      text("Press the arrow-up to prep for tomorrow",20, 400);
      text("and arrow-down to just go to sleep.", 20, 420);
      pop();
      if (keyIsPressed)
      {
        if(keyCode== 38)
        {New_Round();
          scene=3;
          Player.BlobMe();
          score++;}
        else if (keyCode==40)
        {New_Round();
          scene=3;
          Player.UmbrellaMe();
          score--;}
      }
      break;
    }
}

function GameC(){ 
  switch(C_Scene){
    case 0:
      image(b3, 0, 0, 600, 600);
      push();
      textSize(40);
      text("You didn't wake up on time.", 20, 220);
      textSize(20);
      text("Press the space bar to continue",150, 400);
      pop();
      if (keyIsPressed)
      {
        if(keyCode== 32)
        {C_Scene++;}
        keyIsPressed=false;
      }
      break;
    case 1:
      image(b3, 0, 0, 600, 600);
      push();
      textSize(40);
      text("You didn't go to class.", 20, 220);
      textSize(20);
      text("Press the space bar to continue",150, 400);
      pop();
      if (keyIsPressed)
      {
        if(keyCode== 32)
        {C_Scene++;}
        keyIsPressed=false;
      }
      break;
    case 2:
      image(b3, 0, 0, 600, 600);
      push();
      textSize(40);
      text("You didn't eat.", 20, 220);
      textSize(20);
      text("Press the space bar to continue",150, 400);
      pop();
      if (keyIsPressed)
      {
        if(keyCode== 32)
        {C_Scene++;}
        keyIsPressed=false;
      }
      break;
    case 3:
      image(b3, 0, 0, 600, 600);
      push();
      textSize(40);
      text("Just go to sleep?", 90, 220);
      textSize(20);
      text("Press the arrow-up to feel better",20, 400);
      text("and arrow-down to just go to sleep.", 20, 420);
      pop();
      if (keyIsPressed)
      {
        if(keyCode== 38)
        {New_Round();
          scene=3;
          Player.BlobMe();
          score--;}
        else if (keyCode==40)
        {New_Round();
          scene=3;
          Player.UmbrellaMe();
          score--;}
      }
      break;
    }
}


function draw() {
  //console.log(Player.stat);
  //mainChar();
  textFont(font);  
  textSize(20);
  //console.log(totalTime);
  switch(scene)
  {
    case 0:
      image(bk1, 0, 0, 600,600);
      text("Welcome to your brain! Not much is going to make sense. ", 13, height/2);
      text("Press the space bar to begin", 160, height/2+130);
      if (keyIsPressed)
      {
        if(keyCode== 32)
        {scene++;}
      }
      break;
    case 1:
      Scene1();
      break;
    case 2:
      Scene2();
      break;
    case 3:
      Scene3();
      break;
    case 4:
      Scene4();
      break;
    case 5:
      IndividualGame();
      break;
    case 100:
      leaveGame();
      break;
    
  }
}
