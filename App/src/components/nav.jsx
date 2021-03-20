import React from "react";

// route imports 
import {
    BrowserRouter as Router, 
    Route, 
    Switch, 
    Link,
    useLocation
    // Redirect
  } from 'react-router-dom';
// Nav Component
const Nav = ({search}) => {

    return(
        <div>
            <div>nav</div>
        <Link to="items?search=prueba">Prueba</Link>

            <nav></nav>
        </div>
    )
}
export default Nav;