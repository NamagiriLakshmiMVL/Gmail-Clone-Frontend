import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button, TextField } from '@mui/material';
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
        <div className='creating-account-dob'>
            <form onSubmit={(e) => handleSubmit(e)} id='day'>
                <h1>Google</h1>
                <h2>Basic information</h2>
                <h4>Enter your birthday and gender</h4>
                <div className='dob'>
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
                </div>

                <Box sx={{ width: "110px" , marginLeft:"56px",marginTop:"15px" }}>
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
                <Button style={{marginBottom:"20px"}} variant="contained" type='submit' >Next</Button>
            </form>

        </div>
    )
}

export default CreatingAccountDob