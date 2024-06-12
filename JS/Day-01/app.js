console.log("Hello world! ")
let a = 5;
let b = 20;
sum = a + b;
console.log("Sum is : ", sum);

//Template literals
let pencileprice = 10;
let eraserprice = 5;
console.log("The sum of price is : " + (pencileprice + eraserprice));
let output = `The Sum price is : ${pencileprice + eraserprice} Rupees`;
console.log(output);

//Operator in JS
// 1.> Arithmetic Opertor in JS
let c = 3;
let d = 5;
console.log(c + d);

//2.> Assignment Operator
let e = 5;
let f = 6;
e = f;
console.log(e);

// 3.> Comparision operator
let age = 12;
if(age >= 18) //
    console.log("Adult");
else
console.log("Not adult"); //Prints Not adult
console.log(5>8); //prints False
console.log(5 == 5); //True
console.log(5 == 4); //False
let n = 5;
let str = "5";
console.log(n == str); //print True only compare number not type
console.log(n === str); //print False only compare number and typeof
console.log("'a' > 'A'" ,'a' > 'A'); //True

//Codnitional Statement
let age1 = 19;
if(age1 >= 18){ //
    console.log("Adult");
    console.log("you can drive");}
console.log("Not adult"); //Prints Not adult