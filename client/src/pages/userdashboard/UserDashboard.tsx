import React from 'react';
import UserMenu from './UserMenu';
import Chatbot from './ChatBot';
import UserIntro from './UserIntro';
import LeafletMap from './LeafletMap'
import Faq from './Faq';
import UserTimeline from './UserTimeline';
import AppointmentBooking from './AppointmentBooking';
import Email from './Email';
import Footer from './UserFooter';

const UserDashboard = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div style={{ display: 'flex' }}>
        <UserMenu />
        
        <div style={{ flex: 1, padding: '20px' }}>
          {/* Place your components here */}
          
          <UserIntro />
          <LeafletMap/>
          <UserTimeline/>
          <AppointmentBooking/>
          <Faq/>
          <Chatbot />
          {/* Add other components as needed */}
          <Footer/>
        </div>
      </div>

      
    </div>
  );
}

export default UserDashboard;
