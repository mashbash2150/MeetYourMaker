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
        // let response = await axios.get('http://localhost:3001/api/makers')
        let response = await axios.get(`/api/makers`)
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
    axios.post(`/api/makers/add`, formState)
    setFormState(initialState)
    document.querySelector(".hidden").style.opacity = 1.0

  }

  const handleChange = (e) => {
    console.log(e)
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }


  return (
    <div>
      <div className='subheader'>Add Maker</div>
      <div className="form">
        <form className="what" onSubmit={handleSubmit}>
          <label className="label nameField" htmlFor="name">Maker Name: <span className="required">*</span></label>
          <input className="input nameField" type="text" id="name" cols="30" onChange={handleChange} value={formState.name} />
          <label className="label locationField" htmlFor="location">Location:<span className="required">*</span></label>
          <input className="input locationField" type="text" id="location" cols="30" onChange={handleChange} value={formState.location} />
          <label className="label emailField" htmlFor="email">Email Address:<span className="required">*</span></label>
          <input className="input emailField" type="email" id="email" cols="30" onChange={handleChange} value={formState.email} />
          <label className="label skillgroup" htmlFor="skillgroup">Skill Group:<span className="required">*</span></label>
          <select className="input" id="skillgroup" onChange={handleChange} value={formState.skillsgroup}>

            <option className="option" value="construction">Construction & Building</option>
            <option className="option" value="digital">Digital Media</option>
            <option className="option" value="music">Music</option>
            <option className="option" value="art">Fine Art</option>
            <option className="option" value="culinary">Culinary</option>
            <option className="option" value="engineering">Engineering & Mechanics</option>
            <option className="option" value="textiles">Textiles & Fashion</option>
          </select>
          <label className="label skillsField" htmlFor="skills">Skills:</label>
          <input className="input skillsField" type="text" id="skills" cols="30" onChange={handleChange} value={formState.subskills} />

          <label className="label phoneField" htmlFor="phone">Phone Number:</label>
          <input className="input phoneField" type="tel" id="phone" cols="30" onChange={handleChange} value={formState.phone} />
          <label className="label statusField" htmlFor="status">Status:</label>
          <input className="input statusField" type="text" id="status" cols="30" onChange={handleChange} value={formState.status} />
          <label className="label summaryField" htmlFor="summary">Maker Summary</label>
          <textarea className="input summaryField" id="summary" cols="30" rows="10" onChange={handleChange} value={formState.summary}></textarea>
          <button className="submitbutton" type="submit">Submit Maker</button>
        </form>
      </div>
      <div className="hidden">MAKER ADDED</div>
    </div>
  )
}

export default AddMaker