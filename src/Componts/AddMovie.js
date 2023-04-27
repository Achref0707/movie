import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const AddMovie = ({setData,data}) => {
  
    const [name,setName]=useState("")
    const handleClick=()=>setData([...data,{id:Math.random(),name}])
  return (
    <div>
      <input type="text" onChange={(e)=>setName(e.target.value)}/>
      <Button onClick={handleClick}>Add</Button>
    </div>
  )
}

export default AddMovie
