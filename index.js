const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateReadme = require('./src/markdown');

// This app will generate a README file for our user

// Prompts user for information using inquirer

inquirer
    .prompt([
        {
            type: "input",
            message: "What is the title of your project?",
            name: "name",
        },
        {
            type: "input",
            message: "Write a short description about your project",
            name: "desc",
        },
        {
            type: "input",
            message: "What are the instructions to install this application?",
            name: "install",
        },
        {
            type: "input",
            message: "Provide examples and intructions to use your application",
            name: "usage",
        },
        {
            type: "list",
            message: "What is your license?",
            name: "license",
            choices: ["MIT","Apache-2.0", "GPL-3.0","BSD-2-Clause", "BSD-3-Clause", "BSD-4-Clause"],
        },
        {
            type: "input",
            message: "Provide your GitHub username",
            name: "credit",
        },
        {
            type: "input",
            message: "Provide the link to your GitHub repository",
            name: "repo",
        },
        {
            type: "input",
            message: "Provide your Email address",
            name: "email",
        },

    ])
    .then((response) => {
        console.log(response);


        // Generate a README file based on the user answers

        const outputPath = path.join(__dirname, 'output', 'README.md');

        const markdown = generateReadme(response);

        console.log(markdown);

        fs.writeFileSync(outputPath, markdown, 'utf-8');


    });

