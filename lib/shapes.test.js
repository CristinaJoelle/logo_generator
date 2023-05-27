const { Circle, Triangle, Square } = require("./shapes");

//tests the circle class
describe("Circle", () => {
  it("Testing for the render message to work for the circle class.", () => {
    let example = new Circle("CJM", "blue", "green");
    expect(example.render())
      .toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <circle cx="150" cy="100" r="80" fill="green" />
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">CJM</text>
  
  </svg>`);
  });
});

//tests the square class
describe("Square", () => {
  it("Testing for the render message to work for the square class.", () => {
    let example = new Square("CJM", "blue", "green");
    expect(example.render())
      .toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <rect x="90" y="40" width="120" height="120" fill="green" />
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">CJM</text>
  
  </svg>`);
  });
});

//tests the triangle class
describe("Triangle", () => {
  it("Testing for the render message to work for the triangle class.", () => {
    let example = new Triangle("CJM", "blue", "green");
    expect(example.render())
      .toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <polygon points="150, 18 244, 182 56, 182" fill="green" />
  
    <text x="150" y="150" font-size="60" text-anchor="middle" fill="blue">CJM</text>
  
  </svg>`);
  });
});
