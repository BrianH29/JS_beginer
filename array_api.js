"use strict";

// 1. make a string out of an array
{
  const animals = ["dog", "cat", "monkey", "buffalo"];
  const result = animals.join("/");
  //join(separator?: string): string; -> default seperator (',')
  console.log(result);
}

// 2. make an array out of a string
{
  const animals = "dog,cat,monkey,buffalo,eagle";
  const result = animals.split(",");
  //split(separator: string | RegExp, limit?: number): string[];
  console.log(result);
}

// 3. make this array look like this : [5,4,3,2,1]
{
  const arr = [1, 2, 3, 4, 5];
  const result = arr.reverse();
  console.log(result);
  console.log(arr); // it replaces the origin variable arr == result
}

// 4. make new array w/o the first two elements
{
  const numList = [1, 2, 3, 4, 5];
  const result = numList.splice(0, 2);
  console.log(result);
  console.log(numList); // it changes origin variable. We want new array

  const numList2 = [1, 2, 3, 4, 5];
  const newArr = numList2.slice(2, 5);
  console.log(numList2);
  console.log(newArr);
}

//Student constructor, field
class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}

const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// 5. find a student with the score 90
{
  function score(student) {
    return student.score === 90;
  }
  console.log(students.find(score));

  //arrow function
  const result = students.find((student) => student.score === 90);
  console.log(result);
}
//console.clear();
// 6. make an array of enrolled students
{
  function list(student) {
    return student.enrolled;
  }
  console.log(students.filter(list));

  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// 7. make an array containing only the students scores
{
  function scoreList(student) {
    return student.score;
  }
  console.log(students.map(scoreList));

  const result = students.map((student) => student.score);
  console.log(result);
}

// 8. check if there is a student with the score lower than 50
{
  const result = students.some((student) => student.score < 50);
  console.log(result);

  const result2 = students.find((student) => student.score > 50);
  console.log(result2);

  function outcome(student) {
    return student.score < 50;
  }

  console.log(students.some(outcome));
}
console.clear();
// 9. compute students' average score
{
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result);
}

{
  const av = students.reduce((prev, curr) => {
    console.log("------------------");
    console.log(prev);
    console.log(curr);
    return prev + curr.score / 2;
  }, 0);
  console.log(av);
}
console.clear();
{
  const av2 = students.reduce(function (prev, curr) {
    console.log("--------------------------");
    console.log(prev);
    console.log(curr);
    return curr;
  });
}
// 10. make a string containing all the scores
{
  const score = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join();
  console.log(score);
}
// sort
{
  const scoreList = students
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join();
  console.log(scoreList);
}
