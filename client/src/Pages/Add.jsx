import { useState, useEffect } from 'react'
import axios from 'axios'

const AddMaker = () => {
  const [newMaker, setNewMaker] = useState([])
  const initialState = {
    name: '',
    location: '',
    summary: '',
    skills: [],
    phone: '',
    status: '',
    images: 'placeholder for image upload'
  };
  const [formState, setFormState] = useState(initialState)


  useEffect(() => {
    const getMakers = async () => {
      try {
        let response = await axios.get('http://localhost:3001/api/makers')
        console.log(response.data.makers)
        setNewMaker(response.data.makers)
      } catch (err) {
        console.log(err)
      }
    }
    getMakers()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/api/makers/add', formState)
    setFormState(initialState)
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
    </div>
  )
}

export default AddMaker