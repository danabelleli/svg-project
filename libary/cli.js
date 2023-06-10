const inquirer = require('inquirer');
//import inquirer from 'inquirer';
const { writeFile } = require('fs/promises');
const SVG = require('./svg');
const { Circle, Triangle, Square } = require('./shapes');

const questions = [{
    type: 'input',
    message: "Write logo text (max 3 chars)",
    name: 'logoText',
    validate: function (input) {
        return (input.length > 3 ? false : true);
    }
},
{
    type: 'input',
    message: 'Type logoText color',
    name: 'logoTextColor',
},
{
    type: 'list',
    message: 'Select logo shape',
    name: 'logoShape',
    choices: [
        'Circle',
        'Triangle',
        'Square'
    ]
},
{
    type: 'input',
    message: 'Type logoShape color',
    name: 'logoShapeColor',
},
];

class CLI {
    run() {
        // ask the user about shapeType, shapeColor, textColor and text
        inquirer
            .prompt(questions)
            .then((answers) => {
                let shape;
                if (answers.logoShape === 'Circle') {
                    shape = new Circle();
                } else if (answers.logoShape === 'Triangle') {
                    shape = new Triangle();
                } else {
                    shape = new Square();
                }
                // set shape color
                shape.setColor(answers.logoShapeColor);
                // create svg object
                let svg = new SVG();
                // set text, text color and shape
                svg.setText(answers.logoText, answers.logoTextColor);
                svg.setShape(shape);
                // print to console
                console.log('Generated logo.svg');
                // generate the file
                return writeFile('logo.svg', svg.render());
            });
    }
}

module.exports = CLI;