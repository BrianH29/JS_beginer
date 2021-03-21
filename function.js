"use strict"; 

// 1. Function Declaration 
// function is object in JS
function log(msg){
    console.log(msg);
}
log("hellO"); 


/*
    2. Parameters
    premitive parameters : passed by value
    object parameters : passed by reference 
*/

function changeName(obj){
    obj.name = "coder";
}

const ellie = { name : 'ellie'};
console.log(ellie); // ellie
changeName(ellie);
console.log(ellie); // coder

// 3. Default Paramter (added in ES6)
function showMessage(msg, from = "Joy"){ // default value of the parameter
    console.log(`${msg} by ${from}`);
}

showMessage("Whats Up!!"); // Whats UP by Joy

function sendMsg(msg, from){
    if(from == "undefined"){
        console.log(`${msg} by ${from}`);
    }
}
sendMsg("GoodBye","Peter");

//4. Rest Paramter (added in ES6)
function printAll(...args){
    for(let i =0; i<args.length; i++){
        console.log(args[i]);
    }

    console.log("============================="); 

    for(const arg of args){
        console.log(arg);
    }

    console.log("=============================");

    args.forEach((arg) => console.log(args));
}

printAll('dream','coding','allie','Joy','GoodDay'); 

//5.Local scope
//밖에서는 안이 보이지만, 안에서만 밖을 볼 수 있다. 
let globalMessage = "global"; // global variable
function printMessage(){
    let message = "hello"; 
    console.log("local ====>" + message); // local variable
    console.log("global ====>" + globalMessage); 
    printAnother(); 
    function printAnother(){
        console.log(message);
        let childMsg = "good bye";
    }
    // console.lg(childMsg); --> error childMsg is not defined
}

printMessage(); 

// 6. Return a value
function sum(a,b){
    return a + b; 
}
const result = sum(1,2);
console.log(`sum : ${sum(1,2)}`);
console.log(result); 

// 7. Early Return, early exit
// bad!!
function upgradeUser(user){
    if(user.point > 10){
        // long upgrade logic.....
    }
}

// good****
function upgradeUser(user){
    if(user.point > 10){
        return; 
    }
    // long upgrade logic... 
}

/*
    First-class function
    functions are treated like any other variable
    can be assigned as a value to variable
    can be passed as an argument to other functions.
    can be returned by another function
*/

/*
    1. Function Expression
    a function declaration can be called earlier than it is defined. (hoisted)
    a function expression is created when the execution reaches it. 
*/

//print(); --> error Cannot access 'print' before initialization. 
//if function print(){ } was declared it would of worked 
const print = function(){   //anonymous function
    console.log('print anonymous function');
};
print(); 
const printAgain = print; 
printAgain(); 
const sumAgain = sum; 
console.log(`sum : ${sumAgain(2,5)}`)

// 2. Callback function using function expression 
function randomQuiz(answer, printYes, printNo){
    if(answer === 'love you'){
        printYes();
    } else {
        printNo(); 
    }
}

//anonymous function
const printYes = function(){
    console.log("YES!!!!");
}

/*
    named function
    better debugging in debugger's stack traces
    recursion -> 함수 자신을 부를때 ex)피보나치 
*/
const printNo = function print(){
    console.log("NO");
    //print(); -> recursion  
}

randomQuiz("wrong",printYes, printNo);
randomQuiz("love you", printYes, printNo);

/*
    arrow function
    always anonymous
*/
const arrowFunction1 = function(){
    console.log('arrowFunction!!!!')
}

const arrowFunction = () => console.log('print arrow function');
const add = (a, b) => a + b;
/*
    const add = function(a,b){
        return a + b; 
    }
*/
const simpleMultiply = (a,b) => {
    return a * b; 
};

//IIFE : Immediately Invoked Function Expression
(function hello(){
    console.log('IIFE');
})();
