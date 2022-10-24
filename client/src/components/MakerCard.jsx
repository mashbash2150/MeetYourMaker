import { useState, useEffect } from "react"
// import maker from "../../../models/maker"
import axios from "axios"



const MakerCard = () => {

  const [makerList, setMakerList] = useState([])

  const getAllMakers = async () => {
    const response = await axios.get(`http://localhost:3001/api/makers`)
    console.log(response.data.makers)
    setMakerList(response.data.makers)
    console.log(makerList)
  }

  useEffect(() => {
    getAllMakers()
  }, [])

  return (
    <div className="container">

      {makerList.map((maker) => (
        <div className="makerCard" key={maker.id} >
          <img src={maker.image} alt=""></img>
          <h2>{maker.name}</h2>
          <h4><em>{maker.summary}</em></h4>
          <h4>Location: {maker.location}</h4>
          <h4>Skills: {maker.skills}</h4>
          <h4>Status: {maker.status}</h4>

          <h4>Contact: {maker.phone}</h4>
          <h2>Rating: {maker.rating}</h2>
        </div>
      ))}

    </div>

  )
}


export default MakerCard