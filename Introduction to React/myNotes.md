var arr = [10,20,30]

var arr2 = arr

arr2.push(99)

console.log(arr2)

// array jo hota hai vo reference datatype hota hai 

var arr = [10,20,30]

// var arr2 = [arr[0], arr[1], arr[2],...arr[n]]

// js k developers ne bola agar is tarah se copy karne jaye toh bhot time waste hoga

// toh unhone banaya spread operator

var arr2 = [...arr]

console.log(arr)


-------------------------------

var obj = {
    user: "harsh",
    age: "22",
    city: "New York"
}

var obj2 = obj

obj2.city = 'Bihar'

console.log(obj)


var obj = {
    user: "harsh",
    age: "22",
    city: "New York"
}

var obj2 = {...obj}

obj2.user = 'Sarthak'

console.log(obj2)


var obj = {
    user: "harsh",
    age: 22,
    city: "bhopal",
    skills: ['js' , 'react' , 'next'] 
}

var {user} = obj

console.log(user)



-------------------------------


import export

app.js
var user = "Harsh"
export default user

script.js
import user from "./app.js";
console.log(user)

ek file k andar ek hi export default