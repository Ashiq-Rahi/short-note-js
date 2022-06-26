let myArray = [45, 67, 68, 90, 56, 34, 54, 45, 67] // an array is a bunch of values stored in a variable
// myArray.push(40);// to push a value to an array. it will add at end of Array
// myArray.pop();// it will remove the last value from the Array
// myArray.unshift(32);// it will add the value in 0 position which means n the first position.
// myArray.shift();// it will remove the first value from the Array

// // To know the max value of a Array follow below

// let maxValue = [0];
// for(i = 0; i < myArray.length; i++){
//     let element = myArray[i];
//     if(element > maxValue){
//         maxValue = element;
//     }
// }
// console.log(maxValue)
let sum = 0;
for(i = 0; i < myArray.length; i++){
    let element = myArray[i];
    sum = element + sum;
}
console.log(sum)