import { useState, useEffect } from "react"
// import maker from "../../../models/maker"
import axios from "axios"
import { useParams } from "react-router-dom"
import MakerDetails from "../Pages/MakerDetails"
// import ProjectDetails from "../Pages/ProjectDetails"
import { Navigate, useNavigate } from "react-router-dom"

const BASE_URL = "/api"


const Crafters = ({ text }) => {
  let navigate = useNavigate()
  let { skillgroup } = useParams()

  const [crafters, setCrafters] = useState([])
  const [skillDetails, setSkillDetails] = useState({})

  const getDescription = async () => {

    const response = await axios.get(`${BASE_URL}/skills/${skillgroup}`)
    // const response = await axios.get(`http://localhost:3001/api/skills/${skillgroup}`)
    let skills = response.data.skill
    console.log(skills)
    setSkillDetails(response.data.skill[0])

  }

  const getCrafters = async () => {
    const response = await axios.get(`${BASE_URL}/makers/skills/${skillgroup}`)
    // const response = await axios.get(`http://localhost:3001/api/makers/skills/${skillgroup}`)
    setCrafters(response.data.craft)
  }

  const getCrafterDetails = async (arg) => {

    navigate(`/makers/${arg._id}`);


  }
  useEffect(() => {
    getDescription()
  }, [])
  useEffect(() => {

    getCrafters()
  }, [])



  if (crafters.length === 0) {
    return (<h1 className="noresults">NO MAKERS OF THIS SPECIALTY YET <br></br>COULD YOU BE THE NEXT?</h1>)
  } else {
    return (

      <div className="description-container">
        <div className="description-title">{skillDetails.skillgroup} </div>
        <div className="description-blurb"><em>Makers in this category generally specialize in:</em></div>
        {skillDetails.subskills?.map((skill) => (
          <div>
            <div className="description-list" key={skill.createdAt} >{skill}</div>
          </div>
        ))}
        <div className="description-blurb">And may work with the following media: </div>
        {skillDetails.media?.map((media) => (
          <div>
            <div className="description-list" key={media.createdAt} >{media}</div>
          </div>
        ))}
        <div className="container">

          {crafters?.map((crafter) => (
            <div className="crafterCard" key={crafter.createdAt} onClick={() => getCrafterDetails(crafter)}>
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