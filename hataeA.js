function hatakeA(){
  if(map_hatakeA == true){
    image(hatake,0,0,width,height);
    fill(255,120);
    stroke(0);
    rect(1100,550,150,150,25);
    image(tomato,1100,550,150,150);
    image(turn,50,50,100,100);
    if(vis_tomato == true){
      image(batsu,1100,550,150,150);
    }
  }
}
