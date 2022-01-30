// Required packages 
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Questions array
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Provide contribution guidelines'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Provide test instructions'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a use license',
        choices: ['MIT', 'Apache 2.0', 'GPLv3', 'BSD-3', 'none']
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address'
    }
];

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    return fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
const init = () => {
    inquirer.prompt(questions)
    .then((data) => {
        console.log("Creating README...");
        return writeToFile('./dist/README.md', generateMarkdown(data));
    })
    .catch (err => console.log(err));
};

// Function call to initialize app
init();
