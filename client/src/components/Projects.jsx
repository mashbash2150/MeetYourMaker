import { useState, useEffect } from "react"
// import maker from "../../../models/maker"
import axios from "axios"
import { useParams } from "react-router-dom"
import MakerDetails from "../Pages/MakerDetails"
// import ProjectDetails from "../Pages/ProjectDetails"
import { Navigate, useNavigate } from "react-router-dom"

const BASE_URL = "/api"


const Projects = ({ text }) => {
  console.log(text)
  let navigate = useNavigate()
  let { id } = useParams()
  let { pid } = useParams()

  const [projects, setProjects] = useState([])
  const [deleted, setDeleted] = useState(false)
  // const [skillDetails, setSkillDetails] = useState({})

  const getProjects = async () => {

    // const response = await axios.get(`/skills/${skillgroup}`)
    const response = await axios.get(`http://localhost:3001/api/makers/${id}/projects`)
    console.log(response.data.projects)
    setProjects(response.data.projects)

  }

  const addProject = () => {

    navigate(`/makers/${id}/add`);

    // <AddProject id={makerDetails._id} />
  }

  const deleteProject = async (arg) => {
    alert("Are you sure you want to delete this entry?")
    const response = await axios.delete(`http://localhost:3001/api/makers/${id}/projects/${arg}`)
    setDeleted(true)
    navigate(-1)




  }

  useEffect(() => {
    getProjects()
  }, [deleted])

  // if (crafters.length === 0) {
  //   return (<h1 className="noresults">NO MAKERS OF THIS SPECIALTY YET <br></br>COULD YOU BE THE NEXT?</h1>)
  // } else {
  return (

    <div>
      <div className="button-container">
        <button onClick={addProject}>Add New Project</button></div>
      <div className='project-container'>


        {projects?.map((project) => (
          <div key={project._id} className="project-details">
            <div className="details-header">{project.title}</div>
            <div className="project-content">
              <div className="project-image"><img src={project.image} alt=''></img></div>
              <div className="status">{project.description}</div></div>
            <div><span className="icon material-symbols-outlined" onClick={() => deleteProject(project._id)}>
              delete
            </span></div>
          </div>))}

      </div>
    </div>
  )


}


export default Projects