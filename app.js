const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
//const generateSite = require('./src/generate-site.js');
const fs = require('fs');
const path = require('path');
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
const teamMembers = [];

const promptManager = () => {
    return inquirer.prompt([
        {
            type:'input',
            name:'name',
            message: '(Manager) What is your name? **Required**',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type:'input',
            name:'employeeId',
            message: 'Enter your employee ID **required** {{Note: This does not validate real or fake Ids}}',
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log('Please enter an Id!');
                    return false;
                }
            }
        },
        {
            type:'input',
            name:'email',
            message:'Enter your email address **Required**',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter an email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'branchName',
            message: 'Please enter the name of your office branch **Required**',
            validate: branchName => {
                if (branchName) {
                    return true;
                } else {
                    console.log('Please do not leave this field empty!');
                    return false;
                }
            }
        },
    ]).then(answers => {
        console.log(answers);
        const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.branchName);
        teamMembers.push(manager);
        promptMenu();
    })
};

const promptMenu = () => {
    return inquirer.prompt([
        {
            type:'list',
            name:'menu',
            message:'Please select an option to continue:',
            choices: ['Add an Engineer', 'Add an Intern', 'Finish building my team']
        }])
        .then(userChoice => {
            switch (userChoice.menu) {
                case 'Add an Engineer':
                promptEngineer();
                break;
                case 'Add an Intern':
                promptIntern();
                break;
                default:
                    buildTeam();
            }
        });
};

const promptEngineer = () => {
    console.log(`
    ~~~~~~~~~~~~~~~~~
    Add a new Engineer
    ~~~~~~~~~~~~~~~~~
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of this Engineer? **Required**',
            validate: engineerName => {
                if (engineerName) {
                    return true;
                } else {
                    console.log('Please enter the name of this engineer!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'What is the employee ID of this Engineer? **Required**',
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log('Please enter the employee Id of this engineer!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email address of this Engineer? **Required**',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter the email address of this engineer!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'gitHubUser',
            message: 'What is the GitHub username of this Engineer? **Required**',
            validate: gitHubUser => {
                if (gitHubUser) {
                    return true;
                } else {
                    console.log('Please enter the GitHub username of this engineer!');
                    return false;
                }
            }
        }        
    ]).then(answers => {
        console.log(answers);
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.gitHubUser);
        teamMembers.push(engineer);
        promptMenu();
    })
};

const promptIntern = () => {
    console.log(`
    ~~~~~~~~~~~~~~~~
    Add a New Intern
    ~~~~~~~~~~~~~~~~
    `);

    return inquirer.prompt
}