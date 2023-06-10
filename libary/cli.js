const inquirer = require('inquirer');
//import inquirer from 'inquirer';
const { writeFile } = require('fs/promises');
const SVG = require('./svg');
const { Circle, Triangle, Square } = require('./shapes');

const questions = [{
    type: 'input',
    message: "Write logo text (max 3 chars)",
    name: 'logoText',
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
        // return inquirer.prompt()
        // ask the user about shapeType, shapeColor, textColor and text
        inquirer
            .prompt(questions)
            .then((answer) => console.log(answer.logoText, answer.logoTextColor, answer.logoShape, answer.logoShapeColor)
            );

        // .then(answers)
        let shape;
        // if (answers.shapeType === 'circle') 
        // {shape = new Circle()
        //
        //  
        // }
        // call other shapes as well


        // assign color
        // shape.setColor(answers.shapeColor);

        // create SVG shape
        let svg = new SVG();

        // set text and shape
        // svg.setText(answers.text, answers.textColor)
        // svg.setShape(shape)

        // return writeFile('logo.svg', svg.render())

    }
}

module.exports = CLI;