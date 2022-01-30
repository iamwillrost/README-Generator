// Function that returns a license badge based on which license is passed in

const renderLicenseBadge = license => {
  if (license === "none") {
    return "";
  } else {
    return `![License](https://img.shields.io/badge/License-${license}-<blue>)`;
  }
};

// Function that returns the license link

const renderLicenseLink = license => {
  if (license === "none") {
    return "";
  } else {
    return `\n* [License](#license)\n`;
  }
};

// Function that returns the license section of README

const renderLicenseSection = license => {
  if (license === "none") {
    return "";
  } else {
    return `## License
    
Licensed for use with the ${license} license.`;
  }
};

// Function to generate markdown for README
let generateMarkdown = data => {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install the program please run:

\`\`\`
${data.installation}
\`\`\`

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contribution}

## Tests

To test the program, please run:

\`\`\`
${data.test}
\`\`\`

## Questions

To view my other work, check out my GitHub!: 
[${data.github}](https://github.com/${data.github}/)

For questions and inquiries contact me at:
${data.email}

`;
}

module.exports = generateMarkdown;
