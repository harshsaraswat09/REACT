-------------------------------

🔹 Arrays are Reference Data Types

❌ Reference Copy (Problem)

var arr = [10, 20, 30];
var arr2 = arr;

arr2.push(99);

console.log(arr2); // [10, 20, 30, 99]
console.log(arr);  // [10, 20, 30, 99]


✔️ Why?
Array reference type hota hai → arr aur arr2 same memory ko point kar rahe hain.
Isliye arr2 change hua toh arr bhi change ho gaya.

--------------------------------

✅ Spread Operator se Proper Copy (Shallow Copy)

var arr = [10, 20, 30];

var arr2 = [...arr];

arr2.push(99);

console.log(arr);  // [10, 20, 30]
console.log(arr2); // [10, 20, 30, 99]

-> Spread operator (...)

Naya array banata hai
Same values copy karta hai
Original array safe rehta hai

💡 React rule:

❌ Direct mutation nahi
✅ Spread se copy → then update

--------------------------------

🔹 Objects are also Reference Types
❌ Reference Copy

var obj = {
  user: "harsh",
  age: "22",
  city: "New York"
};

var obj2 = obj;

obj2.city = "Bihar";

console.log(obj);


🧠 Output:
{
  user: "harsh",
  age: "22",
  city: "Bihar"
}

// Same reason → same memory reference


✅ Object Spread Copy (Best Practice)

var obj = {
  user: "harsh",
  age: "22",
  city: "New York"
};

var obj2 = { ...obj };

obj2.user = "Sarthak";

console.log(obj2);


output 
{
  user: "Sarthak",
  age: "22",
  city: "New York"
}

Original obj safe
obj2 independent copy


--------------------------------

🔹 Object Destructuring

var obj = {
  user: "harsh",
  age: 22,
  city: "bhopal",
  skills: ["js", "react", "next"]
};

var { user } = obj;

console.log(user); // harsh

👉 Ye React mein props & state ke liye daily use hoga.

--------------------------------

🔹 Import / Export (VERY IMPORTANT)

✅ app.js
var user = "Harsh";
export default user;

✅ script.js
import user from "./app.js";

console.log(user);

// ek file k andar ek hi export default hota hai

--------------------------------


🧠 Default vs Named Export (Extra clarity)
Default Export


js
export default user;
import user from "./app.js";

Named Export
export const age = 22;
import { age } from "./app.js";
