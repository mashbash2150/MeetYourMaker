import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import axios from 'axios'

const BASE_URL = "/api"

const UpdateMaker = ({ }) => {
  let { id } = useParams()
  console.log(id)
  const [updateMaker, setUpdateMaker] = useState([])
  const [makerDetails, setMakerDetails] = useState({})
  const [formState, setFormState] = useState({})

  const getMakerDetails = async (e) => {
    const response = await axios.get(`http://localhost:3001/api/makers/update/${id}`)
    setMakerDetails(response.data.maker)
    setFormState({
      name: response.data.maker.name,
      city: response.data.maker.city,
      state: response.data.maker.state,
      email: response.data.maker.email,
      skillgroup: response.data.maker.skillgroup,
      subskills: response.data.maker.subskills,
      phone: response.data.maker.phone,
      status: response.data.maker.status,
      image: response.data.maker.image,
    })

  }
  // let nametest = makerDetails.name

  // let initialState = {
  //   name: nametest,
  //   location: makerDetails.location,
  //   summary: makerDetails.summary,
  //   skills: [],
  //   phone: '',
  //   status: '',
  //   images: 'placeholder for image upload'
  // }

  useEffect(() => {
    getMakerDetails()
  }, [])







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
      <div className='subheader'>Update Maker</div>
      <div className="form">
        <form className="what" onSubmit={handleSubmit}>
          <label className="label nameField" htmlFor="name">Maker Name: <span className="required">*</span></label>
          <input className="input nameField" type="text" id="name" cols="30" onChange={handleChange} value={formState.name} />
          <label className="label cityField" htmlFor="city">City:<span className="required">*</span></label>
          <input className="input cityField" type="text" id="city" cols="30" onChange={handleChange} value={formState.city} />
          <label className="label stateField" htmlFor="state">State:<span className="required">*</span></label>
          <input className="input stateField" type="text" id="state" cols="30" onChange={handleChange} value={formState.state} />
          <label className="label emailField" htmlFor="email">Email Address:<span className="required">*</span></label>
          <input className="input emailField" type="email" id="email" cols="30" onChange={handleChange} value={formState.email} />
          <label className="label skillgroup" htmlFor="skillgroup">Skill Group:<span className="required">*</span></label>
          <select className="input" id="skillgroup" onChange={handleChange} value={formState.skillgroup}>

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
          <label className="label imageField" htmlFor="imageurl">Image URL:</label>
          <input className="input imageField" type="text" id="image" cols="30" onChange={handleChange} value={formState.image} />
          <label className="label summaryField" htmlFor="summary">Maker Summary</label>
          <textarea className="input summaryField" id="summary" cols="30" rows="10" onChange={handleChange} value={formState.summary}></textarea>
          <button className="submitbutton" type="submit">Submit Maker</button>
        </form>
      </div>
      <div className="hidden">MAKER UPDATED</div>
    </div>
  )
}

export default UpdateMaker