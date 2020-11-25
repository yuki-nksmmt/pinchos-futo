function mousePressed(){
/*map*/
  //sea
  if(map_main != false&&mouseX >= 600 && mouseX < 650 && mouseY >= 450 && mouseY < 500){
    map_sea = true;
    map_main = false;
  }
  //hatakeA
  if(map_main != false&&mouseX >= 500 && mouseX < 550 && mouseY >= 300 && mouseY < 350){
    map_hatakeA = true;
    map_main = false;
  }
  //hatakeB
  if(map_main != false&&mouseX >= 600 && mouseX < 650 && mouseY >= 200 && mouseY < 250){
    map_hatakeB = true;
    map_main = false;
  }

/*sea*/
  //return
  if(map_sea != false&&mouseX >= 50 && mouseX < 150 && mouseY >= 50 && mouseY < 150){
    map_sea = false;
    map_main = true;
  }
  //saba
  if(map_sea != false&&mouseX >= 1100 && mouseX < 1260 && mouseY >= 550 && mouseY < 700){
    map_sea = false;
    map_main = true;
  vis_saba = true;
}

  /*hatakeA*/
  //return
  if(map_hatakeA != false&&mouseX >= 50 && mouseX < 150 && mouseY >= 50 && mouseY < 150){
    map_hatakeA = false;
    map_main = true;
  }
  //saba
  if(map_hatakeA != false&&mouseX >= 1100 && mouseX < 1260 && mouseY >= 550 && mouseY < 700){
    map_hatakeA = false;
    map_main = true;
    vis_tomato = true;
  }

  /*hatakeA*/
  //return
  if(map_hatakeB != false&&mouseX >= 50 && mouseX < 150 && mouseY >= 50 && mouseY < 150){
    map_hatakeB = false;
    map_main = true;
  }
  //saba
  if(map_hatakeB != false&&mouseX >= 1100 && mouseX < 1260 && mouseY >= 550 && mouseY < 700){
    map_hatakeB = false;
    map_main = true;
    vis_olive = true;
  }

/*End*/
//restart
if(vis_tomato == true&&vis_saba == true&&vis_olive  == true){
  if(mouseX >= 640 && mouseX < 740 && mouseY >= 500 && mouseY < 600){
    vis_olive = false;
    vis_saba = false;
    vis_tomato = false;
    map_main = true;
  }
}
}
