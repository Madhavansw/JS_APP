const arr = [1, 2, 3, 4, 5];
const newArr = [...arr,5,6,7,8,9];
 console.log(newArr);
 const copyArr = [ ...arr];
 console.log(copyArr);
 const user = { name: "Asha" };
const updated = { ...user, age: 25 }; // { name: "Asha", age: 25 }
console.log(updated);