
import './App.css';
import Nav from "./components/Nav"
import Feed from "./Pages/Feed"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Add from "./Pages/Add"
import MakerCard from "./components/MakerCard"
import Header from "./components/Header"
import Search from "./Pages/Search"
import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom';
import MakerDetails from './Pages/MakerDetails';


function App() {
  return (
    <div>
    <header>
        <Header/>
    </header>
    <main>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/makers" element={<MakerCard/>}/>
        <Route path="/makers/add" element={<Add/>}/>
        <Route path="/makers/:id" element={<MakerDetails/>}/>
        <Route path="/search" element={<Search/>}/>
      </Routes>
    </main>
    </div>
  );
}

export default App;
