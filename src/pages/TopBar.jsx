import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

export function TopBar(props) {

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
    return (
        <div className='main-root'>
            <div className='main-1'>
                <img src='https://1000logos.net/wp-content/uploads/2021/05/Gmail-logo.png' alt='Email' width="70px" height="40px" />
                <span style={{ color: "#5f6368", fontFamily: "sans-serif", fontSize: "25px", marginTop: "8px" }}>Gmail</span>

            </div>
            <div className='main-2'>
                <Search >
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search mail"
                        inputProps={{ 'aria-label': 'search' }}

                    />
                </Search>

            </div>
            <div style={{ marginLeft: "0px" }}>
                <Avatar sx={{ bgcolor: deepOrange[500] }}>{avatar[1]}</Avatar>
            </div>
        </div>
    )
}
