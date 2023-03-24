import './App.css';
import {Route,Routes} from 'react-router-dom';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Main from './pages/Main';
import Skills from './pages/Skills';
import Nav from './components/Nav';
import './index.css';




function App() {
<Nav />
  return (
    <div className="App">
  <Nav />
  <Routes>
    <Route path="/" element={<Main/>} />
<Route path="/experience"  element={<Experience/>}/>
<Route path="/education"  element={<Education/>}/>
<Route path="/skills"  element={<Skills/>}  />
 </Routes>      


    </div>
  );
}

export default App;
