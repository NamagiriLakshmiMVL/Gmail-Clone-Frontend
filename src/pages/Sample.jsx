import React, { useState } from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Button } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { star_message } from '../redux/starSlice';

import { useDispatch } from 'react-redux';

export function Sample({id}) {
    const [star, setStar] = useState(false)
    const dispatch = useDispatch()

    const handleSent = () => {
        setStar(!star)
        dispatch(star_message(id))

    }

    return (
        <>
            <Button onClick={() => handleSent()}> {star === true ? <StarIcon /> : <StarBorderIcon />}</Button>


        </>
    )
}
