import { singleUser } from "../data";
import "../styles/singleuser.scss";
import Single from "./Single";

const SingleUser = () => {
  
  // Fetch data and send to Single component
  return (
    <div className="singleUser">
      <Single {...singleUser}/>
      
    </div>
  )
}

export default SingleUser
