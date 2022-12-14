import { useState, useEffect } from "react"

import axios from "axios"

import { Navigate, useNavigate } from "react-router-dom"
const BASE_URL = "/api"

const Home = () => {

  let navigate = useNavigate()

  const [makerList, setMakerList] = useState([])
  const [skillGroup, setSkillGroup] = useState('')

  const getFeaturedMakers = async () => {
    const response = await axios.get('api/')
    setMakerList(response.data.makers.slice(0, 4))
  }

  const getMakerDetails = async (arg) => {

    navigate(`/makers/${arg._id}`);

  }

  const getCrafters = async (e) => {
    setSkillGroup(e.target.innerText)
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
        <div className="skill-tile " onClick={getCrafters}>
          <div className="flex-top">
            <p className="zoom" id="construction">Construction</p>
            <p className="zoom" id="digitalmedia">Digital</p>
            <p className="zoom" id="music">Music</p>
            <p className="zoom" id="fineart">Art</p>
          </div>
          <div className="flex-middle">

            <p className="zoom" id="culinary">Culinary</p>
            <p className="zoom" id="engineering">Engineering</p>
            <p className="zoom" id="textiles">Textiles</p>
            <p className="zoom" id="textiles">Nature</p>

          </div>
          <div className='flex-bottom'>

          </div>



        </div>

      </div>
      <header>
        <div className="subheader feature">Featured Makers</div>
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