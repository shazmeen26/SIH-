import React from 'react';
import './cards.scss';
import { Link } from 'react-router-dom';

const Card = (props) => {
  // Use specific links for each card
  const patientsLink = '/patient_details'; // Update with your actual route
  const centersLink = '/center_details'; // Update with your actual route
  
  return (
    <div className='cards'>
      <div className="card text-center shadow">
        <div className="overflow">
          <img src={props.imgsrc} alt="Image1" className='card-img-top' />
        </div>
        <div className="card-body text-dark">
          <h4 className="card-title">{props.title}</h4>
          <p className="card-text text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            modi possimus maxime quam eum dolor a aut officiis, doloremque
            incidunt.
          </p>
          {/* Use specific links for each card */}
          {props.title === 'Patients' && <Link to={patientsLink}><button className='btn btn-outline-success'>View</button></Link>}
          {props.title === 'Centers' && <Link to={centersLink}><button className='btn btn-outline-success'>View</button></Link>}
        </div>
      </div>
    </div>
  );
};

export default Card;
