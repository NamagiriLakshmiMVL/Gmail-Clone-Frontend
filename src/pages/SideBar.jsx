import Box from '@mui/material/Box';
import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import StarBorder from '@mui/icons-material/StarBorder';
import MailIcon from '@mui/icons-material/Mail';
import EditIcon from '@mui/icons-material/Edit';
import axios from "axios";
import CloseIcon from '@mui/icons-material/Close';
import { API } from '../API'
import { useNavigate } from 'react-router-dom';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
}; 


export default function SideBar({sendhandler=()=>{}}) {
    const navigate = useNavigate()
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [open, setOpen] = useState(false);

    const from = JSON.parse(localStorage.getItem("email"))
    const handleSubmit = (e) => {
        e.preventDefault()
        const reqObject = {
            from: e.target.from.value,
            to: e.target.to.value,
            subject:e.target.subject.value,
            message: e.target.message.value

        }
        axios.post(`${API}/gmail/sent`, reqObject)
            .then(() => alert("Message Sent Successfully"))
             .then(() => setOpen(false))
    }

    return (
        <div>
            <Box sx={{ maxWidth: 200, bgcolor: 'background.paper' }}>
                <nav aria-label="main mailbox folders">
                    <List>

                        <ListItemButton onClick={handleOpen}>
                            <ListItemIcon>
                                <EditIcon />
                            </ListItemIcon>
                            <ListItemText primary="Compose" />
                        </ListItemButton>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText primary="Inbox" />
                            </ListItemButton>
                        </ListItem>
                        <ListItemButton onClick={()=>navigate("/gmail/getting-msg")}>
                            <ListItemIcon>
                                <SendIcon />
                            </ListItemIcon>
                            <ListItemText primary="Sent"  />
                        </ListItemButton>
                        <ListItemButton onClick={()=>navigate("/gmail/getting-star")}>
                            <ListItemIcon >
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="Starred" />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon>
                                < MailIcon />
                            </ListItemIcon>
                            <ListItemText primary="All Mail" />
                        </ListItemButton>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <DraftsIcon />
                                </ListItemIcon>
                                <ListItemText primary="Drafts" />
                            </ListItemButton>

                        </ListItem>

                    </List>

                </nav>
                <Divider />
                <nav aria-label="secondary mailbox folders">
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton onClick={()=>navigate("/info/getting-delete")}>
                                <ListItemText primary="Trash" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#simple-list">
                                <ListItemText primary="Spam" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </nav>
            </Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >

                <Box sx={style}>
                    <form onSubmit={(e) => handleSubmit(e)} >
                        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                        <h2>New Message</h2>
                        <CloseIcon style={{cursor:"pointer"}} onClick={()=>setOpen(false)}/>
                        </div>
                        
                        <label>from:</label>
                        <input type="text" name="from" value={from} />
                        <br /><br/>
                        <label>To:</label>
                        <input type="text" name="to" />
                        <br /><br/>
                        <label>Subject:</label>
                        <input type="text" name="subject" />
                        <br /><br/>
                        <label>Message:</label>
                        <input type="text" name="message" />
                        <br /><br/>


                        <Button type="submit" variant="contained" onClick={()=>sendhandler()}>Send</Button>
                    </form>
                </Box>

            </Modal>
        </div>
    )
}

