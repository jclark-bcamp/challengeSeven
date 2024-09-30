// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
    switch(license) {
        case 'MIT':
            return {
                badge: '![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)',
                link: '(https://opensource.org/licenses/MIT)'
            };
        case 'Apache 2.0':
            return {
                badge: '![Apache 2.0 License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)',
                link: '(https://opensource.org/licenses/Apache-2.0)'
            };
        case 'GPL 3.0':
            return {
                badge: '![GPL 3.0 License](https://img.shields.io/badge/License-GPL%20v3-blue.svg)',
                link: '(https://www.gnu.org/licenses/gpl-3.0)'
            };
        default:
            return {
                badge: '',
                link: ''
            };
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license);



// TODO: Create a function that returns the license section of README

function renderLicenseSection(license) {
    if (license !== 'None') {
        return `This project is licensed under the ${license} license.`;
    } else {
        return `This project is not licensed.`;
    }   
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    const { badge, link } = renderLicenseBadge(data.license);
    return `
# ${data.title} [${badge}]${link}

## Description
    ${data.description}

## Installation
    ${data.installation}

## Table of Contents
[Installation](#installation)  
[Usage](#usage)  
[Contributors](#contributors)  
[Tests](#tests)  
[License](#license)  
[GitHub](#github)  
[Questions](#question)  

## Usage
    ${data.usage}

## Contrubutors
    ${data.contributing}

## Tests
    ${data.tests}

## License
    ${renderLicenseSection(data.license)}

## GitHub
    ${data.github}

## Questions
    ${data.email}
`;
}

export default generateMarkdown;
