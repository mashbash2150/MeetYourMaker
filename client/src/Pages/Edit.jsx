import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import axios from 'axios'

const UpdateMaker = ({ }) => {
  let { id } = useParams()
  console.log(id)
  const [updateMaker, setUpdateMaker] = useState([])
  const [makerDetails, setMakerDetails] = useState({})

  const getMakerDetails = async (e) => {
    const response = await axios.get(`http://localhost:3001/api/makers/update/${id}`)
    setMakerDetails(response.data.maker)

  }
  let nametest = makerDetails.name
  console.log(typeof (nametest))

  let initialState = {
    name: nametest,
    location: makerDetails.location,
    summary: makerDetails.summary,
    skills: [],
    phone: '',
    status: '',
    images: 'placeholder for image upload'
  }

  useEffect(() => {
    getMakerDetails()
  }, [])


  const [formState, setFormState] = useState(initialState)




  const handleSubmit = (e) => {
    e.preventDefault()
    axios.put(`http://localhost:3001/api/makers/update/${id}`, formState)
    document.querySelector(".hidden").style.opacity = 1.0

  }

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }


  return (
    <div>
      <div className='subheader'>Add Maker</div>
      <div className="form">
        <form className="what" onSubmit={handleSubmit}>
          <label className="nameField" htmlFor="name">Maker Name:</label>
          <input className="input nameField" type="text" id="name" cols="30" onChange={handleChange} value={formState.name} />
          <label className="locationField" htmlFor="location">Location:</label>
          <input className="input locationField" type="text" id="location" cols="30" onChange={handleChange} value={formState.location} />
          <label className="skillsField" htmlFor="skills">Skills:</label>
          <input className="input skillsField" type="text" id="skills" cols="30" onChange={handleChange} value={formState.skills} />
          <label className="phoneField" htmlFor="phone">Phone Number:</label>
          <input className="input phoneField" type="text" id="phone" cols="30" onChange={handleChange} value={formState.phone} />
          <label className="statusField" htmlFor="status">Status:</label>
          <input className="input statusField" type="text" id="status" cols="30" onChange={handleChange} value={formState.status} />
          <label className="summaryField" htmlFor="summary">Maker Summary</label>
          <textarea className="input summaryField" id="summary" cols="30" rows="10" onChange={handleChange} value={formState.summary}></textarea>
          <button className="submitbutton" type="submit">Submit Maker</button>
        </form>
      </div>
      <div className="hidden">MAKER UPDATED</div>
    </div>
  )
}

export default UpdateMaker