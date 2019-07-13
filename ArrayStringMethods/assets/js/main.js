// Array.push

const students = [];

// console.log(students.length);

students.push('John Doe', 'Test', 'Test 3');

// console.log(students.length);

// Array.pop

const students1 = ['John Doe', 'Test', 'Test 3'];

// console.log(students1.pop());
// console.log(students1.pop());
// console.log(students1.pop());
// console.log(students1.pop());
// console.log(students1);

// Array.shift

const students2 = ['John Doe', 'Test', 'Test 3'];

students2.shift();

// console.log(students2);

// Array.slice

const students3 = ['John Doe', 'Test', 'Test 3'];

// console.log(students3.slice(1, 2));

// console.log(students3);

// Array.splice

const students4 = ['John Doe', 'Test', 'Test 3'];

// console.log(students4.splice(1, 1));
// console.log(students4);

// Array.indexOf

const students5 = ['John Doe', 'Test', 'Test 3'];

const itemIndex = students5.indexOf('Test');

// students5.splice(itemIndex, 1);

// console.log(students5);

// Array.forEach

const students6 = [
  { name: 'Jamil', age: 21 },
  { name: 'John', age: 30 },
  { name: 'Example', age: 18 },
];

const avarageAgesUnder25 = [];

students6.forEach((element, index, array) => {
  if (element.age <= 25) {
    avarageAgesUnder25.push(element);
  }
});

// Array.map

const students7 = [
  { name: 'Jamil', age: 21 },
  { name: 'John', age: 30 },
  { name: 'Example', age: 18 },
];

const attendanceList = students7.map(function(student) {
  const newStudent = { ...student };

  newStudent.name = `P406: ${newStudent.name}`;

  return newStudent;
})

// console.log(students7);

// console.log(attendanceList);

// Array.find

const students8 = [
  { name: 'Jamil', age: 21 },
  { name: 'John', age: 30 },
  { name: 'Example', age: 18 },
];

const foundStudent = students8.findIndex(function(student) {
  if (student.name === 'John') {
    return true;
  } else {
    return false;
  }
});

// console.log(foundStudent);

// Array.filter

const students9 = [
  { name: 'Jamil', age: 21 },
  { name: 'John', age: 30 },
  { name: 'Example', age: 18 },
];

const filteredStudentUnder25 = students9.filter(function(student) {
  if (student.age <= 25) {
    return true;
  } else {
    return false;
  }
});

// console.log(filteredStudentUnder25);

// Not falsy values.
// Input
const inputs = [{}, false, 0, null, 12, 'String', '', undefined, 'Jamil', 'Example', null];

// Output
[{}, 12, 'String', 'Jamil', 'Example'];

function filterFalsyValues(array) {
  return array.filter((function(value) {
    return value;
  }))
}

// console.log(filterFalsyValues(inputs));

// Array.concat
const a = [1, 2, 3, 4];
const b = [5, 6, 7, 8];
const c = [9, 10, 11, 12];

const mergedArrays = a.concat(b, c);
const mergedArraysNewWay = [...a, ...b, ...c];

// console.log(mergedArraysNewWay);

// Array.join
const a1 = [1, 2, 3, 4];
// console.log(a1.join('->'));

// Array.toString
const a2 = [1, 2, 3, 4.3];
// console.log(a2.toString());

// value = 2, index = 1
// indexOf() -> 1, lastIndexOf() -> 1
[1, 2, 3, 4, 3, 4, 5, 6];

const a3 = [1, 2, 3, 4];
const b3 = [3, 4, 5, 6];

function findUnique(arr1, arr2) {
  return [...arr1, ...arr2].filter(function(value, index, array) {
    return array.indexOf(value) === array.lastIndexOf(value);
  });
};

// console.log(`a->`, a3);
// console.log('b->', b3);
// console.log(findUnique(a3, b3));

// String methods

const stringExample = 'Example String Example As An ExaMple';

// console.log(stringExample.search('example'));

console.log(stringExample.toLowerCase().replace('example', '******'));

// String.split
const example = 'Jamil,John,Doe,Example';

const exampleSentence = 'Here is an example sentence which contains example example example';

function replaceAll(sentence, toBeRemoved) { // toBeRemoved = 'example'
  let allWords = sentence.split(' ');
  console.log(allWords);
  allWords = allWords.filter((word) => word !== toBeRemoved);

  return allWords.join(' ');
}

console.log(replaceAll(exampleSentence, 'example'));
