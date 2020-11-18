//image
PImage maps;
PImage olive;
PImage saba;
PImage tomato;
PImage tsuma;
PImage pin;
PImage hatake;
PImage sea;
PImage turn;
PImage batsu;
PImage finish;

//fx
boolean map_main = true;
boolean map_sea = false;
boolean map_hatakeA = false;
boolean map_hatakeB = false;

//visible
boolean vis_saba = false;
boolean vis_tomato = false;
boolean vis_olive = false;

//height
int hei = 1;
function setup() {
  size(1280,720);
  frameRate(60);
  noCursor();
  
  maps = loadImage("maps.jpg");
  hatake = loadImage("hatake.jpg");
  sea = loadImage("sea.jpg");
  olive = loadImage("Olive.png");
  saba = loadImage("saba.png");
  tomato = loadImage("tomato.png");
  pin = loadImage("pin.png");
  tsuma = loadImage("tsumayouji.png");
  turn = loadImage("turn.png");
  batsu = loadImage("batsu.png");
  finish = loadImage("finish.jpg");
}


function draw() {
  maps();
  sea();
  hatakeA();
  hatakeB();
  end();
  visible();
}
