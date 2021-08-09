//August Cohort - Predict Destructuring Assignment

//Problem 1
console.log("Problem 1 --> PREDICTION:" + "\nTesla" + "\nMercedes\n");
console.log("ACTUAL:");
//GIVEN
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)

//PREDICTION THOUGHT PROCESS
//const [ randomCar ] = cars
//Pulls Tesla
//const [ ,otherRandomCar ] = cars
//Skips Tesla and pulls Mercedes
//console logs Tesla
//console logs Mercedes

//Problem 2
console.log("\n*************" + "\nProblem 2 --> PREDICTION:  " + "\nReferenceError: name is not defined.  (NOTE:  Program will halt at this point due to the reference error, must comment out code starting with GIVEN to the end of the code block in problem 2 to run the remaining code.)\n");
console.log("ACTUAL:");
//GIVEN
// const employee = {
//     name: 'Elon',
//     age: 47,
//     company: 'Tesla'
// }
// const { name: otherName } = employee;
// //Predict the output
// console.log(name);
// console.log(otherName);

//PREDICTION THOUGHT PROCESS
//const { name: otherName } = employee; (name is now otherName)
// program halts with a reference error
// console logs the error
//****** Program halts here****** (must comment out code starting with GIVEN in problem 2 to run the remaining code in this document)

//Problem 3
console.log("\n*************" + "\nProblem 3 --> PREDICTION:" + "\n12345" + "\nundefined\n");  
console.log("ACTUAL:");
//GIVEN
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'   //missing comma, should cause an error
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);

//PREDICTION THOUGHT PROCESS
// password is 12345 (global)
// person does not have a password, therefore undefined
// console logs 12345
// console logs undefined

// //Problem 4
console.log("\n*************" + "\nProblem 4 --> PREDICTION: " + "\nfalse" + "\ntrue\n");
console.log("ACTUAL:");
//GIVEN
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;  
// //Predict the output
console.log(first == second);  
console.log(first == third);  

//PREDICTION THOUGHT PROCESS
//skip 8, pull 2
//skip 8, 2, 3, pull 5
//skip 8, 2, 3, 5, 6, 1, 67, 12, pull 2
    //first is 2, second is 5  ==> false
    //first is 2, third is 2 ==> true
// //console logs false
// //console logs true

// //Problem 5
console.log("\n*************" + "\nProblem 5 --> PREDICTION: " + "\nvalue" + "\n[ 1, 5, 1, 8, 3, 3 ]" + "\n1" + "\n5\n");
console.log("ACTUAL:");
//GIVEN
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;    //value
const { secondKey } = lastTest;  //1, 5, 1, 8, 3, 3
const [ ,willThisWork] = secondKey;  // secondKey is now 5
//Predict the output
console.log(key);  //value
console.log(secondKey);  //[1, 5, 1, 8, 3, 3]
console.log(secondKey[0]);  //1
console.log(willThisWork);  //5

//PREDICTION THOUGHT PROCESS
//key is set to the word "value"
//pull the full array in secondKey
//pull index 0 of the secondKey array
//willThisWork skips 1 and pulls 5
    //console logs ==> value
    //console logs ==> [1, 5, 1, 8, 3, 3]
    //console logs ==> 1
    //console logs ==> 5