//Create and Slice Array for basic user information
const profileDataArgs = process.argv.slice(2, process.argv.length);



//Display input data
const printProfileData = (profileDataArr) =>{
    for(let i=0; i < profileDataArr.length; i++){
        console.log(profileDataArr[i]);
    }
    //console divider for teaching purposes
    console.log("================");


    //is the same as this...
    profileDataArr.forEach(profileItem =>console.log(profileItem));

}
printProfileData(profileDataArgs);