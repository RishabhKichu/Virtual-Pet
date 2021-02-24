var dog, sadDog, happyDog;

var foodObj, database;

var feedBtn, foodStock;

function preload() {
  sadDog = loadImage("Images/Dog.png");
  happyDog = loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000, 400);

  database = firebase.database();

  foodObj = new Food();

  dog = createSprite(800, 200, 150, 150);
  dog.addImage(sadDog);
  dog.scale = 0.15;

  feedBtn = createButton("Feed the dog");
  feedBtn.position(700, 95);
  feedBtn.mousePressed(feedDog);

  addFoodBtn = createButton("Add Food");
  addFoodBtn.position(800, 95);
  addFoodBtn.mousePressed(addFoods);
  foodObj.getFoodStock();
  // foodObj.deductFood(foodStock - 1);
}

function draw() {
  background(46, 139, 87);
  drawSprites();
  foodObj.getFoodStock();
  foodObj.display();
  console.log(foodObj.foodStock);
}

//function to update food stock and last fed time
function feedDog() {
  dog.addImage(happyDog);
  foodObj.deductFood(foodStock - 1);
}
//function to add food in stock
function addFoods() {
  foodObj.updateFoodStock(foodStock + 1);
}
