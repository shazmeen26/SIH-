import Single from "../../components/single/Single"
import { singlePatient } from "../../data"
import "./patient.scss"

const Patient = () => {

  //Fetch data and send to Single Component
  
  return (
    <div className="user">
      <Single {...singlePatient}/>
    </div>
  )
}

export default Patient