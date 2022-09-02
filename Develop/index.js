// packages needed for this application
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown');
const fs = require('fs');


// array of questions for user input
const questions = () => {
    return inquirer.prompt([
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
]);
};


// writeToFile();
// function to write README file
function writeToFile(data) {
    fs.writeFile('README.md', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('README generated!')
        }
    })
};

questions()

.then(answers => {
    return markdown(answers);
})
.then(data => {
    return writeToFile(data);
})
.catch(err => {
    console.log(err)
});