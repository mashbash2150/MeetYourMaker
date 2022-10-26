import { useState, useEffect } from "react"
// import maker from "../../../models/maker"
import axios from "axios"
import MakerDetails from "../Pages/MakerDetails"
import { Navigate, useNavigate } from "react-router-dom"



const MakerCard = () => {
  let navigate = useNavigate()

  const [makerList, setMakerList] = useState([])

  const getAllMakers = async () => {
    const response = await axios.get(`http://localhost:3001/api/makers`)
    console.log(response.data.makers)
    setMakerList(response.data.makers)
    console.log(makerList)
  }

  const getMakerDetails = async (arg) => {

    navigate(`/makers/${arg._id}`);
    <MakerDetails />

  }

  useEffect(() => {
    getAllMakers()
  }, [])

  return (
    <div className="container">

      {makerList.map((maker) => (
        <div className="makerCard" key={maker._id} onClick={() => getMakerDetails(maker)}>
          <div className="hide">
            <h4>Location: </h4>
            <h4>Skills: {maker.skills}</h4>
            <h4>Status: {maker.status}</h4>
            <h4>Contact: {maker.phone}</h4>
          </div>
          <div className="staticCardInfo">
            <img src={maker.image} alt=""></img>
            <h1>{maker.name}  <em><span className="location">{maker.location}</span></em></h1>
            <h4><em>{maker.summary}</em></h4>
            <h2 className="rating">Rating: {maker.rating}</h2>
          </div>

        </div>
      ))}

    </div>

  )
}


export default MakerCard