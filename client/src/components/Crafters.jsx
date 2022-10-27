import { useState, useEffect } from "react"
// import maker from "../../../models/maker"
import axios from "axios"
import { useParams } from "react-router-dom"
import MakerDetails from "../Pages/MakerDetails"
// import ProjectDetails from "../Pages/ProjectDetails"
import { Navigate, useNavigate } from "react-router-dom"

const BASE_URL = "/api"


const Crafters = ({ text }) => {
  console.log(text)
  let navigate = useNavigate()
  let { skillgroup } = useParams()

  const [crafters, setCrafters] = useState([])

  const getCrafters = async () => {
    console.log(skillgroup)
    const response = await axios.get(`${BASE_URL}/makers/skills/${skillgroup}`)
    // const response = await axios.get(`http://localhost:3001/api/makers/skills/${skillgroup}`)
    console.log(response)
    setCrafters(response.data.craft)
  }

  // const getCrafterDetails = async (arg) => {

  //   navigate(`/makers/${arg._id}`);
  //   <MakerDetails />

  // }

  useEffect(() => {
    getCrafters()
  }, [])


  // onClick={() => getCrafterDetails(crafter._id)
  return (
    <div className="container">

      {crafters?.map((crafter) => (
        <div className="crafterCard" key={crafter._id} >
          <div className="hide">
            <h4>Location: </h4>
            <h4>Skills: {crafter.skills}</h4>
            <h4>Status: {crafter.status}</h4>
            <h4>Contact: {crafter.phone}</h4>
          </div>
          <div className="staticCardInfo">
            <img src={crafter.image} alt=""></img>
            <h1>{crafter.name}  <em><span className="location">{crafter.location}</span></em></h1>
            <h4><em>{crafter.summary}</em></h4>
            <h2 className="rating">Rating: {crafter.rating}</h2>
          </div>

        </div>
      ))}

    </div>

  )
}


export default Crafters