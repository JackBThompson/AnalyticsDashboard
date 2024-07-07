import { singleProduct } from "../data";
import "../styles/singleproduct.scss";
import Single from "./Single";


const SingleProduct = () => {

  // Fetch data and send to Single Component
  return (
    <div className="singleProduct">

      <Single {...singleProduct} />
      
    </div>
  )
}

export default SingleProduct
