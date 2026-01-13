React Router DOM

- install npm i react-router-dom
- in main.jsx import { BrowserRouter } from "react-router-dom";

- wrap <App/> inside browser router in main.jsx file
- in App.jsx "import { Routes, Route } from "react-router-dom"; "
- make Routes, Route
  <Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/about' element={<About/>} />
  </Routes>

- Use <Link> tag to redirect to any specific route without reloading

ex:- 
          <Link to='/product'>Product Page</Link>


- agar aapko koi dynamic page route karwana ho 

  <Route path='/about/:id' element={<About/>} />

- Nested Routes can be made by writing in this way 
path="/product/men"

- Dynamic Routes can be made by wrting this way
path="/product/:id"

- and you can access id by using useParams() hook

- {Not Found Page}

<Route path='/*' element={<NotFound/>} >