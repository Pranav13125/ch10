//------------------------------------------------------------------- SECTION START
var sea,ship;
var seaImg,shipImg;




//--------------------------------------------------------------------------- SECTION  END 








//--------------------------------------------------------------------------- SECTION START



// function preload(){ SECTION





function preload(){
  
  //uncomment the code to add animation to ship 




  shipImg1 = loadAnimation("ship-1.png","ship-2.png");




  //shipImg1 = loadAnimation("ship-1.png");
  //shipImg1 = loadAnimation("ship-1");
  //shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-1.png","ship-2.png");
  //shipImg1 = loadAnimation("ship-1","ship-2","ship-1","ship-2");
  //------------------------------------------------------------------------- SECTION END 






  //------------------------------------------------------------------------- SECTION START





  // add Image SECTION!!!!!!!








  seaImg = loadImage("sea.png");
}
//--------------------------------------------------------------------------- SECTION END 





// ---------------------------------------------------------------------------- SECTION START
function setup(){
  createCanvas(400,400);
  background("blue");
//------------------------------------------------------------------------------ SECTION END 




//-------------------------------------------------------------------------------SECTION START


  // Moving background
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale=0.3;
//-------------------------------------------------------------------------------- SECTION END








//--------------------------------------------------------------------------------------- SECTION START 
  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale =0.20;
  
}
//--------------------------------------------------------------------------------------- SECTION END 






//--------------------------------------------------------------------------------------- SECTION START
function draw() {
  background(0);
  sea.velocityX = -3;

  //uncomment code to reset the background
  if(sea.x < 0){
    //sea.x = 0;
    sea.x = sea.width/8;
    sea.x = sea.width/8;
    sea.y = height/2;
  }

 
  drawSprites();
}
//------------------------------------------------------------------------------------ SECTION END



