
import './App.css';
import Nav from "./components/Nav"
import Feed from "./Pages/Feed"
import Home from "./Pages/Home"
import About from "./Pages/About"
import MakerCard from "./components/MakerCard"
import Header from "./components/Header"
import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom';


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
      </Routes>
    </main>
    </div>
  );
}

export default App;
