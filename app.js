const inquirer = require('inquirer');

const promptUser =()=>{

return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            validate: nameInput =>{
                if(nameInput){
                    return true;
                }else{
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your Github Username',
            validate: githubInput =>{
                if(githubInput){
                    return true;
                }else{
                    console.log('Please enter your Github username!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAbout',
            message: 'Would you like to enter some information about yourself for an "About" section?',
            default: true
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself:',
            when: ({confirmAbout}) =>{
                if(confirmAbout){
                    return true;
                }else{
                    return false;
                }
            }
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
            message: 'What is the name of your project?(Required)',
            validate: projectNameInput =>{
                if(projectNameInput){
                    return true;
                }else{
                    console.log('Please enter a name for this project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project(Required)',
            validate: descriptionInput =>{
                if(descriptionInput){
                    return true;
                }else{
                    console.log('Please enter a description for this project!');
                    return false;
                }
            }
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
            message: 'Enter your Github link to your project.(Required)',
            validate: projectLinkInput =>{
                if(projectLinkInput){
                    return true;
                }else{
                    console.log('Please enter the Github repository link for this project!');
                    return false;
                }
            }
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