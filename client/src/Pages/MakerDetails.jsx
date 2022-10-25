import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
// import maker from "../../../models/maker"
import axios from "axios"



const MakerDetails = () => {
  let { id } = useParams()
  console.log(id)
  const [makerDetails, setMakerDetails] = useState('')

  const getMakerDetails = async (e) => {
    const response = await axios.get(`http://localhost:3001/api/makers/${id}`)
    console.log(response.data)
    setMakerDetails(response)
  }
  useEffect(() => {
    getMakerDetails()
  }, [])

  return (

    <div className="makersList" >DETAILS
      <h2>Name:{makerDetails.name}</h2>

    </div>

  )
}




export default MakerDetails