const inquirer = require("inquirer");
const { Circle, Triangle, Square } = require("./shapes");

inquirer.prompt([
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
]);
