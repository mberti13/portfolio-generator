const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        }
    ])
    .then(answers => console.log(answers));
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