import About from "../Pages/About"
import { Link, useNavigate } from "react-router-dom"



const Header = () => {


  return (
    <div className="header">

      <div className='title title-text' >Meet Your Maker

      </div>
      <img src="https://github.com/mashbash2150/MeetYourMaker/blob/main/client/Images/Meet%20Your%20Maker%20goldenrod.png?raw=true" alt=''></img>
      <div className="navbar"  >
        <Link to="/" style={{ textDecoration: 'none' }}>Home </Link>
        <Link to="/about" style={{ textDecoration: 'none' }}>About </Link>
        <Link to="/makers" style={{ textDecoration: 'none' }}>Browse Makers </Link>
        <Link to="/makers/add" style={{ textDecoration: 'none' }}>Add Maker </Link>
        <Link to="/search" style={{ textDecoration: 'none' }}>Search </Link>

      </div>
    </div>


  )
}




export default Header