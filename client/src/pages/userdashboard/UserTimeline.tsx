// UserTimeline.jsx

import React from 'react';
import './usertimeline.scss';

const UserTimeline = () => {
  // Dummy data for a single patient
  const patientData = {
    id: 1,
    registered: '2023-01-01',
    firstCheckup: '2023-02-15',
    secondCheckup: '2023-03-10',
    drugFree: '2023-04-20',
  };

  return (
    <div className="timeline-container">
      <h1 className="timeline-header">Timeline</h1>
      <div className="timeline">
        <div className="timeline-line"></div>
        <ul>
          <li className="timelineItem">
            <div className="timelinePoint"></div>
            <div className="content registered-box">
              <p>{`Registered: ${patientData.registered}`}</p>
            </div>
          </li>
          <li className="timelineItem">
            <div className="timelinePoint"></div>
            <div className="content first-checkup-box">
              <p>{`First Checkup: ${patientData.firstCheckup}`}</p>
            </div>
          </li>
          <li className="timelineItem">
            <div className="timelinePoint"></div>
            <div className="content second-checkup-box">
              <p>{`Second Checkup: ${patientData.secondCheckup}`}</p>
            </div>
          </li>
          <li className="timelineItem">
            <div className="timelinePoint"></div>
            <div className="content drug-free-box">
              <p>{`Drug-Free: ${patientData.drugFree}`}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserTimeline;
