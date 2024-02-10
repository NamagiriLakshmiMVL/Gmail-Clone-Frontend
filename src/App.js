import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from './pages/About';
import CreateAccountName from './pages/CreateAccountName';
import CreateAccountDob from './pages/CreateAccountDob';
import CreateAccountGmail from './pages/CreateAccountGmail';
import CreateAccountPassword from './pages/CreateAccountPassword'
import NavBar from './pages/Navbar';
import Login from './pages/Login';
import { Star } from './pages/Star';
import { Sent } from './pages/Sent';
import DisplayMsg from './pages/DisplayMsg';
import { Trash } from "./pages/Trash"
import { TopBar } from './pages/TopBar';


function App() {

  const val = localStorage.getItem("email")
  return (
    <>
    
       <TopBar/>


      <div style={{ display: "flex", marginBottom: "20px" }}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/creating-user/name" element={<CreateAccountName />} />
            <Route path="/creating-user/dob" element={<CreateAccountDob />} />
            <Route path="/creating-user/gmail" element={<CreateAccountGmail />} />
            <Route path="/creating-user/password" element={<CreateAccountPassword />} />
            <Route path='/creating-user/login' element={<Login />} />
            <Route path='/gmail/getting-star' element={<Star />} />
            <Route path='/gmail/getting-msg' element={<Sent />} />
            <Route path='/gmail/display-msg' element={<DisplayMsg />} />
            <Route path='/info/getting-delete' element={<Trash />} />

          </Routes>

        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
