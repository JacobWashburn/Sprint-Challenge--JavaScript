// 1. Copy and paste your prototype in here and refactor into class syntax.
let count = 0;
let runTime1 = 10;
let runTime2 = 20
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
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
   constructor(attrs) {
      super(attrs)
   }
   volume = function () {
      return Math.pow(this.length, 3);
   };
   surfaceArea = function () {
      return 6 * Math.pow(this.width, 2);
   };
   volumeChange = function (side) {
      if (count > runTime1) {
         return "That's as many as I want to run right now.\n";
      } else {
         count += 1
         console.log(`We are going to use Sides= ${side} for calculating Volume of a Cube this time.`);
         console.log(Math.pow(side, 3))
         return this.volumeChange(sideSelector())
      };
   };
   surfaceAreaChange = function (side) {
      if (count > runTime1 && count <= runTime2) {
         count += 1
         console.log(`We are going to use Sides= ${side} for calculating Surface Area of a Cube this time.`);
         console.log(6 * Math.pow(side, 2))
         return this.surfaceAreaChange(sideSelector())
      } else if (count <= runTime1) {
         count += 1
         return this.surfaceAreaChange(sideSelector())
      } else {
         return "That's as many as I want to run right now.\n";
      }
   };
}

const cube = new CubeMaker({
   length: 5,
   width: 5,
   height: 5,
})

sideSelector = () => Math.floor(Math.random() * 50)

// console.log(cube.volume()); 
// console.log(cube.surfaceArea());
console.log(cube.volumeChange(sideSelector(cube)));
console.log(cube.surfaceAreaChange(sideSelector(cube)));