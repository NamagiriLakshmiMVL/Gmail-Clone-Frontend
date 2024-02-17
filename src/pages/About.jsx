import React from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

function About() {
    const navigate = useNavigate()

    return (
        <div >
            <Box sx={{ display: { xs: "block", sm: "flex", md: "flex", lg: "flex" }, justifyContent: { xs: "flex-start", sm: "space-between", md: "space-between" }, alignItems: "center" }}>
                <Box sx={{ display: "flex" }}>
                    <Box
                        component="img"
                        sx={{
                            height: 40,
                            width: 70,
                            maxHeight: { xs: 40, md: 40 },
                            maxWidth: { xs: 70, md: 70 },

                        }}
                        src='https://1000logos.net/wp-content/uploads/2021/05/Gmail-logo.png'
                        alt='Email'
                    />
                    <Typography style={{ color: "#5f6368", fontFamily: "sans-serif", fontSize: "25px", marginTop: "8px" }}>Gmail</Typography>
                </Box>

                <Box sx={{ display: "flex", marginTop: { xs: "30px" }, gap: { xs: "15px", sm: "15px", md: "15px" } }} >
                    <Button variant="outlined" onClick={() => navigate("creating-user/login")}>Sign in</Button>
                    <Button variant="contained" onClick={() => navigate("/creating-user/name")}>Create an account</Button>
                </Box>

            </Box>
            <Box sx={{ display: { xs: "block", sm: "flex", md: "flex" }, justifyContent: { sm: "space-around" } }}> {/* <div className='root-home'> */}
                <Box>
                    <Typography sx={{ width: { sm: "40%", md: "40%" }, fontSize: { xs: "10vw", sm: "6vw", md: "3vw" }, marginTop: { xs: "20px", sm: "30px", md: "80px" } }} >Secure, smart, and easy to use email</Typography>
                    <Typography sx={{ fontSize: { xs: "15px", sm: "20px", md: "25px" }, marginTop: { xs: "20px" }, width: { sm: "40%", md: "40%" } }}>Get more done with Gmail. Now integrated with Google Chat, Google Meet, and more, all in one place.</Typography>
                    <Button sx={{ marginTop: "30px" }} variant="contained" size='larger' onClick={() => navigate("/creating-user/name")}>Create an account</Button>
                </Box>
                <Box sx={{ marginTop: { xs: "50px" } }}>
                    <Box sx={{ display: "flex" }}>
                        <Box
                            component="img"
                            sx={{
                                width: { xs: "230px", sm: "300px", md: "600px" },
                                height: { xs: "200px", sm: "300px", md: "500px" }
                            }}
                            src='https://img.freepik.com/free-vector/male-female-friends-talking-drinking-beer_74855-6547.jpg'
                            alt='chat'
                        />
                    </Box>
                </Box>
            </Box>
        </div>
    )
}

export default About


