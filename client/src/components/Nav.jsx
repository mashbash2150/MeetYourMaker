import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="dropdown">
      <button className="dropbtn">dropdown</button>
      <div className="dropdown-content">
        <a href="#">Home </a>
        <a href="#">About </a>
        <a href="#">Search </a>
        <a href="#">Add Maker </a>
      </div>
    </div>
  )
}




export default Nav