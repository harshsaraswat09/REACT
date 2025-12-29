app.js
function hero (){
    console.log("naachoo")
    return 'kese ho'
}

export default hero


script.js
import hero from "./app.js";

console.log(hero())
--------------------------------  

Library

- GSAP (moving animation)
- Lenis (Scrolling smoothness)
- swiper js (sliders)
- three js (3D)
- Reactjs (Frontend & UI)

## Reactjs

- developed by Facebook

React - UI banana
ReactDOM - React and DOM ko connect karna


--------------------------------

var h1 = React.createElement('h1',null,'main hu gian')

var container = document.querySelector('#container')

var root  =  ReactDOM.createRoot(container)

root.render(h1)

