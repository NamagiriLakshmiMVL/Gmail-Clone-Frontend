import React, { useState } from 'react';
import { Avatar, TextField, Box, Typography, Button } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import axios from "axios";
import SearchIcon from '@mui/icons-material/Search';
import TemporaryDrawer from './Test';
import { useDispatch } from 'react-redux';
import { search_message } from '../redux/searchSlice';


export function TopBar() {
    const dispatch = useDispatch()
    const [searchVal, setSearchVal] = useState("")
    const avatar = localStorage.getItem("email")

    const handleChange = async (event) => {
        setSearchVal(event.target.value)
        dispatch(search_message(event.target.value))

    }
    return (
        <div className='main-root'>
            <Box sx={{ display: { xs: "block", sm: "flex", md: "flex", lg: "flex" }, justifyContent: { xs: "flex-start", sm: "space-between", md: "space-between" }, alignItems: "center" }
            }>
                <Box sx={{ display: "flex" }}>
                    <Box sx={{ display: { xs: "flex", sm: "none", md: "none" } }}><TemporaryDrawer /></Box>
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
                <Box sx={{ display: { xs: "flex", sm: "flex", md: "flex" }, alignItems: "center", justifyContent: { xs: "flex-start", sm: "space-between", md: "space-between" }, marginTop: { xs: "30px", sm: "0px", md: "0px" } }}>
                    <Button sx={{ marginLeft: { xs: "0px", sm: "100px", md: "100px" } }} ><SearchIcon /></Button>
                    <Box sx={{width: { xs: "160px", sm: "300px", md: "500px" }, borderRadius: "50px", backgroundColor: "#E4EFFA" }}>
                        <TextField style={{height:"50px"}} placeholder="Search In Emails"onChange={(e) => handleChange(e)} id="outlined-basic" variant="standard" sx={{ width: { xs: "160px", sm: "300px", md: "500px" } }} InputProps={{
                            disableUnderline: true,
                        }} />

                    </Box>
                    <Box sx={{ marginLeft: "20px" }}>
                        <Avatar sx={{ bgcolor: deepOrange[500] }}>{avatar[1]}</Avatar>
                    </Box>
                </Box>


            </Box>

        </div>
    )
}
