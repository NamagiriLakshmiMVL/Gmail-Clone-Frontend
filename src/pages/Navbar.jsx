import React, { useEffect } from 'react';
import SideBar from './SideBar';

function Navbar() {

    const [handler, setHandler] = React.useState(false)
    const sendhandler = () => {
        setHandler(prev => !prev)
    }
    const path = localStorage.getItem("path");
    useEffect(() => {
    }, [path])

    return (
        <div>
            <SideBar sendhandler={sendhandler} />
        </div>
    )
}

export default Navbar
