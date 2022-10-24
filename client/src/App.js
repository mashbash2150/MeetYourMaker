
import './App.css';
import Nav from "./components/Nav"
import Feed from "./Pages/Feed"
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
     <nav>
      <Nav/>
     </nav>
       <div>
        <MakerCard />
        </div> 
    </main>
    </div>
  );
}

export default App;
