
import './App.scss';
import HomePage from '../HomePage/HomePage';
import musiques from '../datas/musiques';
import jeuxvideos from '../datas/jeuxvideo';
import { Routes, Route} from 'react-router-dom';
import Calendrier from '../Calendrier/Calendrier';
import Error404 from '../Error404/Error404';
function App() {
  return (
    <div className="App">
      
      <Routes>
              <Route path ="/" element ={<HomePage/>}/>
              <Route path ="/Musique" element ={<Calendrier datas = {musiques}/> }  />     
              <Route path ="/JeuxVideo" element ={<Calendrier datas = {jeuxvideos}/>}/>
              <Route path = "*" element ={<Error404/>}/>
      </Routes> 
    </div>
  );
}

export default App;
