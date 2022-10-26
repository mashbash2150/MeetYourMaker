import { useState, useEffect } from "react"
// import maker from "../../../models/maker"
import axios from "axios"
import MakerDetails from "../Pages/MakerDetails"
import Crafters from "../components/Crafters"
import { Navigate, useNavigate } from "react-router-dom"
// import { $where } from "../../../models/skills"

const Home = () => {

  let navigate = useNavigate()

  const [makerList, setMakerList] = useState([])
  const [skillGroup, setSkillGroup] = useState('')

  const getFeaturedMakers = async () => {
    const response = await axios.get(`http://localhost:3001/api`)
    setMakerList(response.data.makers.slice(0, 4))
  }

  const getMakerDetails = async (arg) => {

    navigate(`/makers/${arg._id}`);

  }

  const getCrafters = async (e) => {
    setSkillGroup(e.target.innerText)
    console.log(e.target.innerText)
    navigate(`/makers/skills/${e.target.innerText.toLowerCase()}`);


  }

  useEffect(() => {
    getFeaturedMakers()
  }, [])

  return (
    <div>
      <header>
        <div className="subheader">Browse by Craft</div>
      </header>
      <div className="browse">
        <div className="skill-tile" onClick={getCrafters}>
          <div className="flex-top">
            <h2 id="construction">Construction</h2>
            <h2 id="digitalmedia">Digital</h2>
            <h2 id="music">Music</h2>
            <h2 id="fineart">Art</h2>
          </div>
          <div className="flex-middle">

            <h2 id="culinary">Culinary</h2>
            <h2 id="engineering">Engineering</h2>
            <h2 id="textiles">Textiles</h2>
            <h2 id="textiles">Nature</h2>

          </div>
          <div className='flex-bottom'>

          </div>



        </div>

      </div>
      <header>
        <div className="subheader">Featured Makers</div>
      </header>
      <div className="feature-container">

        {makerList.map((maker) => (
          <div className="featureCard" key={maker._id} onClick={() => getMakerDetails(maker)}>


            <div className="staticFeatureInfo">
              <div className="banner"><em>Featured!</em>

              </div>
              <img src={maker.image} alt=""></img>
              <div className="name">{maker.name}</div>
              <div className="blurb"><em>{maker.summary}</em></div>

            </div>
            <div className="hide">
              <h4>Location: {maker.location}</h4>
              <h4>Skills: {maker.skills}</h4>
              <h4>Status: {maker.status}</h4>
              <h4>Contact: {maker.phone}</h4>
              <h2 className="rating">Rating: {maker.rating}</h2>

            </div>
          </div>
        ))}

      </div>

    </div>
  )
}

export default Home