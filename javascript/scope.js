//we doesn't use "var" bcoz it's golbal object it's add with the window object

// let a=3
if(true) {
    let a=10
    const b=30
    var c=90
}
// console.log(a) //when we comment above a=3 then it's give error
// console.log(b)//it's not run bcoz it's constant 
console.log(c) //but when we run c it's work bcoz of golbal variable

//function scope

function first(){
    const userName="priyanshu"

    function second(){
        const website ="youtube.com"
        console.log(userName)
        console.log(website)
    }
    
    second()
}
first()

if(true){
    const userName="priyanshu"
    if(userName==="priyanshu"){
        const website="youtube"
        console.log(userName + " "+ website)
         console.log(website)

    }
    console.log(userName);
}

console.log(addOne(4));

function addOne(num){
    return num+1
}


console.log(addTwo(8));

function addTwo(num){
    return num+7
}
