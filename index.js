// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
// const questions = [];

function renderLicenseBadge(license) {
    // 
      switch(license) {
      case "MIT":
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
        break;
      case "APACHE 2.0":
        return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
        break;
      case "Boost":
        return `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
        break;
      case "BSD 3":
        return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
        break;
      default:
        return "";
    }
    
    }
const questions = () =>
inquirer
  .prompt([
      // title of my project 
    
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'projectTitle',
    },
    {
        //Description
        type: 'input',
        message: 'What is your project about?',
        name: 'description',
    },
    {
         //license 

        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: [
        "MIT", new inquirer.Separator(), 
        "APACHE 2.0", new inquirer.Separator(), 
        "Boost", new inquirer.Separator(), 
        "BSD 3", new inquirer.Separator(), 
        "None" 
        ]


    },
    {
    // Installation
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'installation',

    },
    {
       // Tests
        type: 'input',
        message: 'What command should be run to run tests?',
        name: 'tests',

    },
    {
        //Contributing
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?',

    },
    {
        //usage
        type: 'input',
        message: 'What does the user need to know about the repo?',
        name: 'usage',


    },
    {     // git hub
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
        
    },
    {
        // email
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
        
    }
  ]);
  
// dont indent readme file

const generateReadme = (answers) => {

//const badge = renderLicenseBadge(answers.license)

return `# ${answers.projectTitle} 

## Description 
${answers.description}

## Table of Contents
[Installation](#Installation)
[Usage](#Usage)
[License](#License)
[Contributing](#Contributing)
[Tests](#Tests)
[Questions](#Questions)

## Installation 
to install necessary dependencies, run the following command:
${answers.installation}

## Usage 
${answers.usage}

## License 
${renderLicenseBadge(answers.license)}

## Contributing 
${answers.contributing}

## Tests 
${answers.tests}

## Questions
If you have any questions, please contact me directly at ${answers.email} 
Visit my Github [here](https://github.com/${answers.username})`;
}

const init = () => {
    questions().then((answers) => {
        //Block of code to try
        try {
            const readMe = generateReadme(answers);
            fs.writeFileSync('README.md', readMe);
            console.log('Successfully wrote to README.md');
        }
        //Block of code to handle errors
        catch (error) {
            console.log(error);
        }
    });
    // TODO: Create a function to initialize app
    // function init() {}
 
    // Function call to initialize app
}
init();






// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// write prompts that gives answers to the following questions
// THEN a high-quality, professional README.md is generated 

// make readme document

// with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions


// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options

// provide options for licenses
// need to have option categories so that user can mark one 


// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

// WHEN I enter my GitHub username
// section for github username 

// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// section to enter email address

// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

// WHEN I click on the links in the Table of Contents
// table of contents section: 
// ## Table of Contents
//  * [Installation](#Installation) 
//  * [Usage](#Usage)
//  * [Credits](#Credits)
//  * [License](#License)
// each selection when clicked needs to direct the user to that specific section

// THEN I am taken to the corresponding section of the README
