function hatakeB(){
  if(map_hatakeB == true){
    image(hatake,0,0,width,height);
    fill(255,120);
    stroke(0);
    rect(1100,550,150,150,25);
    image(olive,1100,550,150,150);
    image(turn,50,50,100,100);
    if(vis_olive == true){
      image(batsu,1100,550,150,150);
    }
  }
}
