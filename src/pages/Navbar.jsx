import React, { useEffect } from 'react';
import SideBar from './SideBar';

import { Star } from './Star';


function Navbar() {

    const [handler, setHandler] = React.useState(false)
    const sendhandler = () => {
        console.log("navbar called")
        setHandler(prev => !prev)
    }

    const path = localStorage.getItem("path");

    useEffect(() => {
        console.log("I am fired",path)
    },[path])

   
    return (
        <div>
           
<SideBar sendhandler={sendhandler} />
        </div>
    )
}

export default Navbar
