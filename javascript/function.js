function addTwoNumbers(num1, num2){
    return num1 + num2
}

console.log(addTwoNumbers(4,6))


const result =addTwoNumbers(4,8)
console.log("Result", result)

function loginUser(username){
    if(!username){
        console.log("Please enter your username")
        return
    }
    return `${username} just logged in with us`
}

//console.log(loginUser(""))

console.log(loginUser("Priyanshu"))

function calculatePrice(...num1){
return num1
}
//console.log(calculatePrice(300,299,500,199,800))
console.log(calculatePrice(300+299+500+199+800))

const user={
    username:"Priyanshu",
    prices:344
}

// function handleobject(anyObject){
//     console.log(`Username is ${anyObject.username} and price is ${anyObject.prices}`)
// }
// handleobject()