//- primitive datatype

// number,string,boolean,float,bigint,undefined,null,symbol

const n=10
const a="rushi"
const v=100.19
const b=1234556756566656565n
let c;
const d=null;
const id= Symbol("123");
console.table([typeof(n), typeof(a), typeof(v), typeof(b), typeof(c), typeof(d),typeof(id)]);


//- non-primitive
// array,object,functions

//array
const arr=["rushi","rahul","ram","sham"];

console.log(typeof(arr));


//object
let myobj={
    name:"rushi",
    age: 18
}

console.log(typeof(myobj));

//function
const myfunction= function()
{
    console.log("hello duniya")
}

console.log(typeof myfunction);

