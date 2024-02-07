import logo from './logo.svg';
import './App.css';
import { Viewdata } from './Components/Viewdata';
import { AppBar } from '@mui/material';
import { Appbar } from './Components/Appbar';
import { Route, Router, Routes } from 'react-router-dom';
import { Adddata } from './Components/Adddata';

function App() {
  return (
    <div className="App">
      {/* <Viewdata/> */}
      <Appbar/>
      <Routes>
        <Route path='/'element={<Viewdata/>}/>
        <Route path='/add'element={<Adddata/>}/>
      </Routes>
    </div>
  );
}

export default App;
