// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![](https://img.shields.io/badge/license-${license.replace(/ /g, '%20')}-blue.svg)`;
  } else {
    return ``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.description}

  ## Table OF CONTENTS
    
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Tests](#tests)
  - [Question](#question)
  
  ## INSTALLATION

  ${data.installation}

  ## USAGE
    
  ${data.usage}

  ## CREDITS

  ${data.credits}

  ${renderLicenseBadge(data.license)}

  ## TESTS
    
  ${data.tests}
  
  ## QUESTIONS
  
  ${data.question}
`;
}

module.exports = generateMarkdown;
