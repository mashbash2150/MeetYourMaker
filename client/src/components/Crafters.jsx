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
  const [skillDetails, setSkillDetails] = useState({})

  const getDescription = async () => {
    console.log(skillgroup)
    const response = await axios.get(`http://localhost:3001/api/skills/${skillgroup}`)
    // const response = await axios.get(`http://localhost:3001/api/makers/skills/${skillgroup}`)
    console.log(response.data.skill)
    setSkillDetails(response.data.skill[0])
    console.log(skillDetails)
  }

  const getCrafters = async () => {
    console.log(skillgroup)
    const response = await axios.get(`http://localhost:3001/api/makers/skills/${skillgroup}`)
    // const response = await axios.get(`http://localhost:3001/api/makers/skills/${skillgroup}`)
    console.log(response)
    setCrafters(response.data.craft)
  }

  useEffect(() => {
    getCrafters()
  }, [])

  useEffect(() => {
    getDescription()
  }, [])

  if (crafters.length === 0) {
    return (<h1 className="noresults">NO MAKERS OF THIS SPECIALTY YET <br></br>COULD YOU BE THE NEXT?</h1>)
  } else {
    return (

      <div>
        <div>{skillDetails.skillgroup} </div>
        {skillDetails.subskills?.map((skill) => (
          <div>
            <div>{skill}</div>
          </div>
        ))}

        <div className="craftercontainer">

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
                <h2>{crafter.name}  <em><span className="location">{crafter.location}</span></em></h2>
                <h3><em>{crafter.summary}</em></h3>
                <h3 className="rating">Rating: {crafter.rating}</h3>
              </div>

            </div>
          ))}
        </div>
      </div>

    )
  }
}


export default Crafters