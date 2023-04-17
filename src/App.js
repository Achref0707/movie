import './App.css';
import Cover from './Componts/Cover';
import Movieliste from './Componts/Movieliste';
import Navb from './Componts/Navb';
import moviesData from './Componts/assets/data/Moviedata'
function App() {
return (
    <div>
      <Navb/>
      <Cover/>
      <Movieliste data={moviesData}/> 
    </div>
  );
}

export default App;
