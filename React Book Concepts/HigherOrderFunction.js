//============== Concept of Higher Order function as an Argument...
// const InvokeOf = (condition, fnTrue, fnFalse) =>
//   condition ? fnTrue() : fnFalse();

// const showWelcome = () => console.log("Welcome Musahaf Ali .....!");
// const showUnathourized = () =>
//   console.log("You are not Welcomed bro Musahaf Ali .....!");

// InvokeOf(false, showWelcome, showUnathourized);

// const userLog = (userName) => (message) =>
//   console.log(`${userName} -> ${message}`);

// const log = userLog("grandpa23");
// console.log("attemting to load 20 fack memebers");

// getFackMembers(20).then(
//   (member) => console.log(`Successfully Loaded ${member.length} members`),
//   (error) => console.log("Encountered and error loading members")
// );

// function higherOrderFunction(callback) {
//   console.log("Executing the Higher Order Functions...");
//   callback();
// }

// function callBackFunction() {
//   console.log("Executing the Callback function");
// }

// higherOrderFunction(callBackFunction);

// function createGreeter(greeting) {
//   return function (name) {
//     console.log(`${greeting} , ${name}`);
//   };
// }

// let greeteHello = createGreeter("Hello");
// greeteHello("Musahaf");

//=============== How does Abstraction come into use With in the Higher Order Function....

// function performOperationOnArray(array, operation) {
//   return array.map(operation);
// }

// function double(number) {
//   return number * 4;
// }

// const numbers = [1, 2, 3, 4, 5];
// const dooublingTheArray = performOperationOnArray(numbers, double);
// console.log(dooublingTheArray );

// Example: HOF for filtering elements based on a condition
function filterArray(array, condition) {
  return array.filter(condition);
}

const numbers = [1, 2, 3, 4, 5];

// Using filterArray to filter even numbers
const evenNumbers = filterArray(numbers, (num) =>
  num == 9 ? "include" : "exclude"
);
console.log(evenNumbers); // Output: [2, 4]
