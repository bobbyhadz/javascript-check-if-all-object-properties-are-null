// EXAMPLE 1 - Check if all Object Properties are Null

const obj = {a: null, b: null};

const isNullish = Object.values(obj).every(value => {
  if (value === null) {
    return true;
  }

  return false;
});

console.log(isNullish); // 👉️ true

// ------------------------------------------------------------------

// // EXAMPLE 2 - Check if all Object properties are True

// const obj = {
//   first: true,
//   second: true,
// };

// const allTrue = Object.values(obj).every(
//   value => value === true,
// );
// console.log(allTrue); // 👉️ true

// ------------------------------------------------------------------

// // EXAMPLE 3 - Check if all Object properties are Falsy

// const obj = {a: null, b: undefined, c: '', d: 0, e: false};

// const isFalsy = Object.values(obj).every(value => {
//   if (!value) {
//     return true;
//   }
//   return false;
// });

// console.log(isFalsy); // 👉️ true

// ------------------------------------------------------------------

// // EXAMPLE 4 - Check if all values in an object are Truthy in JavaScript

// const obj = {
//   first: 'bobbyhadz.com',
//   second: true,
//   third: 1,
// };

// const allTruthy = Object.values(obj).every(value => value);
// console.log(allTruthy); // 👉️ true

// ------------------------------------------------------------------

// // EXAMPLE 5 - Set all Values in an Object to Null in JavaScript

// const obj = {
//   name: 'Bobby',
//   age: 30,
//   country: 'Chile',
// };

// Object.keys(obj).forEach(key => {
//   obj[key] = null;
// });

// // 👇️ { name: null, age: null, country: null }
// console.log(obj);

// ------------------------------------------------------------------

// // EXAMPLE 6 - Set all Values in an Object to Null using reduce()

// const obj = {
//   name: 'Bobby',
//   age: 30,
//   country: 'Chile',
// };

// const newObj = Object.keys(obj).reduce((accumulator, key) => {
//   return {...accumulator, [key]: null};
// }, {});

// // 👇️ { name: null, age: null, country: null }
// console.log(newObj);

// ------------------------------------------------------------------

// // EXAMPLE 7 - Set all Values in an Object to Null using `Object.fromEntries()`

// const obj = {
//   name: 'Bobby',
//   age: 30,
//   country: 'Chile',
// };

// const newObj = Object.fromEntries(
//   Object.keys(obj).map(key => [key, null]),
// );

// // 👇️ { name: null, age: null, country: null }
// console.log(newObj);
