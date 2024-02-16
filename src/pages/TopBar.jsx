import React, { useState } from 'react';
import { Avatar, TextField, Box, Typography, Button } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import axios from "axios";
import { API } from "../API"
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import TemporaryDrawer from './Test';


export function TopBar() {
    const [searchVal, setSearchVal] = useState("")
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: "20px",
        backgroundColor: "#eaf1fb",
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '10%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
    }));
    const avatar = localStorage.getItem("email")

    const handleChange = (event) => {
        setSearchVal(event.target.value)
        const newdata = {
            items: searchVal
        }
        console.log(newdata)
        // await axios.post(`${API}/gmail/search-msg`, newdata)
        //     .then((res) => console.log(res.data))
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
                    <Box sx={{ marginLeft: { xs: "0px", sm: "100px", md: "100px" }, }}><SearchIcon /></Box>
                    <Box sx={{ width: { xs: "160px", sm: "300px", md: "500px" }, borderRadius: "50px", backgroundColor: "#E4EFFA" }}>
                        <TextField id="outlined-basic" variant="outlined" sx={{ width: { xs: "160px", sm: "300px", md: "500px" } }} />

                    </Box>
                    <Box sx={{ marginLeft: "20px" }}>
                        <Avatar sx={{ bgcolor: deepOrange[500] }}>{avatar[1]}</Avatar>
                    </Box>
                </Box>


            </Box>

        </div>
    )
}
