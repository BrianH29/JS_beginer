"use strict";

// Promise is a JavaScript object for asynchronous operation.
// State: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files) 비동기적?
  console.log("doing something...");
  setTimeout(() => {
    resolve("ellie");
    //reject(new Error("no network"));
  }, 2000);
});

// 2. Consumer : then, catch, finally
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally"); //   성공하던 실패하던 실행 됨.
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("hen"), 1000);
  });

const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    //setTimeout(() => resolve(`${hen} => egg`), 1000);
    setTimeout(() => reject(new Error(`error! ${hen} => egg`)), 1000);
  });

const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => fried`), 1000);
  });

/*
getHen()
  .then((hen) => getEgg(hen))
  .then((egg) => cook(egg))
  .then((meal) => console.log(meal));
*/

getHen() //
  .then(getEgg)
  .catch((error) => {
    return "bread";
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);
