const inquirer = require('inquirer');

const promptUser =()=>{

return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your Github Username'
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself'
        }
    ]);
};

const promptProject = portfolioData =>{
    //if there's no 'projects' array property, create one
    if(!portfolioData.projects){
        portfolioData.projects = [];
    }
    console.log(`
    =================
    Add a New Project
    =================
    `)
    //prompt for project information
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project(Required)'
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['JavaScript','HTML','CSS','ES6','JQuery','Bootstrap','Node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter your Github link to your project.(Required)'
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false
        }
        //.then() allows for user to add a new and/or multiple projects
    ]).then(projectData =>{
        portfolioData.projects.push(projectData);
        if(projectData.confirmAddProject){
            return promptProject(portfolioData);
        }else{
            return portfolioData;
        }
    })
};
//Runs command to give user prompts in app
promptUser()
    .then(promptProject)
    .then(portfolioData => {
        console.log(portfolioData);
    })
// //Needed to create files in Node.js
// const fs = require('fs');
// //Imports page-template.js into app.js(generatePage function)
// const generatePage = require("./src/page-template.js");
// //Create and Slice Array for basic user information
// const pageHTML = generatePage(name,github);

// // const name = profileDataArgs[0];
// // const github = profileDataArgs[1];
// //THIS DOES SAME THING

// //function to generate HTML page
// fs.writeFile('./index.html', pageHTML, err =>{
//     if(err) throw err;
    
//     console.log("Portfolio complete! Check out index.html to see the output!");
// })



// CONSOLE LOGS INPUTS AFTER RUNNING IN NODE
// //Display input data
// const printProfileData = (profileDataArr) =>{
//     for(let i=0; i < profileDataArr.length; i++){
//         console.log(profileDataArr[i]);
//     }
//     //console divider for teaching purposes
//     console.log("================");


//     //is the same as this...
//     profileDataArr.forEach(profileItem =>console.log(profileItem));

// }
// printProfileData(profileDataArgs);