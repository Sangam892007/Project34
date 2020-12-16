var dog,database,foodS,foodStock;
var dogimg,happydogimg;
var form;
var gameState = 0;

function preload()
{
  dogimg = loadImage("./images/dogimg.png");
  happydogimg = loadImage("./images/happydog.png");
}

function setup() {
  createCanvas(800, 800);
  db = firebase.database();
  dog = createSprite(250,250,100,100);
  dog.addImage(dogimg);
  dog.scale = 0.7;
  dog.y = 400;
  dog.x = 400;
  dog.visible = false;
  db.ref('food').on("value",data =>{
    foodS = data.val();
  })
  form = new Form();
  

  
}


function draw() {  
if (gameState === 0){
  background(255);
  form.display();
}
else{
  background(0,200,0);
  drawSprites();
  form.hide();
  dog.visible = true;
  textSize(30);
  fill("yellow");
  text("Food Remaining:"+foodS,250,100);
  FeedDog();
}

}

function FeedDog(){
  if (keyWentDown(UP_ARROW) && foodS > 0){
    foodS--;
    db.ref('/').update({
      food:foodS
    });
    dog.addImage(happydogimg);
  }
}



