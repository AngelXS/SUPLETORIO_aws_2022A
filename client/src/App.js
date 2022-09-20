import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './view/Login';
import Bright from './view/Bright';
import Detail from './view/Detail';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Login/>}/>
            <Route exact path="/bright_ideas/:id" element={<Bright/>}/>
            <Route exact path="/user_profile/:alias" element={<Detail/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}
export default App;
