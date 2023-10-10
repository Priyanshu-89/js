// const isUserLogin=true;
// const password=9876

// if(password===98765){
//     console.log("passowrd correct");
// } else{
//     console.log("Your passowrd is not correct");
// }

// const score=500
// if (score >800) {
//     let power="dance"
//     console.log(`User Power : ${power}`);
// }
// console.log('user not scored');


//multiple conditions

// const balance =200

// if (balance < 500) {
//     console.log("Less than 500");
// } else if (balance < 750) {
//     console.log("Less than 750");
// }

// else if (balance < 900){
//     console.log("Less than 900");
// }

// else{
//     console.log("No any condation matched");
// }

//rational operators

const isUserLogIn =true
const debitCard =true
const loggedFormGoogle=false
const loggedFromEmail=true

//when use && operator both of the condition should be true then work otherwise not
if (isUserLogIn && debitCard && 2==2) {
    console.log("Allow to buy the course");
}

// when we use || (or) operator then only one condation should be true then work

if (loggedFormGoogle || loggedFromEmail) {
    console.log("User logged in");
}