import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom"
// import maker from '../../../models/maker'

const BASE_URL = "/api"

const AddProject = () => {
  let { id } = useParams()
  const [newProject, setNewProject] = useState({})
  const [skillList, setSkillList] = useState([])
  const initialState = {
    title: '',
    description: '',
    maker: id,
    image: ''
  };
  const [formState, setFormState] = useState(initialState)
  const [inputValue, setInputValue] = useState("")

  // useEffect(() => {
  //   const getMakers = async () => {
  //     try {
  //       let response = await axios.get('http://localhost:3001/api/makers')
  //       // let response = await axios.get(`/makers`)
  //       console.log(response.data.makers)
  //       setNewMaker(response.data.makers)
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }
  //   getMakers()
  // }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(id)
    axios.post(`http://localhost:3001/api/makers/${id}/add`, formState)
    setFormState(initialState)
    document.querySelector(".hidden").style.opacity = 1.0
  }



  const handleChange = (e) => {
    console.log(e)
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }


  return (
    <div>
      <div className='subheader'>Add Project</div>
      <div className="form">
        <form className="what" onSubmit={handleSubmit}>
          <label className="label nameField" htmlFor="title">Project Name: <span className="required">*</span></label>
          <input className="input" type="text" id="title" cols="30" onChange={handleChange} value={formState.title} />
          <label className="label descField" htmlFor="description">Description:</label>
          <input className="input descField" type="text" id="description" cols="30" onChange={handleChange} value={formState.description} />
          <label className="label imageField" htmlFor="imageurl">Image URL:</label>
          <input className="input imageField" type="text" id="image" cols="30" onChange={handleChange} value={formState.image} />

          <button onClick={handleSubmit} className="input submitbutton" type="submit">Submit Project</button>

          <div>

          </div>
        </form>

      </div>
      <div className="hidden">PROJECT ADDED</div>
    </div>
  )
}

export default AddProject