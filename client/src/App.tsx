import Home from "./pages/home/Home";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Centers from "./pages/centers/Centers";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import PatientLogin from "./pages/registration/patientlogin/PatientLogin";
import Patient_register from "./pages/registration/register/Patient_register";
import "./styles/global.scss";
import Patient from "./pages/patient/Patient";
import Product from "./pages/center/Center";
import Patients from "./pages/patients/Patients";
import AdminLogin from "./pages/registration/adminlogin/AdminLogin";
import EmployeeLogin from "./pages/registration/employeelogin/EmployeeLogin";
import LoginLanding from "./pages/registration/landing/LoginLanding";
import RegisterLanding from "./pages/registration/landing/RegisterLanding";
import Center_register from "./pages/registration/register/Center_register";
import Employee_register from "./pages/registration/register/Employee_register";

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
           
              <Outlet />
            
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/patients",
          element: <Patients />,
        },
        {
          path: "/centers",
          element: <Centers />,
        },
        {
          path: "/patients/:id",
          element: <Patient />,
        },
        {
          path: "/centers/:id",
          element: <Product />,
        },

      ],
    },
    {
      path: "/patient_login",
      element: <PatientLogin />,
    },
    {
      path: "/admin_login",
      element: <AdminLogin />,
    },
    {
      path: "/employee_login",
      element: <EmployeeLogin />,
    },
    {
      path: "/login_landing",
      element: <LoginLanding />,
    },
    {
      path: "/register_landing",
      element: <RegisterLanding />,
    },
    {
      path: "/patient_register",
      element: <Patient_register />,
    },
    {
      path: "/center_register",
      element: <Center_register />,
    },
    {
      path: "/employee_register",
      element: <Employee_register />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;