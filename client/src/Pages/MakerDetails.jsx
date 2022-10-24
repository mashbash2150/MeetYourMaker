import { useState, useEffect } from "react"
// import maker from "../../../models/maker"
import axios from "axios"


const MakerDetails = () => {

  const [maker, setMaker] = useState([])


  const getMakerById = async () => {
    const response = await axios.get(`http://localhost:3001/api/makers`)
    console.log(response.data.makers)
    setMaker(response.data.makers)
    console.log(makerList)
  }


  useEffect(() => {
    getMakerById()
  }, [])



  return (

    <div className="makersList">
      {makerList.map((maker) => (
        <div key={maker.id} className="makerCard">
          <p>Maker: {maker.name}</p>
        </div>
      ))}
    </div>

  )
}




export default Feed