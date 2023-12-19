// AdminDashboard.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../home/Home';
import Patients from '../patients/Patients';
import Centers from '../centers/Centers';
import Patient from '../patient/Patient';
import Product from '../center/Center';
import AdminMap from '../adminmap/AdminMap';

const AdminDashboard = () => {
  return (
    <div>
      {/* Other components or layout for AdminDashboard */}
      <Outlet>
        <Home />
        <Patients />
        <Centers />
        <Patient />
        <Product />
        <AdminMap />
      </Outlet>
    </div>
  );
};

export default AdminDashboard;
