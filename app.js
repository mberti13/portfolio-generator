const inquirer = require('inquirer');
//Needed to create files in Node.js
const fs = require('fs');
//Imports page-template.js into app.js(generatePage function)
const generatePage = require("./src/page-template");

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
const mockData = {
    name: 'Lernantino',
    github: 'lernantino',
    confirmAbout: true,
    about: 'Duis consectetur nunc nunc. Morbi finibus non sapien nec pharetra. Fusce nec dignissim orci, ac interdum ipsum. Morbi mattis justo sed commodo pellentesque. Nulla eget fringilla nulla. Integer gravida magna mi, id efficitur metus tempus et.',
    projects: [
        {
            name: 'Run Buddy',
            description:
              'Duis consectetur nunc nunc. Morbi finibus non sapien nec pharetra. Fusce nec dignissim orci, ac interdum ipsum. Morbi mattis justo sed commodo pellentesque. Nulla eget fringilla nulla. Integer gravida magna mi, id efficitur metus tempus et. Nam fringilla elit dapibus pellentesque cursus.',
            languages: ['HTML', 'CSS'],
            link: 'https://github.com/lernantino/run-buddy',
            feature: true,
            confirmAddProject: true
          },
          {
            name: 'Taskinator',
            description:
              'Duis consectetur nunc nunc. Morbi finibus non sapien nec pharetra. Fusce nec dignissim orci, ac interdum ipsum. Morbi mattis justo sed commodo pellentesque. Nulla eget fringilla nulla. Integer gravida magna mi, id efficitur metus tempus et. Nam fringilla elit dapibus pellentesque cursus.',
            languages: ['JavaScript', 'HTML', 'CSS'],
            link: 'https://github.com/lernantino/taskinator',
            feature: true,
            confirmAddProject: true
          },
          {
            name: 'Taskmaster Pro',
            description:
              'Duis consectetur nunc nunc. Morbi finibus non sapien nec pharetra. Fusce nec dignissim orci, ac interdum ipsum. Morbi mattis justo sed commodo pellentesque. Nulla eget fringilla nulla. Integer gravida magna mi, id efficitur metus tempus et. Nam fringilla elit dapibus pellentesque cursus.',
            languages: ['JavaScript', 'jQuery', 'CSS', 'HTML', 'Bootstrap'],
            link: 'https://github.com/lernantino/taskmaster-pro',
            feature: false,
            confirmAddProject: true
          },
          {
            name: 'Robot Gladiators',
            description:
              'Duis consectetur nunc nunc. Morbi finibus non sapien nec pharetra. Fusce nec dignissim orci, ac interdum ipsum. Morbi mattis justo sed commodo pellentesque.',
            languages: ['JavaScript'],
            link: 'https://github.com/lernantino/robot-gladiators',
            feature: false,
            confirmAddProject: false
          }
    ]
  }

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
const pageHTML = generatePage(mockData);
//Runs command to give user prompts in app
// promptUser()
//     .then(promptProject)
//     .then(portfolioData => {
//     //Create and Slice Array for basic user information
//     const pageHTML = generatePage(portfolioData);

//     //function to generate HTML page
//     // fs.writeFile('./index.html', pageHTML, err =>{
//     //   if(err) throw err;
    
//     //   console.log("Portfolio complete! Check out index.html to see the output!");
//     // })
//     })

// 

// // const name = profileDataArgs[0];
// // const github = profileDataArgs[1];
// //THIS DOES SAME THING

// 



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