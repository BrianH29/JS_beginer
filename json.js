"use strict";

//JSON(JavaScript Object Notation)

// 1. Object to JSON
//stringify(obj)
let j = true;
console.log(j);

j = ["cake", "brownie"];
console.log(j);

let json = JSON.stringify(true);
console.log(json);

json = ["apple", "banana"];
console.log(json);
console.log(JSON.stringify(json));

const rabbit = {
  name: "tori",
  color: "white",
  size: null,
  birthDate: new Date(),
  jump: function () {
    console.log(`${this.name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ["name", "color", "size"]);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key:${key}, value:${value}`);
  return key === "name" ? "brian" : value;
});
console.log(json);

// 2. JSON to Object
console.clear();
json = JSON.stringify(rabbit);
console.log(json);

const obj = JSON.parse(json, (key, value) => {
  console.log(`key:${key}, value:${value}`);
  return key === "birthDate" ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
//obj.jump(); --> Uncaught TypeError obj.jump is not a function.

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());

console.clear();
// example
const train = {
  name: "ktx",
  color: "white",
  date: new Date(),
  run: function () {
    console.log(`${this.name} is real fast!`);
  },
};

console.log(train);
let json_test = JSON.stringify(train);
console.log(json_test);

console.log(train.name);
//console.log(json_test.name); undefined

train.run();

json_test = JSON.stringify(train, ["name", "date"]);
console.log(json_test);

console.log("===========================");
json_test = JSON.stringify(train, (key, value) => {
  console.log(`key : ${key}, value : ${value}`);
  return key === "name" ? "SRT" : value;
});

console.log("=====================");

json_test = JSON.stringify(train);
const obj2 = JSON.parse(json_test, (key, value) => {
  console.log(`key : ${key}, value : ${value}`);
  return key === "name" ? "SRT" : value;
});
console.log(obj2);
