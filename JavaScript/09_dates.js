//dates

let mydate=new Date();

console.log(mydate);
console.log(typeof(mydate));
console.log(mydate.toString());
console.log(mydate.toLocaleString());
console.log(mydate.toDateString());



let mycreatedate=new Date(13,0,23);

console.log(mycreatedate.toString());

let mynewcreatedate= new Date(2025,1,23,5,3);
console.log(mynewcreatedate.toLocaleString());
console.log(mynewcreatedate.toLocaleDateString());

let myorignaldate= new Date("2025-05-10")
console.log(myorignaldate.toString());
console.log(myorignaldate.toLocaleString());

let myorignaldate1= new Date("10-05-2025")
console.log(myorignaldate1.toString());
console.log(myorignaldate1.toLocaleString());


let newDate= new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDate()-1);
console.log(newDate.getDay()+1);












