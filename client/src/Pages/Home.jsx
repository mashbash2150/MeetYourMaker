import { useState, useEffect } from "react"
// import maker from "../../../models/maker"
import axios from "axios"
import MakerDetails from "../Pages/MakerDetails"
import { Navigate, useNavigate } from "react-router-dom"

const Home = () => {

  let navigate = useNavigate()

  const [makerList, setMakerList] = useState([])

  const getFeaturedMakers = async () => {
    const response = await axios.get(`http://localhost:3001/api`)
    console.log(response.data.makers)
    setMakerList(response.data.makers.slice(0, 4))
    console.log(makerList)
  }

  const getMakerDetails = async (arg) => {

    navigate(`/makers/${arg._id}`);
    <MakerDetails />

  }

  useEffect(() => {
    getFeaturedMakers()
  }, [])

  return (
    <div>
      <header>
        <div className="subheader">Featured Makers</div>
      </header>
      <div className="feature-container">

        {makerList.map((maker) => (
          <div className="makerCard" key={maker._id} onClick={() => getMakerDetails(maker)}>
            <div className="staticCardInfo">
              <img src={maker.image} alt=""></img>
              <h5><em>Featured!</em></h5>
              <h2>{maker.name}</h2>
              <h4><em>{maker.summary}</em></h4>

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
      <header>
        <div className="subheader">Browse by Craft</div>
      </header>
      <div className="browse">
        <div className="skill-tile">
          <div className="flex-top">
            <h2>Construction<br></br>& Building</h2>
            <h2>Audio/Video</h2>
            <h2>Visual Art</h2>
          </div>
          <div className="flex-bottom">
            <h2>Culinary</h2>
            <h2>Mechanical</h2>
            <h2>Textiles <br></br>& Fashion</h2>
          </div>



        </div>

      </div>
    </div>
  )
}

export default Home