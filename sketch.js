var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
 
var ground,road;

var carImg1,carImg2,carImg3,carImg4;

function preload(){
ground=loadImage("ground.png");
road=loadImage("track.jpg");
carImg1=loadImage("car1.png");
carImg2=loadImage("car2.png");
carImg3=loadImage("car3.png");
carImg4=loadImage("car4.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

if(gameState===2){
  game.End();
}

}
