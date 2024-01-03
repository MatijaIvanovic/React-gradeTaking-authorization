import GradePage from "../Pages/GradePage";
import LoginPage from "../Pages/LoginPage"
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import RequireAuth from "./RequireAuth";
import SignupPage from "../Pages/SignupPage";
import LogoutPage from "../Pages/LogoutPage";
function App() {

  return( 
    <div className="App" style={{ display: 'flex', justifyContent: 'center' }}>

    <BrowserRouter>
      <ul style={{ display: 'flex', flexDirection: 'row' }}>
        <li style={{ marginRight: '20px' }}>
          <Link to='/'>Home</Link>
        </li>
        <li style={{ marginRight: '20px' }}>
          <Link to='/login'>Login</Link>
        </li >
        <li style={{ marginRight: '20px' }}>
          <Link to='/signup'>Signup</Link>
        </li>
        <li style={{ marginRight: '20px' }}>
          <Link to='/logout'>Logout</Link>
        </li>
      </ul>
      <Routes>
        <Route index element ={<RequireAuth><GradePage/></RequireAuth>} />
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/logout" element={<LogoutPage/>}/>
      </Routes>
    </BrowserRouter>
    
    </div>
    );
  
}

export default App;
