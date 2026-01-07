import React from 'react'
import Men from './components/Men'
import Women from './components/Women'

const App = () => {

  function btnclick(){
    console.log("Button Clicked")
  }

  return (
    <div>
      <button onClick={btnclick} className=' active:scale-95 text-white bg-emerald-500 px-6 py-3 w-fit rounded font-bold m-2'>
        Click to Download
      </button>
    </div>
  )
}

export default App
