import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./topBox.scss";

interface Admin {
  _id: string;
  name: string;
  img: string;
  center_name: string;
  // Add other fields as needed
}
const TopBox: React.FC = () => {
  const [topDealUsers, setTopDealUsers] = useState<Admin[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const adminResponse = await axios.get('http://localhost:8000/admindata');
        const { admins } = adminResponse.data;
        setTopDealUsers(admins);
      } catch (error) {
        console.error('Error fetching admin data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="topBox">
      <h1>Top Centers</h1>
      <div className="list">
        {topDealUsers.map((user, index) => (
          <div className="listItem" key={user._id}>
            <div className="user">
              <a>{index + 1}</a>
              <div className="userTexts">
                <span className="username">{user.center_name}</span>
                <span className="location">{user.name}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBox;