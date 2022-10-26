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
  const [skills, setSkills] = useState('')

  const getMakerDetails = async (e) => {
    const response = await axios.get(`http://localhost:3001/api/makers/${id}`)
    setSkills(response.data.maker.skills)

    setMakerDetails(response.data.maker)
    console.log(typeof (skills))
  }
  useEffect(() => {
    getMakerDetails()
  }, [])

  const deleteMaker = async () => {
    alert("Are you sure you want to delete this entry?")
    const response = await axios.delete(`http://localhost:3001/api/makers/${id}`)
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
      <p><span className="icon2 material-symbols-outlined" onClick={deleteMaker}>
        delete
      </span></p>
      <div className="makerDetails" ><span className="icon3 material-symbols-outlined">
        edit
      </span>
        <h1>{makerDetails.name}  <em>{makerDetails.status}</em> </h1>
        <div className="icon3" onClick={() => updateMaker(makerDetails._id)}></div>
        <h2>{makerDetails.location}</h2>
        <h3>{makerDetails.phone}</h3>
        {/* <ul className="skills-list">
          {skills.toArray.map(skill => (
            <li>{skill}</li>
          ))}

        </ul> */}
        <h3>{makerDetails.summary}</h3>
      </div>
      <div className="image-gallery" >
        <img src={makerDetails.image} alt=''></img>
      </div>
      <div className="hidden">DELETED</div>
    </div>

  )
}




export default MakerDetails