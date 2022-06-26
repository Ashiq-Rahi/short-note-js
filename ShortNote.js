//Declaring variables
//variables are declared with the keyword var. the word var is reserved for javascripting. whenever you type var it will be considered as variable. var word is no more used in modern scripting. we will use "let" & "const" for declaring variable. "let" is redeclarable and "const" is not. you cannot reassign anything if you use "const" kyeword.

// example
// let a = 5; //it is redeclareble
// a = 6; // a is redeclared
// const b = 10; // it is not redeclarble

//for now only for learning purpose you can use the keyword "var"
// var x = 1; //number variable/numeric variable
// var y = 'Maruf'; //string variable. strings are quoted inside single quote('')/ double quote("")/ carret(``). anything inside the quotion will be considered as a string

//operators
// (+, -, *, /) this are oerators used in javascripting
//you can add, red substract, divide or multiply any value by using the opreators.
//(%) it is also an operator. it is used to define the remainder. specially used in conditional loops.

//************************************************ Sheet one************************************************************* */
                                                /* Syntax */ 
// examples of declaring values
var myName = "Ashiq";
console.log(myName); // console.log() used to see the result

// number variable
var ticketPrice = 10;
console.log(ticketPrice);

// string variable
var myCity = "Ghatail";
console.log(myCity);

// type of the value
console.log(typeof ticketPrice); //number// to know the type of the variable "typeof" is used
console.log(typeof myCity); //string// to know the type of the variable "typeof" is used

// boolean // usually booleans are true or false type values. 
var myDescription = true;
console.log(typeof myDescription); //boolean

// indexing position
console.log(myCity.indexOf('i')); // used to know the position of the value

// operators
var penPrice = 10;
var bookPrice = 25.5;
var total = penPrice + bookPrice; // addition
var multiplication = penPrice * bookPrice; //multiplication
var division = penPrice / bookPrice; // division
var remainder = penPrice % bookPrice; // remainder
console.log(parseInt(total)); // parseInt is used to make a number integar. parseFloat is used to declare a number with fraction.
console.log(Math.round(bookPrice));

// addition
console.log(total);

// multiplication
console.log(multiplication);

//division
console.log(division);

//remainder
console.log(remainder);
//************************************************ End of Sheet one************************************************************* */
                                                        /*-----*/
//************************************************ Sheet Two************************************************************* */
                                                   /*Conditionals */

//usually conditions are used as if else condition. the condition delcared inside the parenthesis after "if". You can use the if condition in many ways. you can set only one condition using the "if" and without "else". for more than one condition you can use if/ else if.
// conditions are usually declared with (=, <, >, <=, >=)
// to fulfil two or more condition "&&" is used. that means both conditions should be fulfilled
// to fulfill any one condition "||" is used. That means if any of the two/more conditions are fullfilled the value will be true.
var html = 1;
var css = 1;
var bootstrap = 1;
var js = 2;
var react = 3;
var mongoDb = 4;
var mySkills = html + css + bootstrap + react;

if(mySkills >= 8){
    console.log('I am a pro developer');
}
else if(mySkills > 3){
    console.log('I am a intermidiate developer');
}
else{
    console.log('I am a bigeiner developer')
}
//************************************************ End of Sheet Two************************************************************* */
                                                        /*-----*/
//************************************************ Sheet Three************************************************************* */
                                                   /*Loops */

//while loop
let num = 1; // declare a variable 
while(num < 10){        //declare the condition
    console.log(num);   // see the result
    num++;              // if not match it will increase one value and will run the loops until fulfill the condition
}

//for loop
for(i = 0; i <= 10; i++){   // all conditions in a parenthesis and will work same as the while loop. will run the loops until find the exact value
    console.log(i)
}
//************************************************ End of Sheet Three************************************************************* */
                                                        /*-----*/
//************************************************ Sheet Four************************************************************* */
                                                   /*function */
// function are used to reuse any formula or condition
//example of leapyear through function
function checkleapYear(year){
    if((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)){
        var result = year + ' is a leap year'
        return result;  // return the value and do not console.log here while using the function
    }
    else{
        var result = year + ' is not a leap year'
        return result; // return the value and do not console.log here while using the function
    }
}
let myYear = checkleapYear(2020);
console.log(myYear)
//factorial through function (iteraty way)
function factorial(n){
    var fact = 1;
    for(i = 1; i <= n; i++){
        fact = fact * i;
}
    return fact;
}
 let myFact = factorial(10);
 console.log(myFact)

 //factorial through function (recursive way)
 
 function factorialRecursive(n){
    if(n == 0){
        return 1;
    }
    else{
        return factorialRecursive(n - 1) * n;
    }
 }
 let myFactRecursive = factorialRecursive(10);
 console.log(myFactRecursive)
 
 //fibonacci through function (iteraty way)

 function fibonacci(n){
    const sequence = [0, 1];
    for(i = 2; i <= n; i++){
        sequence[i] = sequence[i - 1] + sequence[i - 2]
    }
    return sequence[n];
 }
 let myFibonacci = fibonacci(10);
 console.log(myFibonacci)
  
 //fibonacci through function (recursive way)

 function fibonacciRecursive(n){
    if(n == 0){
        return 0;
    }
    else if(n == 1){
        return 1;
    }
    else{
        return fibonacciRecursive(n-1) + fibonacciRecursive(n-2)
    }
 }
 let myFibonacciRecursive = fibonacciRecursive(10);
 console.log(myFibonacciRecursive)

//************************************************ End of Sheet Four************************************************************* */
                                                        /*-----*/
//************************************************ Sheet Five************************************************************* */
                                                   /*Array */

let myArray = [45, 67, 68, 90, 56, 34, 54, 45, 67] // an array is a bunch of values stored in a variable
myArray.push(40);// to push a value to an array. it will add at end of Array
myArray.pop();// it will remove the last value from the Array
myArray.unshift(32);// it will add the value in 0 position which means n the first position.
myArray.shift();// it will remove the first value from the Array

// To know the max value of a Array follow below

let maxValue = 0; //suppose the max value is the value which is on the first position
for(i = 0; i < myArray.length; i++){ // find the value as as long as the array is
    let element = myArray[i]; // let find the i'th position of the array
    if(element > maxValue){ // if the element is greater than current max value which is by default we set 0
        maxValue = element; // then the new value of the maxValue will be the element
    }
}
console.log(maxValue)// you can see the bigger value

// to sum all the values of an Array follow below
let sum = 0;
for(i = 0; i < myArray.length; i++){
    let element = myArray[i];
    sum = element + sum;
}
console.log(sum)