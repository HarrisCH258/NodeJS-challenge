// TODO: Include packages needed for this application
import generateMarkdown from './utils/generateMarkdown.js';
import inquirer from 'inquirer';
import fs from 'fs';
import { type } from 'os';
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project.'
    },
    {
        type: 'input',
        name: 'instilation',
        message: 'Please provide instilation instructions.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information.'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide contribution guidelines.'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide test instructions'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license.',
        choices: ['MIT', 'GNU', 'Apache', 'ISC', 'None']
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please provide your GitHub username.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address.'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
        err ? console.log(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() { 
    inquirer.prompt(questions)
    .then((data) => {
        writeToFile('README.md', data);
    });
}

// Function call to initialize app
init();
