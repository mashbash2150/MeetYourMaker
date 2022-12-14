import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import axios from "axios"
import Edit from "./Edit"
import { Navigate, useNavigate } from "react-router-dom"

const BASE_URL = "/api"

const MakerDetails = () => {

  let navigate = useNavigate()
  let { id } = useParams()
  console.log(id)
  const [makerDetails, setMakerDetails] = useState('')
  const [skills, setSkills] = useState([])

  const getMakerDetails = async (e) => {
    // const response = await axios.get(`http://localhost:3001/api/makers/${id}`)
    const response = await axios.get(`${BASE_URL}/makers/${id}`)
    setSkills(response.data.maker.subskills)

    setMakerDetails(response.data.maker)

  }
  useEffect(() => {
    getMakerDetails()
  }, [])

  const deleteMaker = async () => {
    alert("Are you sure you want to delete this entry?")
    // const response = await axios.delete(`http://localhost:3001/api/makers/${id}`)
    const response = await axios.delete(`${BASE_URL}/makers/${id}`)
    setMakerDetails("")
    navigate(-1)
  }

  const updateMaker = (arg) => {
    navigate(`/makers/update/${arg}`);
    <Edit id={makerDetails._id} />
  }

  const seeProjects = (arg) => {
    navigate(`/makers/${arg}/projects`);
  }

  return (
    <div className="detailsbody">

      <div className="makerDetails" >
        <div><span className="details-header">{makerDetails.name}</span> - <em><span className="details-location">{makerDetails.city}, {makerDetails.state}</span></em></div>

        <h2> <span className="status">{makerDetails.status}</span></h2>

        <h4>{makerDetails.summary}</h4>
        <div className="skills-list">
          {skills?.map((skill) => (
            <h4>{skill}</h4>
          ))}</div>

        <button className="projectbutton" onClick={() => seeProjects(makerDetails._id)}>See This Maker's Projects</button>
        <div className="contact-details">Contact info:
          <div>{makerDetails.email}
            <a href="mailto:someone@yoursite.com" > <span className="icon material-symbols-outlined">
              mail
            </span></a>  </div>
          <div>{makerDetails.phone}</div>
        </div>

      </div>
      <div><span className="icon material-symbols-outlined" onClick={() => updateMaker(makerDetails._id)}>
        edit
      </span> <span className="icon material-symbols-outlined" onClick={deleteMaker}>
          delete
        </span></div>
      <div className="details-image" >
        <img src={makerDetails.image} alt=''></img>
      </div>


      <div className="deleted">DELETED</div>
    </div>

  )
}




export default MakerDetails