import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { new_user } from '../redux/userSlice'


function CreatingAccountDob() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [month, setMonth] = React.useState('');
    const [gender, setGender] = React.useState('');

    const handleChange = (event) => {
        setMonth(event.target.value);
    };

    const handleChangegender = (event) => {
        setGender(event.target.value);
    };


    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.target);
        const day = data.get("day")
        const year = data.get("year")

        dispatch(new_user(["day", day]))
        dispatch(new_user(["month", month]))
        dispatch(new_user(["year", year]))
        dispatch(new_user(["gender", gender]))

        navigate("/creating-user/gmail")
    }


    return (
        <div>
            <Box sx={{ textAlign: "center", marginTop: "60px" }}>
                <form onSubmit={(e) => handleSubmit(e)} id='day'>
                    <Typography sx={{ fontSize: { xs: "20px", sm: "30px", md: "35px" }, marginLeft: { xs: "50px", sm: "300px", md: "550px" } }}>Google</Typography>

                    <Typography sx={{ fontSize: { xs: "10px", sm: "15px", md: "20px" }, marginLeft: { xs: "50px", sm: "300px", md: "550px" } }}>Basic Information</Typography>

                    <Typography sx={{ fontSize: { xs: "10px", sm: "15px", md: "20px" }, marginLeft: { xs: "50px", sm: "300px", md: "550px" } }}>Enter your Birthday and Gender</Typography>
                    <Box sx={{ marginTop: "30px", marginLeft: { xs: "50px", sm: "300px", md: "500px" }, display: "flex", gap: "5px" }}>
                        <TextField sx={{ width: "110px" }} label="Day" name='day' id='dayy' />

                        <Box sx={{ width: "110px" }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Month</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={month}

                                    onChange={handleChange}
                                >
                                    <MenuItem value={"January"}>January</MenuItem>
                                    <MenuItem value={"February"}>February</MenuItem>
                                    <MenuItem value={"March"}>March</MenuItem>
                                    <MenuItem value={"April"}>April</MenuItem>
                                    <MenuItem value={"May"}>May</MenuItem>
                                    <MenuItem value={"June"}>June</MenuItem>
                                    <MenuItem value={"July"}>July</MenuItem>
                                    <MenuItem value={"August"}>August</MenuItem>
                                    <MenuItem value={"September"}>September</MenuItem>
                                    <MenuItem value={"October"}>October</MenuItem>
                                    <MenuItem value={"November"}>November</MenuItem>
                                    <MenuItem value={"December"}>December</MenuItem>

                                </Select>
                            </FormControl>
                        </Box>


                        <TextField sx={{ width: "110px" }} label="Year" name='year' id='year' />
                        <br /><br />
                    </Box>

                    <Box sx={{ width: "150px", marginTop: "30px", marginLeft: { xs: "50px", sm: "300px", md: "550px" }, display: "flex" }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={gender}

                                onChange={handleChangegender}
                            >
                                <MenuItem id='male' value={"Male"}>Male</MenuItem>
                                <MenuItem id="female" value={"Female"}>Female</MenuItem>


                            </Select>
                        </FormControl>
                    </Box>
                    <br />
                    <Box sx={{ display: "flex",alignItems:"center", gap: "120px", marginLeft: { xs: "50px", sm: "300px", md: "500px" } }}>
                        <Button sx={{ margin: "10px 0px" }} onClick={() => navigate("/creating-user/name")} variant="contained" type='submit'>Back</Button>
                        <Button sx={{ margin: "10px 0px" }} variant="contained" type='submit' >Next</Button>
                    </Box>
                </form>
            </Box>
        </div>
    )
}

export default CreatingAccountDob