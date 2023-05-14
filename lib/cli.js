const inquirer = require("inquirer");
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");
const { writeFile } = require("fs/promises");
const { text } = require("stream/consumers");
const { shareReplay } = require("rxjs");

class CLI {
  run() {
    return inquirer;
    .prompt([
        {
        name: 'text',
        type: 'input',
        message: "Please enter the text for your logo.(Must be no more than 3 characters)"
    },
    {
        name: 'textColor',
        type: 'input',
        message: "What color would you like your text?"
    },
    {
        name: 'shapeChoice',
        type: 'list',
        message: "Please select which shape you'd like.",
        choices: [circle, triangle, square]
    },
    {
        name: 'shapeColor',
        type: 'input',
        message: "What color would you like your shape?"
    },
]);
  }
}
