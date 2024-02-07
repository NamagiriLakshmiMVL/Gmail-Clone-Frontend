import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './pages/About';
import CreateAccountName from './pages/CreateAccountName';
import CreateAccountDob from './pages/CreateAccountDob';
import CreateAccountGmail from './pages/CreateAccountGmail';
import CreateAccountPassword from './pages/CreateAccountPassword'
import NavBar from './pages/Navbar';
import Login from './pages/Login';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/creating-user/name" element={<CreateAccountName/>} />
          <Route path="/creating-user/dob" element={<CreateAccountDob/>} />
          <Route path="/creating-user/gmail" element={<CreateAccountGmail/>} />
          <Route path="/creating-user/password" element={<CreateAccountPassword/>} />
          <Route path='/gmail' element={<NavBar/>}/>
          <Route path='creating-user/login' element={<Login/>}/>


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
