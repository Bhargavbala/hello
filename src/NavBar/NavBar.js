import { NavLink } from "react-router-dom";

function NavBar(){

    const navStyle = {
        color : "red" ,
         margin : "5px"
    }

    
    return (
        <div className = "nav-container" >
            <NavLink to = '/' >H</NavLink>
            <NavLink to = '/click-me' style = {navStyle}> Click me! </NavLink>
            </div>
    )
}

export default NavBar;