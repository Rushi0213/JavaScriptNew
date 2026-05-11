
//object initilize
const jsuser={
    name:"rushi",
    age:23,
    location:"yeola",
    email:"rushi@gmail.com",
    isLoggedIn:false
}

// object call
console.log(jsuser.email);
console.log(jsuser["email"]);
console.log(jsuser["age"]);
console.log(jsuser["name"]);

//change object values

jsuser.email="rushi123@gmail.com"
console.log(jsuser.email);

// this is use beacuse we can't change value now
//Object.freeze(jsuser);

jsuser.email="rushideshmukh123@gmail.com"

console.log(jsuser);


const myfun= function()
{
    console.log("hello user");
    
}

const myfuntwo= function()
{
    console.log(`hello user ${jsuser.name}`);
    
}

myfun();
myfuntwo();





