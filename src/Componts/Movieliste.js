import React from 'react'
import Moviecard from './Moviecard'

function Movieliste({data}) {
  return (
   <div className='moviel'>  
     <h1 style={{fontFamily:"cursive",marginTop:"5%",marginBottom:"3%"}}>Recommended for you</h1>
     <div className='cards'>
        {data.map((el)=><Moviecard el={el}/>)}
     </div>
    </div>
  )
}

export default Movieliste
