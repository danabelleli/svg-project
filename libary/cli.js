const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const SVG = require('./svg');
const { Circle, Triangle, Square } = require('./shapes');

class CLI {
    run() {
        // return inquirer.prompt()
        // ask the user about shapeType, shapeColor, textColor and text


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