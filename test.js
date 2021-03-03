// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = () =>
    inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: 'What is your Github username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
        {
            type: 'input',
            name: 'projectName',
            message: 'What is your projects name?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please write a short desctiption of your project',
        },
        {
            type: 'list',
            name: 'license',
            message: 'What kind of license should your project have?',
            choices: ["MIT", new inquirer.Separator(), "Apache 2.0", new inquirer.Separator(), "GPL 3.0", new inquirer.Separator(), "BSD 3", new inquirer.Separator(), "None"]
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What command should be run to install dependencies?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What command should be run to run tests?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What does the user need to know about using the repo?',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'What does the user need to know about contributing to the repo?',
        },
    ]);
const generateReadme = (answers) =>
    `# ${answers.projectName} 
    
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
    ${answers.license}
    
    ## Contributing 
    ${answers.contributing}
    
    ## Tests 
    ${answers.tests}
    
    ## Questions
    If you have any questions, please contact me directly at ${answers.email} 
    Visit my Github [here](https://github.com/${answers.username})`;
// TODO: Create a function to write README file
const init = () => {
    questions().then((answers) => {
        try {
            const readMe = generateReadme(answers);
            fs.writeFileSync('README.md', readMe);
            console.log('Successfully wrote to README.md');
        }
        catch (error) {
            console.log(error);
        }
    });
    // TODO: Create a function to initialize app
    // function init() {}
 
    // Function call to initialize app
}
init();