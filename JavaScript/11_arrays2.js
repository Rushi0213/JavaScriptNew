const marvel_heros=["rahul","ramesh","raghav","rajpal"];

const dc_heroes=["shubham","tejas","rushi","dipak"];

//push

//  marvel_heros.push(dc_heroes);

//  console.log(marvel_heros);


 //concate

 const newa= marvel_heros.concat(dc_heroes);
 console.log("A",newa);
 
//spread 

const newarr1=[...marvel_heros,...dc_heroes];
console.log("B",newarr1);


// flat

const  newarr2=[1,2,3,[4,5],6,[7,8,[9,8,9,0]]]

console.log(newarr2.flat(Infinity));


//array
console.log(Array.isArray("rushikesh"));


console.log(Array.from("rushikesh"));

 
// of

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));
