import React from 'react'
import Moviecard from './Moviecard'

function Movieliste({data,search,rate}) {
  console.log("list",data)
  return (
   <div className='moviel'>  
     <h1 style={{fontFamily:"cursive",marginTop:"5%",marginBottom:"3%"}}>Recommended for you</h1>
     <div className='cards'>
        {data.filter((el)=>el.name.toUpperCase().includes(search.toUpperCase()) && el.rating>=rate).map((el)=><p>{el.name}</p>)}
     </div>
    </div>
  )
}

export default Movieliste
