
// Function to initialize app
function init() {

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown');
const path = require('path');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Project title:',
    },  {
        type: 'input',
        name: 'description',
        message: 'Description:',
    },  {
        type: 'input',
        name: 'installation',
        message: 'Installation instructions:',
    },  {
        type: 'input',
        name: 'usage',
        message: 'Project usage:',
    }, {
        type: 'input',
        name: 'license',
        message: 'License:',
    }, {
        type: 'input',
        name: 'credits',
        message: 'Credits:',
    }, {
        type: 'input',
        name: 'tests',
        message: 'Tests:',
    }, {
        type: 'input',
        name: 'questions',
        message: 'questions?:',
    }
];

writeToFile();
// TODO: Create a function to write README file
function writeToFile() {
    return inquirer.prompt(questions)
       .then((data => {
           const genMarkdown = markdown.genMarkdown(data);
           console.log(genMarkdown);
           return data; 
       }));

}
}

// Function call to initialize app
init();
