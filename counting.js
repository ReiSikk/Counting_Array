/* const people = ["Harry", "ron", "Hermione"];
let result;

result = people.push("Draco");
result = people.pop();
result = people.push("Nevillle");
result = people.push("Luna");
result = people.slice(0, 3);
result = people.splice(1, 0, "Cho");
people[1] = "Ginny";
result = people.push("Fred", "George");
result = people.indexOf("Fred");
result = people.splice(result, 1);
console.log(result);
console.log(people);
 */

const countingArr = [];
const numberOfLoops = 9;
let i = 0;

document.addEventListener("DOMContentLoaded", init);

function init() {
  console.log("init");
  counter();
}

function counter() {
  countingArr.unshift(i);
  i++;
  console.log(countingArr);
  setTimeout(counter, 900);
  if (countingArr.length > 8) {
    countingArr.pop();
  }
}
