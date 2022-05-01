const fs = require('fs');
const data = require('../index');

// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `
    # ${data.title}

    ![license](https://img.shields.io/badge/license-${data.license}-success.svg)
    
    ## Description
    ${data.description}

    ## Table of Contents
   *[Installation](#installation)
    * [Usage](#usage)
    * [Credits](#credits)
    * [License](#license)
    * [Contribution](#contribution)
    * [Test](#test)
    * [Questions](#questions)

    ### Installation:
    ${data.installation}

    ### Usage:
    ${data.usage}

    ### Credits:
    ${data.credits}

    ### License:
    For more information go to: 
    [License Link](https://opensource.org/licenses/${data.license})

    ### Contribution:
    ${data.contribution}

    ### Test:
    ${data.test}

    ### Questions:
    If you have questions regarding the project, contact me through:
    - Github:[${data.userName}](https://github/com/${data.userName})
    - Email: ${data.email}
`;
}

module.exports = generateMarkdown;
