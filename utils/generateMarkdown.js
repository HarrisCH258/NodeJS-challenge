// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'MIT'){
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
  } else if (license === 'GNU'){
    return '![License: GNU](https://img.shields.io/badge/License-GNU-blue.svg)'
  } else if (license === 'Apache'){
    return '![License: Apache](https://img.shields.io/badge/License-Apache-red.svg)'
  } else if (license === 'ISC'){
    return '![License: ISC](https://img.shields.io/badge/License-ISC-green.svg)'
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'MIT') {
    return '![License: MIT](https://opensource.org/licenses/MIT)'
  } else if (license === 'GNU'){
    return '![License: GNU](https://opensource.org/licenses/GPL-3.0)'
  } else if (license === 'Apache'){
    return '![License: Apache](https://opensource.org/licenses/Apache-2.0)'
  } else if (license === 'ISC'){
    return '![License: ISC](https://opensource.org/licenses/ISC)'
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'None') {
    return '';
  } else {
    return `##license 
    I wrote this project under the ${license} license.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}
## Table of Contents
[installation](#installation)<br>
[usage](#usage)<br>
[contribution](#contribution)<br>
[test](#test)<br>
[questions](#questions)<br>
[license](#license)<br>
## Installation
${data.instilation}
## Usage
${data.usage}
## Contribution
${data.contribution}
## Test
${data.test}
## Questions
If you have any questions, please reach out to me at ${data.email} or visit my GitHub profile ${data.github}.
${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}
`;
}

export default generateMarkdown;
