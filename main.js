//image
var mapsImage;
var oliveImage;
var sabaImage;
var tomatoImage;
var tsumaImage;
var pinImage;
var hatakeImage;
var seaImage;
var turnImage;
var batsuImage;
var finishImage;

//fx
var map_main = true;
var map_sea = false;
var map_hatakeA = false;
var map_hatakeB = false;

//visible
var vis_saba = false;
var vis_tomato = false;
var vis_olive = false;

//height
var hei = 1;

function setup() {
  var myCanvas = createCanvas(1280, 720);
  myCanvas.parent("canvasContainer");

  frameRate(60);
  //noCursor();

  mapsImage = loadImage("./data/maps.jpg");
  hatakeImage = loadImage("./data/hatake.jpg");
  seaImage = loadImage("./data/sea.jpg");
  oliveImage = loadImage("./data/Olive.png");
  sabaImage = loadImage("./data/saba.png");
  tomatoImage = loadImage("./data/tomato.png");
  pinImage = loadImage("./data/pin.png");
  tsumaImage = loadImage("./data/tsumayouji.png");
  turnImage = loadImage("./data/turn.png");
  batsuImage = loadImage("./data/batsu.png");
  finishImage = loadImage("./data/finish.jpg");
}


function draw() {

  maps();
  sea();
  hatakeA();
  hatakeB();
  end();
  // visible();
}
