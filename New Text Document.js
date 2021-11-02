console.log("c\nf")
let a ="we love"
let b ="Mark Emil"
console.log(`${a} 
${b}`)


let d = 100;
d += 100;
console.log(d);

console.log(Math.floor(99.8));
console.log(Math.ceil(99.8));
console.log(typeof "osama" ===typeof "ahmed")
console.log(10>6 || 10<8 )

let thename = "sun";
let thegender = "female";
let theage = 60;

if (thegender === "male"){
    console.log("Mr");
}
else {
    console.log("Ms");
}
                   // tare2a mo5tasara

thegender === "male" ? console.log("Mr") : console.log("Ms");

console.log(thegender === "male" ? "Mr" : "Ms");
console.log(`Hello ${thegender === "male" ? ("Mr") : ("Ms")} ${thename}`);

theage < 30 ? console.log("less than 30") : theage > 30 && theage < 60 ? console.log("between 30 and 60") : theage > 60 ? console.log("greater than 60") : console.log("unknown");



// hasta5dm || lw el price 3andy m4 ma3rofa fa hadelo padel

let theprice = "";
console.log(`the price is ${theprice || 200}`);

// switch

let day=5;
switch(day){
    case 0:
        console.log("saturday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    default:
        console.log("unknown Day")
}

let myfriends = ["ahmed" , "mina" , "osama" , "sayed" , "omar"  ]
let counter = 3 ;
let zero = 0;

console.log(myfriends.slice( zero , ++counter ).reverse())
console.log(myfriends.slice(++zero , counter-zero).reverse())
console.log(myfriends.indexOf("mina"))

for( i=0 ; i < myfriends.length ; i++) {
    console.log(myfriends[i]);
}

let product=["keyboard","mouse","printer"]
let color=["blue","red","yellow"]
let year=["2020" , "2021"]

for (i=0; i< product.length ; i++ ){
    console.log(`the product is ${product[i]}`)
console.log("color is")
for (j=0; j< color.length ; j++ ){
    console.log(`- ${color[j]}`)
}
console.log("year is")
for (k=0; k<year.length ; k++ ){
    console.log(`the model is ${year[k]}`)
}
}
// let products=["keyboard","mouse","printer"]
// let colors=["blue","red","yellow"]
// let showcount = 3;
// document.write(`<h1> show ${showcount} product </h1>`)
// for(i = 0 ; i < showcount ; i++){
// document.write(`<div>`) 
// document.write(`<h3> ${i+1}- ${products[i]} </h3>`) 
// for(j = 0 ; j < colors.length ; j++)
// document.write(`<p> [${j+1}] ${colors[j]} </p>`) 
// document.write(`</div>`)  
// }




let username = "mina"
console.log(`hi ${username}`)






function sayhello (username , age = "unknown"){
if (age > 20) {
 console.log(`welcome ${username} your age is ${age}` );
}else{
    console.log(`sorry you are under 20 years`)
}
}
sayhello("Mark" , 50 );
sayhello("mina" , 35);
sayhello("ahmed" , 19);

function generateYears(start , end , exclude ) {
    for ( i = start ; i <= end ; i++){
        if(i === exclude){
            continue;
        }
    console.log(i);
}
}
generateYears(2000 , 2022 , 2021);



function calc(num1 , num2){
    return  num1 + num2
}
console.log(calc(100,60));




function calc(...numbers){
    let result = 0;
    for(i = 0 ; i < numbers.length ; i++){
        result += numbers[i]
    }
    return `the result = ${result}`;
}
console.log(calc(10,20,30,40,35));





let doublenumber =[1 , 5 , 10 , 15 , 100 , 35]
let dn = doublenumber
.map(function (ele){
    return  ele + ele ;
});
console.log(dn);

let friends =[ "ahmed" , "ali" , "hassan" , "alaa" , "mohamed"];

let fr = friends
.filter(function (ele){
    return ele.startsWith("a");
});
console.log(fr);


let mix ="A13BTEF6";
let numbers = mix
.split("")
.filter(function (ele){
return  !isNaN(parseInt (ele)) ;
})
.map(function (ele){
    return ele * ele
})
.join("")
console.log(numbers);

let thebiggest = ["mira" , "mark" , "merna" , "nancy" , "patrick-2" , "patrick"];
let largestword = thebiggest
.reduce(function (acc , current){
    return acc.length > current.length ? acc : current ;
});
console.log(largestword)













let myString = "EElllzzzzzzzeroo";
let elzero = myString
.split("")
.filter(function (ele){
    return ele.repeat
});
console.log(elzero)







// let count = setTimeout(sayMsg , 3000);
// function sayMsg () {
//     console.log(`i am message`);
// }

let count = setTimeout(sayMsg , 5000 , "mark" , 28 , "Egypt")
function sayMsg (user , age , country){
    console.log(`i am message from ${user} his age is ${age} from ${country}`)
}



let arrowleft = document.querySelector("fas fa-angle-left change-leftbackground")
arrowleft.onclick=function(){
    document.bodystyle.backgroundImage="url(../images/"
}