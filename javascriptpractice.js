// // =========================
// //  VARIABLES AND DATATYPES
// // =========================
// // 1.How do we assign a value to a variable?
// // let color = 'red'

// // 2.How do we change the value of a variable?
// // color = 'blue'

// // 3.How do we assign an existing variable to a new variable?
// // let newColor = color

// // 4.Remind me, what are declare, assign, and define?
// // Declare: We create a variable by using keyword "let" or "const"
// // Assign: giving a value after declaring a variable
// // Define: giving a variable its initial datatype

// // 5.What is pseudocoding and why should you do it?
// // What is: pseudocoding is a way to write a description of a computer program or algorithm in plain english.
// // Why is: We should use to simplify and planning the program in small logical steps.

// // 6.What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
// // A reasonable amount spent in planning in solving the problem is between 50% to 70% and for coding it takes 50% to 30%.


// //======================= 
// //        STRINGS
// //=======================

// // 1. Create a variable called firstVariable
// let firstVariable
// // 2.Assign it the value of the string "Hello World"
// firstVariable = "Hello World"
// // 3. Change the value of this variable to some number
// firstVariable = 12
// // 4. Store the value of firstVariablein a new variable called secondVariable
// let secondVariable = firstVariable
// // 5. Change the value of secondVariableto any string.
// secondVariable = "prescholas"
// // 6.What is the value of firstVariable?
// // 12
// // 7. Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
// const yourName = "Pranusha"
// // console.log("Hello, my name is "+yourName)
// let newString = "Hello, my name is "+yourName

// // =================
// //    BOOLEANS
// // =================

// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';

// console.log(a < b);
// console.log(c > d);
// console.log('Name' === 'Name');
// // // FOR THE NEXT TWO, USE ONLY && OR ||
// console.log(true || false);
// console.log(false || false || false || false || false || true);
// console.log(!false || false)
// console.log(e === 'Kevin');
// console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
// console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
// console.log(48 !== '48')

// // ==================
// // THE FARM
// // ==================

// // 1.Declare a variable animal. Set it to be either "cow" or something else
// let animal = "cow"
// // 2.Write code that will print out "mooooo" if the it is equal to cow

// // 3.Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
// if(animal === "cow"){
//     console.log("mooooo")
// }
// else console.log("Hey! You're not a cow.")

// // =================
// // DRIVERS ED
// // ================
// // 1.Make a variable that holds a person's age; be semantic
// let age = 16
// // 2.Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."
// if(age >= 16){
//     console.log("Here are the keys!")
// }
// else
// console.log("Sorry, you're too young.")

 // ============
// LOOPS
// ============
// 1. Write a loop that will print out all the numbers from 0 to 10, inclusive

// for(let i =0; i <= 10; i++){
//     console.log(i)
// }
// // // 2.Write a loop that will print out all the numbers from 10 up to and including 400
// for(let i = 10; i <= 400; i++){
//     console.log(i)
// }
// // 3.Write a loop that will print out every third number starting with 12 and going no higher than 4000
// for(i = 12; i < 4000; i += 3){
//     console.log(i)
// }

// ===============
// GET EVEN
// ===============
// 1.Print out the numbers that are within the range of 1 - 100
//  for(let i = 0; i <= 100; i++){
//     console.log(i)   
//  }
//  2.Adjust your code to add a message next to even numbers only that says: "<-- is an even number"

// for(let i = 0; i <= 100; i++){
    
//     if(i % 2 === 0){
//         console.log(i+"<-- is an even number" )
//     }  
//     else{ 
//         console.log(i)
//     } 
//  }
// =================
// 5. Give me Five
// ===================
//1.For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
// for(let i = 0; i <= 100; i++){
//     if(i % 5 === 0){
//         console.log('I found : ' + i + ". High five!" )
//     }    
// }
// 1.For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
// for(let i = 0; i <= 100; i++){
//     if(i % 5 === 0){
//         console.log('I found : ' + i + ". High five!" )
//     }
//      else if(i % 3 === 0){
//         console.log('I found : ' + i + ". three is a crowd")
//      }   
// }
// 1.For numbers divisible by both three and five, be sure your code prints both messages
for(let i = 0; i <= 100; i++){
    if(i % 5 === 0 && i % 3 === 0){
        console.log(`I found : ${i} high five and three is a crowd`)
    }
     else if(i % 3 === 0){
        console.log('I found : ' + i + ". three is a crowd")
     }  
     else if( i % 5 === 0){
        console.log('I found : ' + i + ". High five!" )
        

     } 
}