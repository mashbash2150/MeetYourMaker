import { useState, useEffect } from 'react'
import axios from 'axios'

const BASE_URL = "/api"

const AddMaker = () => {
  const [newMaker, setNewMaker] = useState([])
  const [skillList, setSkillList] = useState([])
  const initialState = {
    name: '',
    city: '',
    state: '',
    email: '',
    skillgroup: '',
    subskills: [],
    summary: '',
    phone: '',
    status: '',
    image: ''
  };
  const [formState, setFormState] = useState(initialState)
  const [inputValue, setInputValue] = useState("")

  useEffect(() => {
    const getMakers = async () => {
      try {
        // let response = await axios.get('http://localhost:3001/api/makers')
        let response = await axios.get(`${BASE_URL}/makers`)
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
    console.log(formState)
    axios.post(`${BASE_URL}/makers/add`, formState)
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
          <input className="input" type="text" id="name" cols="30" onChange={handleChange} />
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


          <label className="label phoneField" htmlFor="phone">Phone Number:</label>
          <input className="input phoneField" type="tel" id="phone" cols="30" onChange={handleChange} value={formState.phone} />
          <label className="label imageField" htmlFor="imageurl">Image URL:</label>
          <input className="input imageField" type="text" id="image" cols="30" onChange={handleChange} value={formState.image} />
          <label className="label statusField" htmlFor="status">Status:</label>
          <input className="input statusField" type="text" id="status" cols="30" onChange={handleChange} value={formState.status} />
          <label className="label summaryField" htmlFor="summary">Maker Summary</label>
          <textarea className=" summaryField" id="summary" cols="30" rows="10" onChange={handleChange} value={formState.summary}></textarea>

          <label className="label skillsField" htmlFor="subskills">Skills:</label>
          <input className="input skillsField" type="text" id="subskills" cols="30" onChange={handleChange} value={formState.subskills} />
          <button className="submitbutton" type="submit">Submit Maker</button>

          <div>

          </div>
        </form>

      </div>
      <div className="hidden">MAKER ADDED</div>
    </div>
  )
}

export default AddMaker