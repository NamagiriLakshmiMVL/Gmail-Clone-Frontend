import { Box, Checkbox, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { API } from '../API';

function DisplayMsg() {

    const items = JSON.parse(localStorage.getItem('email'));
   
    axios.post(`${API}/gmail//getting-msg`,items)
    .then((res)=>console.log(res.data))
  

    return (
        <div>
            {/* {email.map((msg) => {
                return (
                    <div style={{display:"flex"}}>

                        <Checkbox size='small' />
                        <Box>
                            <Typography style={{ width: 200 }}>{x.firstname}</Typography>
                            <Typography style={{ width: 200 }}>{msg}</Typography>
                            
                          
                        </Box>
                       
                    </div>
                )

            }
            )} */}
 </div >
    )
}
export default DisplayMsg

  // const data = useSelector((state) => state.loginSlice.loginDetails)
    // const arr = []
    // arr.push(data[data.length-1])
    // const x = arr[0]
    // const email = []
    // for (let i = 0; i < x.message.length; i++) {
    //     email.push(x.message[i])
    // }
    // console.log(x)