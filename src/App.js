import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Menu from './components/Menu';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
  <BrowserRouter>
  <Header />
  <Routes>
    <Route index element = { <Home />}></Route>
    <Route  path='/about' element={<About/>}></Route>
    <Route  path='/menu' element={<Menu/>}></Route>
    <Route  path='/contact' element={<Contact/>}></Route>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
