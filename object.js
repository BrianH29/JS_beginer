"use strict"; 

/*
    Objects
    one of the JavaScript's data types.
    a collection of related data and/or functionality.
    Nearly all objects in JavaScript are instances of Object.
    object = { key, value };
*/

// 1. Literals and properties
//creating object
const obj1 = {};    // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person){
    console.log(person.name);
    console.log(person.age);
}

// with JavaScript magic (dynamically typed language)
// can add properties later
const Joy = {name:'Joy', age:21};
print(Joy); 

Joy.hasJob = true;
console.log(Joy.hasJob);

// can delete properties later
delete Joy.hasJob;
console.log(Joy.hasJob); 


// 2. Computed properties
// key should be always string
console.log(Joy.name);
console.log(Joy['name'])
Joy['hasJob'] = true;
console.log(Joy.hasJob);

function printValue(obj, key){
    //console.log(obj, key);  error key is not defined. 
    console.log(obj[key]);
}

printValue(Joy, 'name');
printValue(Joy, 'age'); 

// 3. Property value shorthand
const person1 = {name : 'bob', age : 2};
const person2 = {name : 'steve', age : 3};
const person3 = {name : 'dave', age :4 };
//const person4 = makePerson('brian',30);
const person4 = new Person('keith',30);
console.log(person4);

// function makePerson(name, age){
//     return {
//         name : name,
//         age : age,
//     };
// }

// 4. Constructor Function
function Person(name, age){
    this.name = name;
    this.age = age; 
}

// 5. in operator: property existence check (key in obj)
console.log('name' in Joy);
console.log('age' in Joy);
console.log('random' in Joy); 

// 6. for..in vs for..of
// for (key in obj)
console.clear(); 
for (let key in Joy){
    console.log(key);
}

//for(value of iterable)
const array = [1,2,4,5];
for(let value of array){
    console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = {name:'B', age :'20'};
const user2 = user;
console.log(user2);

user2.name = 'coder';
console.log(user); // {name : "coder", age "20"} 변경 user2 도 user의 reference를 가리킴 그러므로 cloning 보다는 동일한 ref를 가지고 있다고 봐야함


//old way
const user3 = {};
for(let key in user){
    user3[key] = user[key];
}
console.clear();
console.log(user3);

//const user4 = {};
//Object.assign(user4, user);
const user4 = Object.assign({},user);
console.log(user4);

//another ex
const fruit1 = { color : 'red' };
const fruit2 = { color : 'blue', size : 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
console.log(mixed);