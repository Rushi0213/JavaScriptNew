//arrays
const arr=[23,22,26,24,21];
console.log(arr[0],arr[4]);

const myarr=["rushi","rahul","ramesh","ravi"];
console.log(myarr[1]);


const newarr= new Array(1,3,5,7);
console.log(newarr[2]);


//array methods

arr.push(32);
console.log(arr);

arr.push(43);
console.log(arr);

arr.pop();
console.log(arr);

arr.unshift(10);
console.log(arr);

arr.shift(10);
console.log(arr);


console.log(arr.includes(5));
console.log(arr.indexOf(22));


const newarr1=arr.join();
console.log(arr);
console.log(newarr1);
console.log(typeof(newarr1));



//slice and splice

console.log("A",arr);


const mynew1arr=arr.slice(1,3);
console.log(mynew1arr);
console.log("B",arr);


const mynew1arr2=arr.splice(1,3);
console.log(mynew1arr2);
console.log("C",arr);








