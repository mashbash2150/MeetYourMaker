
import './App.css';
import Nav from "./components/Nav"
import Feed from "./Pages/Feed"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Add from "./Pages/Add"
import MakerCard from "./components/MakerCard"
import Crafters from "./components/Crafters"
import Header from "./components/Header"
import Search from "./Pages/Search"
import Edit from "./Pages/Edit"
import AddProject from "./Pages/AddProject";
import Projects from "./components/Projects"
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
        <Route path="/makers/:id/add" element={<AddProject/>}/>
        <Route path="/makers/:id/projects" element={<Projects/>}/>
        <Route path="/makers/update/:id" element={<Edit/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/makers/skills/:skillgroup" element={<Crafters/>}/>
        
      </Routes>
    </main>
    </div>
  );
}

export default App;
