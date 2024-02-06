import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarfinal from './components/Navbar';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Movie from './components/Movie';
import Moviedetail from './components/moviedetail';
import TV from './components/tv';
import Tvdetails from './components/tvdetails';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbarfinal />

       
        <Routes>
           <Route path='/' element={<Movie/>}/>
          <Route path='/moviedetail' element={<Moviedetail />} />
          <Route path='/tv' element={<TV/>}/>
          <Route path="/tvdetails" element={<Tvdetails/>}/>
        </Routes>


      </BrowserRouter>
    </>
  );
}

export default App;
