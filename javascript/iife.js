//iife stand for: Immediately Invoked Function Expressions

(function chai(){
    console.log(`Named iife`);
})();

((name)=>{
    console.log(`without named iife ${name}`);
})('priyanshu');

(()=>{
    console.log("BCA")
})();