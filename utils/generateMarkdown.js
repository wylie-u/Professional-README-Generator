// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// 

// var badges = ["MIT",  "APACHE 2.0", "GPL 3.0", "BSD 3", "None" ] 
// var emptyString = ""
// if badge === badge, return license
// else return ""
// function renderLicenseBadge(license) {
// // 
//   switch(license) {
//   case "MIT":
//     // return MIT badge 
//     break;
//   case "APACHE 2.0":
//     return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
//     break;
//   case "GPL 3.0":
//     // return badge
//     break;
//   case "BSD 3":
//     return 
//     break;
//   default:
//     // return ""
// }

// }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// ask if link is necessary after badge
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
