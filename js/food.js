class Food {
  constructor() {
    this.image = loadImage("Images/milk.png");
    this.foodstock;
  }
  getFoodStock() {
    var get = database.ref("foodStock");
    get.on("value", (data) => {
      foodStock = data.val();
      this.foodStock = data.val();
    });
  }
  updateFoodStock(val) {
    database.ref("/").update({
      foodStock: val,
    });
    // database.ref("foodStock").on("value", (data) => {
    //   console.log(data.val());
    // });
  }
  deductFood(food) {
    database.ref("/").update({
      foodStock: food,
    });
  }
  display() {
    var x = 80,
      y = 100;
    imageMode(CENTER);
    image(this.image, 720, 220, 70, 70);
    if (this.foodStock != 0) {
      for (var i = 0; i < this.foodStock; i++) {
        if (i % 10 == 0) {
          x = 80;
          y = y + 50;
        }
        image(this.image, x, y, 50, 50);
        x = x + 30;
      }
    }
    // var x = 80,
    //   y = 100;
    // console.log("huhu");
    // for (var food in foodObj) {
    //   console.log("huhu");
    //   image(this.image, x, y, 50, 50);
    //   x = 80;
    //   y = y + 50;
    // }
  }
}
