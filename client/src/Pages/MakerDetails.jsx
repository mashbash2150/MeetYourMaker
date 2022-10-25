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
    console.log(response.data.maker.skills)
    setMakerDetails(response.data.maker)
  }
  useEffect(() => {
    getMakerDetails()
  }, [])

  const deleteMaker = async () => {
    alert("are you sure you want to delete?")
    const response = await axios.delete(`http://localhost:3001/api/makers/${id}`)
    alert(Response.data)
    setMakerDetails("")
    document.querySelector(".hidden").style.opacity = 1.0
    document.querySelectorAll(".icon").style.opacity = 0.0

  }

  return (
    <div className="detailsbody">
      <p><span className="icon material-symbols-outlined" onClick={deleteMaker}>
        delete
      </span></p>
      <div className="makerDetails">
        <h1>{makerDetails.name}  <em>{makerDetails.status}</em>     <span className="icon material-symbols-outlined">
          edit
        </span></h1>
        <h2>{makerDetails.location}</h2>
        <h3>{makerDetails.phone}</h3>
        <h3>{makerDetails.skills}</h3>
        <h3>{makerDetails.summary}</h3>
      </div>
      <div className="image-gallery" >
        <img src={makerDetails.image} alt=''></img>
      </div>
      <div className="hidden">DELETED</div>
    </div>

  )
}




export default MakerDetails