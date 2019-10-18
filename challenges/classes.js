// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker {
   constructor(attrs) {
      this.length = attrs.length,
         this.width = attrs.width,
         this.height = attrs.height
   }
   volume = function () {
      return this.length * this.width * this.height;
   };
   surfaceArea = function () {
      return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
   };
};

const cuboid = new CuboidMaker({
   length: 4,
   width: 5,
   height: 5
})

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
   constructor(attrs) {
      super(attrs)
      this.cubeList = attrs.cubeList
   }
   volume = function (side) {      
      return Math.pow(this.length, 3);
   };
   surfaceArea = function (side) {
      return 6 * Math.pow(this.width, 2);
   };
   volumeChange = function (side) {
      console.log(`We are going to use ${side} for calculating Volume this time.`);
      return Math.pow(side, 3);
   };
   surfaceAreaChange = function (side) {
      console.log(`We are going to use ${side} for calculating Surface Area this time.`);
      return 6 * Math.pow(side, 2);
   };
}

const cube = new CubeMaker({
   length: 5,
   width: 5,
   height: 5,
   cubeList: [5,8,1,4,99,34,27]
})

sideSelector = (cubeThing) => cubeThing.cubeList[Math.floor(Math.random() * cubeThing.cubeList.length)]

console.log(cube.volume()); 
console.log(cube.surfaceArea());
console.log(cube.volumeChange(sideSelector(cube)));
console.log(cube.surfaceAreaChange(sideSelector(cube)));
