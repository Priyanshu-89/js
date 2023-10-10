//falsy values :- false, 0,-0, BigInt, 0n, "", null, undefined, NaN

//truthy values :- "0" ,'false' , "", [], {}, function(){}

const userEmailId =[]
if (userEmailId) {
    console.log("Got user Email");
}
else{
    console.log("Don't have user email");
}

//Ternairy operator

//condation ? true : false

const iceTeaPrice=100
iceTeaPrice<=80 ? console.log("less than 80"): console.log("More than 80");;