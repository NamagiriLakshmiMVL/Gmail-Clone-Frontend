import React, { useState } from 'react'

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import SendIcon from '@mui/icons-material/Send';
import StarBorder from '@mui/icons-material/StarBorder';
import MailIcon from '@mui/icons-material/Mail';
import EditIcon from '@mui/icons-material/Edit';
import axios from "axios";
import CloseIcon from '@mui/icons-material/Close';
import { API } from '../API';
import { useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';
import { toast } from 'react-toastify';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: 250, sm: 800, md: 800 },
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function TemporaryDrawer() {

    const navigate = useNavigate()
    const [send, setSend] = useState(false)

    const sendhandler = () => {
        setSend(prev => !prev)
    }


    const from = JSON.parse(localStorage.getItem("email"))
    const handleSubmit = async (e) => {
        e.preventDefault()

        const data = new FormData(e.target)
        const reqObject = {
            from: data.get("from"),
            to: data.get("to"),
            subject: data.get("subject"),
            message: data.get("message")

        }
        await axios.post(`${API}/gmail/sent`, reqObject)
            .then(() => toast.success("Message Sent Successfully", {
                position: "top-center",
                autoClose: 1000,
            }))
            .then(() => toast.info("Refresh to see new data", {
                position: "top-center",
                autoClose: 2000,
            }))
            .then(() => setOpen(false))
    }

    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    const handleOpen = () => {
        setOpen(true)
    };
    const handleClose = () => setOpen(false);
    const [open, setOpen] = useState(false);
    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}>
                
            <Box sx={{ maxWidth: 200, bgcolor: 'background.paper', marginTop: "20px" }}>
                <nav aria-label="main mailbox folders">
                    <List>
                        <ListItemButton onClick={handleOpen}>
                            <ListItemIcon>
                                <EditIcon />
                            </ListItemIcon>
                            <ListItemText primary="Compose" />
                        </ListItemButton>
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => navigate("/gmail/display-msg")}>
                                <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText primary="Inbox" />
                            </ListItemButton>
                        </ListItem>
                        <ListItemButton onClick={() => navigate("/gmail/getting-msg")}>
                            <ListItemIcon>
                                <SendIcon />
                            </ListItemIcon>
                            <ListItemText primary="Sent" />
                        </ListItemButton>
                        <ListItemButton onClick={() => navigate("/gmail/getting-star")} >
                            <ListItemIcon >
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="Starred" />
                        </ListItemButton>
                        <ListItemButton onClick={() => navigate("/gmail/display-msg")}>
                            <ListItemIcon>
                                < MailIcon />
                            </ListItemIcon>
                            <ListItemText primary="All Mail" />
                        </ListItemButton>
                    </List>

                </nav>
                <Divider />
                <nav aria-label="secondary mailbox folders">
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => navigate("/info/getting-delete")} >
                                <ListItemText primary="Trash" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </nav>
            </Box>
           
        </Box>
    );

    return (
        <div>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}><MenuIcon /></Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
             <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form onSubmit={(e) => handleSubmit(e)} id='compose' >
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <h2>New Message</h2>
                            <CloseIcon style={{ cursor: "pointer" }} onClick={() => setOpen(false)} />
                        </div>
                        <TextField id="afrom" label="From" name='from' value={from} style={{ width: "100%" }} />
                        <br /><br />
                        <TextField id="ato" label="To" name='to' style={{ width: "100%" }} />
                        <br /><br />
                        <TextField id='asubject' label="Subject" name='subject' style={{ width: "100%" }} />
                        <br /><br />

                        <TextField id='amessage' label="Message" name='message' style={{ width: "100%" }} />
                        <br /><br />

                        <Button type="submit" variant="contained" onClick={() => sendhandler()}>Send</Button>
                    </form>
                </Box>
            </Modal>

        </div>
    );
}