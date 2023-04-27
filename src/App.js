import { useState } from 'react';
import './App.css';
import Cover from './Componts/Cover';
import Movieliste from './Componts/Movieliste';
import Navb from './Componts/Navb';
import moviesData from './Componts/assets/data/Moviedata'
import AddMovie from './Componts/AddMovie';
function App() {
  const [search,setSearch]=useState("")
  const [rate,setRate]=useState(0)

  const [data,setData]=useState(moviesData)
  console.log(data)
return (
    <div>
      <Navb setSearch={setSearch} setRate={setRate} />
      <Cover/>
      <Movieliste search={search} data={data} rate={rate}/> 
      <AddMovie setData={setData} data={data}/>
    </div>
  );
}

export default App;
