import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

inquirer
  .prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a short description of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Who are the contributors?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license will you use?',
        choices: ['MIT', 'Apache2.0', 'GPL3.0', 'None'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'How can I be contacted?',
    },
  ])
  .then((answers) => {
    const readmeContent = generateMarkdown(answers);


    fs.writeFile('New_README.md', readmeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README!')
    );
  });
