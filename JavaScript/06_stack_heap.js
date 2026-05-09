//stack(primitive data type)
// heap(non-primitive data type)


//stack -here get copy of orignal content

let myyoutubename="rushideshmukhyoutube";

let anothername=myyoutubename;

anothername="rushideshmukh";

console.log(myyoutubename);
console.log(anothername);



// heap- here get the refrence of orignal content

let userone={
    email:"rushidehmukh@gmail.com",
    upi:"uder@ybl",
}

let usertwo=userone

usertwo.email="rushi@gmail.com"

console.log(userone);
console.log(usertwo);


console.log(userone.email);
console.log(usertwo.email);

