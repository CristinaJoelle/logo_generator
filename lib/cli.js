//Packages needed
const inquirer = require("inquirer");
const { Circle, Triangle, Square } = require("./shapes");
const fs = require("fs");

//Prompts that will generate in the command line
class CLI {
  run() {
    inquirer
      .prompt([
        {
          name: "text",
          type: "input",
          message:
            "Please enter the text for your logo.(Must be no more than 3 characters)",
          maxLength: 3,
        },
        {
          name: "textColor",
          type: "input",
          message: "What color would you like your text?",
        },
        {
          name: "shapeChoice",
          type: "list",
          message: "Please select which shape you'd like.",
          choices: [Circle, Triangle, Square],
        },
        {
          name: "shapeColor",
          type: "input",
          message: "What color would you like your shape?",
        },
      ])
      .then((answer) => {
        let tri;
        if (answer.shapeChoice === "Circle") {
          tri = new Circle(answer.text, answer.textColor, answer.shapeColor);
        }
        if (answer.shapeChoice === "Triangle") {
          tri = new Triangle(answer.text, answer.textColor, answer.shapeColor);
        }

        if (answer.shapeChoice === "Square") {
          tri = new Square(answer.text, answer.textColor, answer.shapeColor);
        }
        console.log(answer);
        fs.writeFileSync("logo.svg", tri.render());
        console.log("Created your SVG!");
      });
  }
}
module.exports = CLI;
