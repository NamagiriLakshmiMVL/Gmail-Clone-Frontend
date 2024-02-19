import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Tooltip, Typography, Table } from '@mui/material';
import { API } from '../API';
import { useSelector } from 'react-redux';
import { TopBar } from './TopBar';
import Navbar from './Navbar';
import StarIcon from '@mui/icons-material/Star';
import DeleteIcon from '@mui/icons-material/DeleteOutlineTwoTone';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Avatar } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import CloseIcon from '@mui/icons-material/Close';
import RefreshIcon from '@mui/icons-material/Refresh';
import { toast } from 'react-toastify';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: 250, sm: 600, md: 800 },
    height: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const style1 = {
    overflow: "scroll",
    textindent: "50px",
    border: "1px solid #808080",
    bgcolor: "#D0D0D0",
    height: { xs: "fit-content", sm: 150, md: 150 }


}
const style2 = {
    overflow: "scroll",
    textindent: "50px",
    border: "1px solid #808080",
    bgcolor: "#D0D0D0",
    height: { xs: 100, sm: 150, md: 150 }

}
export function Star() {
    const [sent, setSent] = useState([])

    const id = useSelector((state) => state.starSlice.starMessage)
    console.log(id)
    const result = {
        id
    }
    const [modal, setModal] = useState([])
    const handleClose = () => setOpen(false);
    const [open, setOpen] = useState(false);
    const handleOpen = (val) => {
        setOpen(true)
        setModal(val)
    };
    useEffect(() => {
        axios.post(`${API}/gmail/getting-star`, result)
            .then((res) => setSent(res.data))
    }, [])
    const handleDelete = (val) => {
        setSent(sent.filter((item) => item._id !== val._id))
        toast.success("Deleted Successfully", {
            position: "top-center",
            autoClose: 1000
        })
    }

    const avatar = localStorage.getItem("email")
    return (
        <div>
            <Box> <TopBar /> </Box>
            <Box sx={{ display: "flex" }}>
                <Box sx={{ display: { xs: "none", sm: "flex", md: "flex" } }}><Navbar /></Box>
                <Box>

                    <Box>
                        {sent.map((val, ind) => {
                            return (
                                <Box sx={{ marginTop: "60px" }}>
                                    <Tooltip title={val.message}>
                                        <Table sx={{ marginLeft: { xs: "0px", sm: "80px", md: "100px" }, border: "1px solid black", display: "flex", alignItems: "center", width: { xs: "100%", sm: "100%", md: "100%" }, cursor: "pointer", backgroundColor: "lightgray" }} >
                                            <Checkbox size='small' />
                                            <Button> <StarIcon fontSize='small' style={{ marginRight: 10 }} /></Button>
                                            <Box onClick={() => handleOpen(val)} sx={{
                                                overflow: "hidden",
                                                display: "flex", width: { xs: 100, sm: 200, md: 300, lg: 500 }
                                            }}>

                                                <Typography sx={{
                                                    fontSize: { xs: 10, sm: 11, md: 15, lg: 17, },
                                                    fontWeight: 600,
                                                    width: 180,

                                                }} style={{ width: 200 }}>{val.to}</Typography>
                                                <Typography sx={{
                                                    marginLeft: "40px",
                                                    fontSize: { xs: 8, sm: 11, md: 15, lg: 17, },
                                                    fontWeight: "bold",
                                                    width: 180,
                                                    textOverflow: "ellipsis",
                                                    overflow: "hidden"
                                                }} style={{ width: 200 }}>{val.subject}</Typography>
                                                <Typography sx={{
                                                    fontSize: { xs: 8, sm: 11, md: 15, lg: 17 },
                                                    width: 180,
                                                    textOverflow: "ellipsis",
                                                    overflow: " hidden",
                                                }} style={{ width: 200 }}>{val.message}</Typography>
                                            </Box>
                                            <Button onClick={() => handleDelete(val)}><DeleteIcon color='inherit' /></Button>

                                        </Table>
                                    </Tooltip>


                                </Box>
                            )
                        })}
                    </Box>
                </Box>
            </Box>
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div style={{ display: "flex" }}>
                                <Avatar sx={{ bgcolor: deepOrange[500] }}>{avatar[1]}</Avatar>
                                <div style={{ marginLeft: "8px" }}>
                                    <Typography id="modal-modal-title" sx={{ fontSize: "16px" }}>
                                        <b>From:{modal.from}</b>
                                    </Typography>
                                    <Typography id="modal-modal-title" sx={{ fontSize: "16px" }}>
                                        To:{modal.to}
                                    </Typography>
                                </div>


                            </div>
                            <CloseIcon style={{ cursor: "pointer", marginRight: "10px" }} onClick={() => setOpen(false)} />

                        </div>
                        <Box sx={{ backgroundColor: "#C0C0C0", marginTop: "20px" }}>
                            <Typography id="modal-modal-description" variant="h6" component="h2" sx={style1}>
                                Sub: <b>{modal.subject}</b>
                            </Typography>
                        </Box>
                        <br /><br />
                        <Typography id="modal-modal-title" variant="h6" component="h2" sx={style2}>
                            {modal.message}
                        </Typography>
                        <br />
                        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "10px" }}>
                            <Button variant="contained" onClick={() => setOpen(false)}>Close</Button>
                        </div>
                    </Box>



                </Modal>
            </div>
        </div>
    )
}
