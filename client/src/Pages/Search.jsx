
import axios from "axios"
import MakerDetails from "../Pages/MakerDetails"
import { useState, useEffect } from "react"

const Search = () => {

  const [query, setQuery] = useState('')
  const [formState, setFormState] = useState('')
  const [searchReturn, setSearchReturn] = useState([])

  const BASE_URL = "/api"

  const handleChange = (e) => {
    console.log(e)
    setFormState(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(formState)
    // let response = await axios.get(`http://localhost:3001/api/search/${formState}`, formState)
    let response = await axios.get(`/search/${formState}`, formState)
    console.log(response)
    setSearchReturn(response.data.makers)
    setFormState('')

  }

  useEffect(() => {
    handleSubmit()
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <div><em>**  Component under Construction.  Currently only searchable by city **</em></div>
      <input className="input" onChange={handleChange}
        type="text"
        name="search"
        // value={searchQuery}
        placeholder="Search By Location"
      // onChange='
      ></input>
      <button type="search">Search</button>
      {searchReturn.map((maker) => (
        <div className="zoom makerCard" key={maker._id} >
          <div className="hide">
            <h4>Location: </h4>
            <h4>Skills: {maker.skills}</h4>
            <h4>Status: {maker.status}</h4>
            <h4>Contact: {maker.phone}</h4>
          </div>
          <div className="staticCardInfo">
            <img src={maker.image} alt=""></img>
            <h2>{maker.name} <br></br> <em><span className="location">{maker.location}</span></em></h2>
            <h3><em>{maker.summary}</em></h3>
            <h3 className="rating">Rating: {maker.rating}</h3>
          </div>

        </div>

      ))}
    </form>


  )
}


export default Search