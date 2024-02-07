import React from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';



function About() {
    const navigate = useNavigate()
   

    return (
        <div >
            <div className='navbar-home'>
                <div className='home-heading'>
                    <img src='https://1000logos.net/wp-content/uploads/2021/05/Gmail-logo.png' alt='Email' width="70px" height="40px" />
                    <span style={{ color: "#5f6368", fontFamily: "sans-serif", fontSize: "25px", marginTop: "8px" }}>Gmail</span>
                </div>
                <div className='home-topbutton'>
                    <Button variant="outlined" onClick={()=>navigate("creating-user/login")}>Sign in</Button>
                    <Button variant="contained" onClick={() => navigate("/creating-user/name")}>Create an account</Button>
                </div>
            </div>
            <div className='root-home'>
                <div className='sample'>
                    <h1 style={{ fontSize: "60px", marginTop: "80px", }}>Secure, smart, and easy to use email</h1>
                    <p style={{ fontSize: "20px" }}>Get more done with Gmail. Now integrated with Google Chat, Google Meet, and more, all in one place.</p>
                    <Button style={{ marginTop: "30px" }} variant="contained" size='larger' onClick={() => navigate("/creating-user/name")}>Create an account</Button>
                </div>
                <div className='home-image'>
                    {/* <img src='https://lh3.googleusercontent.com/PWXM4hp9lRRezHTV86SqLwhRQMz4_Lk08jll3GkWBvBZy_Uk6kvUvwIrVilwaIW2mHZJoccchG6o9a5UdOJEwQPf9oJGmOGSglo3VW0=rw-e365-w2880' alt="Gmail" /> */}
                </div>
            </div>
        </div>
    )
}

export default About
