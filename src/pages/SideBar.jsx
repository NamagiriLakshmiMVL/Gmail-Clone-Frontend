import Box from '@mui/material/Box';
import * as React from 'react';
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



function SideBar(){
    return(
        <div>
<Box sx={{ maxWidth: 200, bgcolor: 'background.paper' }}>
<nav aria-label="main mailbox folders">
    <List>
       
        <ListItemButton>
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
        <ListItemButton>
            <ListItemIcon>
                <SendIcon />
            </ListItemIcon>
            <ListItemText primary="Sent" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                < MailIcon/>
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
            <ListItemButton>
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
        </div>
    )
}


export default SideBar