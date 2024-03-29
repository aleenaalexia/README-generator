function markdown(data) {
  return `# ${data.title}
  
  ## Description 
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Credits](#credits)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation 
  ${data.installation
  }
  ## Usage 
  ${data.usage}

  ## License 
  This project is licensed under: ${data.license}

  ## Credits 
  ${data.credits}

  ## Tests
  ${data.tests}

  ## Questions
  ${data.questions}
  `;
}

module.exports = markdown; 