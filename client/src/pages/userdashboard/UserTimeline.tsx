import React from 'react';

const UserTimeline = (props) => {
  return (
    <div style={styles.activities}>
      <h2>Latest Activities</h2>
      {props.activities && (
        <ul>
          {props.activities.map((activity) => (
            <li key={activity.text} style={styles.listItem}>
              <div style={styles.timelineItem}>
                <div style={styles.timelinePoint}></div>
                <div style={styles.content}>
                  <p>{activity.text}</p>
                  <time>{activity.time}</time>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const styles = {
  activities: {
    flex: 1,
  },

  listItem: {
    listStyleType: 'none',
    display: 'flex',
    marginBottom: '20px',
  },

  timelineItem: {
    display: 'flex',
    alignItems: 'center',
  },

  timelinePoint: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: '#f45b69',
    marginRight: '10px',
    marginTop: '5px', // Adjust as needed
  },

  content: {
    minWidth: '480px',
    padding: '15px',
    backgroundColor: '#f45b6810',
  },

  '@media screen and (max-width: 768px)': {
    listItem: {
      flexDirection: 'column',
    },

    timelinePoint: {
      marginTop: '0',
    },

    content: {
      minWidth: 'unset',
    },
  },
};

export default UserTimeline;
