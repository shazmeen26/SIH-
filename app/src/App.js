
import './App.css';
import { BrowserRouter as Router ,Route, Routes} from "react-router-dom"
import User_register from './component/user_register';
import Login from './component/login';
function App() {
  return (
    <>
          <Router>
        <Routes>
          <Route path="/User_register" Component={User_register}/>
          
          <Route path="/Login" Component={Login}/>
        </Routes>
      </Router>
      


    </>
  );
}

export default App;
