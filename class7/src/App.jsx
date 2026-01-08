import React, { useState } from 'react'
import Card from './components/Card'

const App = () => {

  const [name, setname] = useState('')
  const [Role, setRole] = useState('')
  const [Imageurl, setImageurl] = useState('')
  const [Description, setDescription] = useState('')

  const [allUsers, setallUsers] = useState([])

  const submithandler = (e) => {
    e.preventDefault()
    
    const oldUsers = [...allUsers]
    oldUsers.push({name, Role, Imageurl, Description})
    setallUsers(oldUsers)

    setname('')
    setRole('')
    setImageurl('')
    setDescription('')
  }

  const deleteHandler = (idx) => {
    const copyusers = [...allUsers]
    copyusers.splice(idx,1)

    setallUsers(copyusers)
  }

  return (
    <div className='h-screen bg-black text-white'>
      <form onSubmit={(e)=>{
        submithandler(e)
      }} className='px-2 py-2 flex flex-wrap'>
        
        <input 
        value = {name}
        onChange = {(e)=>{
          setname(e.target.value)
        }}
        className='border text-xl font-semibold  px-5 rounded m-2 w-[45%]' 
        type="text" 
        placeholder='Enter your name' />
        
        <input 
        value = {Imageurl}
        onChange = {(e)=>{
          setImageurl(e.target.value)
        }}
        className='border text-xl font-semibold px-5 rounded m-2 w-[45%]' 
        type="text" 
        placeholder='Image url' />
        
        <input 
        value = {Role}
        onChange = {(e)=>{
          setRole(e.target.value)
        }}
        className='border text-xl font-semibold px-5 rounded m-2 w-[45%]' 
        type="text" 
        placeholder='Enter your position' />
        
        <input 
        value = {Description}
        onChange = {(e)=>{
          setDescription(e.target.value)
        }}
        className='border text-xl font-semibold px-5 rounded m-2 w-[45%]' 
        type="text" 
        placeholder='Enter Description' />
        
        <button className='bg-emerald-400 text-xl active:scale-95 cursor-pointer font-semibold px-5 py-2 rounded w-[93%] m-2'>Create User</button>
      </form>

      <div className='px-4 py-10 flex flex-wrap gap-5'>
        
         {allUsers.map(function(elem,idx){
          return <Card idx={idx} elem={elem} deleteHandler={deleteHandler}/>
         })}

      </div>
    </div>
  )
}

export default App
