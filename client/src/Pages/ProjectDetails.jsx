import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
// import maker from "../../../models/maker"
import axios from "axios"
import Edit from "./Edit"
import { Navigate, useNavigate } from "react-router-dom"



const ProjectDetails = () => {
  let navigate = useNavigate()
  let { id } = useParams()
  console.log(id)
  const [projectDetails, setProjectDetails] = useState('')
  const [skills, setSkills] = useState('')

  const getProjectDetails = async (e) => {
    const response = await axios.get(`http://localhost:3001/api/projects/${id}`)
    setSkills(response.data.maker.skills)
    //wtf is going on here
    setProjectDetails(response.data.project)
    console.log(typeof (skills))
  }
  useEffect(() => {
    getProjectDetails()
  }, [])

  const deleteProject = async () => {
    alert("Are you sure you want to delete this entry?")
    const response = await axios.delete(`http://localhost:3001/api/project/${id}`)
    setProjectDetails("")
    document.querySelector(".hidden").style.opacity = 1.0
    document.querySelector(".icon2").style.opacity = 0.0
    document.querySelector(".icon3").style.opacity = 0.0

  }

  const updateProject = (arg) => {
    console.log(projectDetails._id);
    navigate(`/projects/update/${arg}`);
    <Edit id={projectDetails._id} />
  }

  return (
    <div className="detailsbody">
      <p><span className="icon2 material-symbols-outlined" onClick={deleteProject}>
        delete
      </span></p>
      <div className="projectDetails" ><span className="icon3 material-symbols-outlined">
        edit
      </span>
        <h1>{projectDetails.name}  <em>{projectDetails.status}</em> </h1>
        <div className="icon3" onClick={() => updateProject(projectDetails._id)}></div>
        <h2>{projectDetails.location}</h2>
        <h3>{projectDetails.phone}</h3>
        {/* <ul className="skills-list">
          {skills.toArray.map(skill => (
            <li>{skill}</li>
          ))}

        </ul> */}
        <h3>{projectDetails.summary}</h3>
      </div>
      <div className="image-gallery" >
        <img src={projectDetails.image} alt=''></img>
      </div>
      <div className="hidden">DELETED</div>
    </div>

  )
}




export default ProjectDetails