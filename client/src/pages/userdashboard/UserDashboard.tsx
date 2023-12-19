import UserNav from "./UserNav"
import Chatbot from "./ChatBot"
import UserMenu from "./UserMenu"
import UserIntro from "./UserIntro"
import EmergencyContacts from "./UserFooter"

const UserDashboard = () => {
  return (
    <div className="main">
          
          <UserMenu/>
          <Chatbot/>
          
          <EmergencyContacts/>
          
        </div>
        
      
  )
}

export default UserDashboard
