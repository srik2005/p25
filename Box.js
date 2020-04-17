class Box extends BaseClass {
  constructor(x, y, width, height) {
    
   super(x, y, width, height);
    this.width = width;
    this.height = height;
    this.image = loadImage("sprites/wood1.png");
   
  }
  display(){
   super.display();
  }
};
