localStorage.clear() - to clean local storage

localStorage.setItem("key" , "Value") - to add new item

localStorage.getItem("key") - to get any item

localStorage.removeItem("key") - to remove any item


access token
 Refresh token


-> local storage mein data save hota hai STRING mein
aur jab hum usko extract karte hai toh vo hota bhi hai

STRING mein

--------------------------------
JSON.stringfy : Array/obj -> string

JSON.parse : string -> Array/obj

--------------------------------

var obj = {
    user:'Harsh',
    age:30
}

localStorage.setItem('obj',JSON.stringfy(obj))

--------------------------------

const obj = localStorage.getItem('obj')

var realObj = JSON.parse(obj)

console.log(realObj)