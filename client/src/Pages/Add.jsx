import { useState, useEffect } from 'react'
import axios from 'axios'

const AddMaker = () => {
  const [newMaker, setNewMaker] = useState([])
  const initialState = {
    name: '',
    location: '',
    summary: ''
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

    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Maker Name:</label>
      <input type="text" id="name" onChange={handleChange} value={formState.name} />
      <label htmlFor="location">Location:</label>
      <input type="text" id="location" onChange={handleChange} value={formState.location} />
      <label htmlFor="summary">Maker Summary</label>
      <textarea id="summary" cols="30" rows="10" onChange={handleChange} value={formState.summary}></textarea>
      <button type="submit">Submit Maker</button>
    </form>
  )
}

export default AddMaker