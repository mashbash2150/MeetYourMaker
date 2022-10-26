import About from "../Pages/About"
import { Link, useNavigate } from "react-router-dom"



const Header = () => {


  return (
    <div className="header">
      <div className='title' > LOGO WILL GO HERE
        <img src="https://www.canva.com/design/DAFQE0MGvL0/3vu5APZe6s1vXLx6HQ1jcw/view?utm_content=DAFQE0MGvL0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" alt=""></img>
      </div>

      <div className="dropdown">
        <div className="dropbtn"><span className="material-symbols-outlined">
          menu
        </span></div>
        <div className="dropdown-content">
          <Link to="/">Home </Link>
          <Link to="/about">About </Link>
          <Link to="/makers">Browse Makers </Link>
          <Link to="/projects">Browse Projects </Link>
          <Link to="/search">Search </Link>
          <Link to="/makers/add">Add Maker </Link>

        </div>
      </div>

    </div>
  )
}




export default Header