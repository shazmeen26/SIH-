import "./topBox.scss"
import {topDealUsers} from "../../data.tsx"

const TopBox = () => {
  return (
    <div className="topBox">
      <h1>Top Centers</h1>
      <div className="list">
        {topDealUsers.map(user=>(
          <div className="listItem" key={user.id}>
            <div className="user">
              <img src={user.img} alt="" />
              <div className="userTexts">
                <span className="username">{user.username}</span>
                <span className="location">{user.location}</span>
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopBox