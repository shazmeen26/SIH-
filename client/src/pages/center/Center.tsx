import Single from "../../components/single/Single"
import { singleCenter } from "../../data"
import "./center.scss"

const Product = () => {

  //Fetch data and send to Single Component
  return (
    <div className="product">
       <Single {...singleCenter}/>
    </div>
  )
}

export default Product