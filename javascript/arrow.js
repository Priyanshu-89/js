const user={
    userName:"priyanshu",
    prices:988,
    welcomeMessage: function(){
        console.log(`${this.userName}, Welcome to website`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.userName="Sammy"
// user.welcomeMessage()

//console.log(this)

//regular function

// function demo(){
//     let userName="priyanshu"
//     console.log(this.userName) //we can't use "this" in function
// }

// demo()


// const demo=function(){
//     let userName="priyanshu"
//     console.log(this.userName) 
// }
// demo()

// const demo =()=>{
//     let userName="priyanshu"
//         console.log(this.userName) 
// }

// demo()

//*********************** pure arrow function **************************/


// const addNumber=(num1,num2)=>{
//     return num1+num2 //explict return
// }

// console.log(addNumber(6,9));

const addNumber=(num1,num2)=>(num1+num2) //implict return
console.log(addNumber(8,9))

const name=()=>({username:"priyanshu"})
console.log(name())