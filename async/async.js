"use strict";

//async & await
// claer style of using promise

// 1. async
function fetchUser1() {
  return new Promise((resolve, reject) => {
    reject("ellie");
  });
}

//위의 프로미스를 async 로 간단하게 처리
// async creates the block as promise
async function fetchUser() {
  return "ellie";
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1000);
  //throw new Erorr('error')
  return "apple";
}

async function getBanana() {
  await delay(1000);
  return "banana";
}

// promise 으로 만든다면
function getBanana1() {
  return delay(1000).then(() => "banana");
}

function pickFruits1() {
  return getApple().then((apple) => {
    return getBanana().then((banana) => `${apple} + ${banana}`);
  });
}

// error try catch 사용
// 순차적으로 기다려서 실행시키지기 않고 한번에 실행시키기 위해 변수를 만들어줌
async function pickFruits2() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

async function pickFruits() {
  const apple = await getApple();
  const banana = await getBanana();
  return `${apple} + ${banana}`;
}
pickFruits().then(console.log);
pickFruits2().then(console.log);

// 3. useful Promise APIs
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(" , ")
  );
}

pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);
