
class Square {
    constructor(length) {
      this.width = length;
      this.height = length;
    }
  
    static checkIsValidSquare(width, height) {
      return width === height;
    }
  
    static isAreaEqual(squareA, squareB) {
      const areaA = squareA.width * squareA.height;
      const areaB = squareB.width * squareB.height;
  
      return areaA === areaB;
    }
  
  }

  let s1 = new Square(4)
  let s2 = new Square(4)

  console.log(s1)
  console.log(s2)
  console.log(Square.isAreaEqual(1, 1))
  console.log(Square.isAreaEqual(10, 10))
  console.log(Square.isAreaEqual(s1, s2))
