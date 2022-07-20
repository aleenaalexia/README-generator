// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = '';

  if (license == 'Apache') {
    licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]';
  }
  else if (license == 'Boost') {
    licenseBadge = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]';
  }
}

// TODO: Create a function that returns the license link
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

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
