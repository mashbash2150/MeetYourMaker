import About from "../Pages/About"
import { Link, useNavigate } from "react-router-dom"



const Header = () => {


  return (
    <div className="header">
      <div className='title' >MEET YOUR MAKER </div>

      <div className="dropdown">
        <div className="dropbtn">.<br></br>.<br></br>.</div>
        <div className="dropdown-content">
          <Link to="/">Home </Link>
          <Link to="/about">About </Link>
          <Link to="/makers">All Makers </Link>
          <Link to="/search">Search </Link>
          <Link to="/makers/add">Add Maker </Link>
        </div>
      </div>

    </div>
  )
}




export default Header