import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
// import maker from "../../../models/maker"
import axios from "axios"
import Edit from "./Edit"
import { Navigate, useNavigate } from "react-router-dom"



const MakerDetails = () => {
  let navigate = useNavigate()
  let { id } = useParams()
  console.log(id)
  const [makerDetails, setMakerDetails] = useState('')
  const [skills, setSkills] = useState([])

  const getMakerDetails = async (e) => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}makers/${id}`)
    console.log(response.data.maker)
    setSkills(response.data.maker.subskills)

    setMakerDetails(response.data.maker)

  }
  useEffect(() => {
    getMakerDetails()
  }, [])

  const deleteMaker = async () => {
    alert("Are you sure you want to delete this entry?")
    const response = await axios.delete(`${process.env.REACT_APP_BASE_URL}makers/${id}`)
    setMakerDetails("")
    document.querySelector(".hidden").style.opacity = 1.0
    document.querySelector(".icon2").style.opacity = 0.0
    document.querySelector(".icon3").style.opacity = 0.0

  }

  const updateMaker = (arg) => {
    console.log(makerDetails._id);
    navigate(`/makers/update/${arg}`);
    <Edit id={makerDetails._id} />
  }

  return (
    <div className="detailsbody">

      <div className="makerDetails" >
        <div><span className="details-header">{makerDetails.name}</span> - <em><span className="details-location">{makerDetails.location}</span></em></div>

        <h2> <span className="status">{makerDetails.status}</span></h2>

        <h3>{makerDetails.summary}</h3>
        <div className="skills-list">
          {skills?.map((skill) => (
            <h4>{skill}</h4>
          ))}</div>
        <div className="contact-details">Contact info:
          <div>{makerDetails.email}</div>
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

      <div className="hidden">DELETED</div>
    </div>

  )
}




export default MakerDetails