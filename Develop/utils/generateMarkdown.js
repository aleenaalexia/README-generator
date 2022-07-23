// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = '';

  if (license == 'Apache') {
    licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]';
  }
  else if (license == 'Boost') {
    licenseBadge = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]';
  }
  else if (license == 'BSD') {
    licenseBadge = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]';
  }
  else if (license == 'Eclipse') {
    licenseBadge = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]';
  }
  else if (license == 'GNU') {
    licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]';
  }
  else if (license == 'IBM') {
    licenseBadge = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)]';
  }
  else if (license == 'ISC') {
    licenseBadge = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]';
  }
  else if (license == 'MIT') {
    licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
  }
  return licenseBadge;
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;
  
  switch(license) {
    case 'Apache':
      licenseLink = "(https://opensource.org/licenses/Apache-2.0)";
      break;
    case 'Boost':
      licenseLink = "(https://www.boost.org/LICENSE_1_0.txt)";
      break;
    case 'BSD':
        licenseLink = "(https://opensource.org/licenses/BSD-3-Clause)";
      break;
    case 'Eclipse':
          licenseLink = "(https://opensource.org/licenses/EPL-1.0)";
      break;
    case 'GNU':
            licenseLink = "(https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case 'IBM':
              licenseLink = "(https://opensource.org/licenses/IPL-1.0)";
      break;
    case 'ISC':
                licenseLink = "(https://opensource.org/licenses/ISC)";
      break;
    case 'MIT':
                  licenseLink = "(https://opensource.org/licenses/MIT)";
      break;
  }
  return licenseLink;
}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let renderLicense = '';

  if (license != null) {
    renderLicense += "## License"
    renderLicense += "Additional License Information: " + renderLicenseLink(license);
  }
  return renderLicense;
}

// function to generate markdown for README
function genMarkdown(data) {
  return `# ${data.title}
  
  ## Table of Contents
     1. [Description](#description)
     2. [Installation](#installation)
     3. [Usage](#usage)
     4. [License](#license)
     5. [Credits](#credits)
     6. [Tests](#tests)
     7. [Questions](#questions)
  
  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data)}
  ${renderLicenseBadge(data)}

  ## Credits
  ${data.credits}
  
  ## Tests
  ${data.tests}

  ## Questions
  ${data.questions}
  `;
}

module.exports = { genMarkdown };
